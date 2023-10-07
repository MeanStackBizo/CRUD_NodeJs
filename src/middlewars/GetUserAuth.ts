import { Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const GetUserAuth=(req:Request) => {
        try {
            const token = req.header("authorization")?.substring(7);
            const decodedToken = jwt.verify(token, 'Token_Secret');
            return decodedToken;
          } catch (error:any) {
              return null;
          }
}
