import { Request, Response } from "express";
const bcrypt=require("bcrypt")
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
        // try {
        //   const savedUser = user.save();
        //   res.status(201).json({ "message": "User Created" });
        // } catch (err) {
        //   res.status(500).json({ message: err });
        // }
      })
      .catch((error: any) => {
        res.status(500).json({ message: error });
      });
  };