import { Request, Response } from "express";
import {GetUserAuth} from "../middlewars/GetUserAuth"

export const profileUser= (req:Request,res:Response)=>{
    const user= GetUserAuth(req);
    res.status(200).json({message:user});
}