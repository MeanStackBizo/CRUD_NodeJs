import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const fetchUser  =  (req:Request, res:Response, next:NextFunction) => {
    if (req.path.includes("user") ){
         next();
    }else{
        try {
            const token = req.header("authorization")?.substring(7);
            const decodedToken = jwt.verify(token, 'Token_Secret');
            next();
          } catch (error:any) {
            res.status(401).json({
              error: error.message
            });
          }
    }
};