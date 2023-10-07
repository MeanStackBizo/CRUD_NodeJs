import { Request, Response } from "express";
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
import User from "../model/user";

exports.signup = async (req: Request, res: Response) => {
    await bcrypt
      .hash(req.body.password, 10)
      .then((hash: any) => {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          Cin: req.body.cin,
          Photo: req.body.photo,
        });
              user.save()
                .then(() => res.status(201).json({
                  message: 'User created !',
                  status: 201
                }))
                .catch(error => res.status(400).json({ error }));
      })
      .catch((error: any) => {
        res.status(500).json({ message: error });
      });
  };

  exports.login= async (req:Request,res:Response)=>{
     User.findOne({email:req.body.email}).then((user:any)=>{
        if(!user){
            res.status(401).json({error:'User Not Found'});
        }
        bcrypt.compare(req.body.password,user.password).then((valid:any)=>{
            if(!valid){
                res.status(401).json({error:"Wrong Password"})
            }
            res.status(200).json({
                user:user,
                token:jwt.sign(
                    {user:user},
                    'Token_Secret',
                )
            })
        }).catch((error:any)=>{
            res.status(500).json({error})
        });
     }).catch((error:any)=>{
        res.status(500).json({error})
     });
  }