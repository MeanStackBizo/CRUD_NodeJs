import { Request, Response } from "express";
import book from "../model/book";

export const findAll=  async (req:Request,res:Response)  => {
   try{
        const books=await book.find().exec();
        res.status(200).json(books);
   }catch(err){
        res.status(500).json({"message":"Internal Server"});
   }
}


export const AddBook =  async (req:Request,res:Response)=>{
     const {title,author}=req.body;
     if(!title || !author){
          res.status(400).json({"message":"Required"})
     }
     const newbook=new book({title,author});
     try{
          const savebook= await newbook.save();
          res.status(201).json(savebook);
     }catch(err){
          res.status(400).json({message : err })
     }
}