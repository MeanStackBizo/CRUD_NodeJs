import { Request, Response } from "express";
import {GetUserAuth} from "../middlewars/GetUserAuth"

export const profileUser= (req:Request,res:Response)=>{
    try{
        const user= GetUserAuth(req);
        console.log("Received User:", user);
        res.status(200).json({message:user});
    }catch(Error:any){
        res.status(500).json({message:Error});
    }
 
}