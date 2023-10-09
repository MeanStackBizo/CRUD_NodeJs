import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');
import {secretKey} from "./env"
export const fetchUser  =  (req:Request, res:Response, next:NextFunction) => {
    if (req.path.includes("user") ){
         next();
    }else{
        try {
            const token = req.header("Authorization")?.substring(7);
            const decodedToken = jwt.verify(token, secretKey);
            next();
          } catch (error:any) {
            res.status(401).json({
              error: error
            });
          }
    }
};