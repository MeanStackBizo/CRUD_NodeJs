import mongoose from "mongoose";
//import mongoosePaginate from "mongoose-paginate"

let bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
})

const book=mongoose.model("book",bookSchema)
export default book;