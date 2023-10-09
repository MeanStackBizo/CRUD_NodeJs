import { Request, Response } from "express";
const jwt = require('jsonwebtoken');
import {secretKey} from "./env"
export const GetUserAuth=(req:Request) => {
        try {
            const token = req.header("Authorization")?.substring(7);
            const decodedToken = jwt.verify(token, secretKey);
            return decodedToken;
          } catch (error:any) {
              return null;
          }
}
