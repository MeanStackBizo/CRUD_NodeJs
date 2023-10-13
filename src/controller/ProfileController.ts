import { Request, Response } from "express";
import {GetUserAuth} from "../middlewars/GetUserAuth"

export const profileUser=async (req:Request,res:Response)=>{
    try{
        const user=await GetUserAuth(req);
       // console.log("Received User:", user);
        res.status(200).json({message:user});
    }catch(Error:any){
        res.status(500).json({message:Error});
    }
 
}