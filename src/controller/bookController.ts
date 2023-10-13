import { Request, Response } from "express";
import book from "../model/book";

export const findAll=  async (req:Request,res:Response)  => {

     let page:number=parseInt(req.query.page?.toString() || '1');
     let size:number=parseInt(req.query.size?.toString() || '5');

     const search = req.query.search || '';
   try{
          const books=await book.paginate({title:{$regex:".*(?i)"+search+".*"}},{
               page:page,
               limit:size
          });
          if(!books){
               res.status(404).json({"message":"Not Found"})
          }else{
               res.status(200).json(books);
          }
   }catch(err){
        res.status(500).json({"message":"Internal Server"});
   }
}

export const AddBook =  async (req:Request,res:Response)=>{
     if(!req.body.title || !req.body.author || !req.body.price){
          res.status(400).json({"message":"Required"})
     }
     const newbook=new book(req.body);
     try{
          await newbook.save();
          res.status(201).json(newbook);
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

export const UpdateBYId=async (req:Request,res:Response)=>{
     try{
          const updatedBook=await book.findByIdAndUpdate(req.params.id,req.body,{new:true})
          if(!updatedBook){
               return res.status(404).json({'message':"Not Found"});
           }
           res.json(updatedBook);
     }catch(er){
          res.status(500).json({ message: er }); 
     }
}