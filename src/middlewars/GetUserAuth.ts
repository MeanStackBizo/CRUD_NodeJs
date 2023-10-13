import { Request, Response } from "express";
const jwt = require('jsonwebtoken');
import {secretKey} from "./env"
import user from "../model/user";
export const GetUserAuth=async (req:Request) =>{
        try {
            const token = req.header("Authorization")?.substring(7);
            const decodedToken = jwt.verify(token, secretKey);
            const user_auth=await user.find({_id:decodedToken.userId}).exec();
            return user_auth;
          } catch (error:any) {
              return null;
          }
}
