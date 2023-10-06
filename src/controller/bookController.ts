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

export const getById=async (req:Request,res:Response)=>{
     try{
          const book_found=await book.findById(req.params.id);
          if(!book_found){
               res.status(404).json({"message":"Not Found"});
          }
          res.status(200).json(book_found);
     }catch(er){
          res.status(505).json({message:er});
     }
}



export const DeleteById = async (req: Request, res: Response) => {
     try {
       const deletebook = await book.findByIdAndDelete(req.params.id);
       if (!deletebook) {
         return res.status(404).json({ 'message': "Not Found" }); 
       }
       res.status(200).json({'message':"Delete success"});
     } catch (er) {
       res.status(500).json({ message: er }); 
     }
   }