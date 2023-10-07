import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

export const fetchUser  =  (req:Request, res:Response, next:NextFunction) => {
    if (req.path.includes("user") ){
         next();
    }else{
        try {
            const token = req.header("Authorization")?.split(' ')[1];
            const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
            const userId = decodedToken.userId;
            if (!req.headers.userid) {
                throw 'Bad userID request';
            } else if (req.headers.userid !== userId) {
              throw 'Invalid user ID';
            } else {
              next();
            }
          } catch (error:any) {
            res.status(401).json({
              error: error.message
            });
          }
    }
};