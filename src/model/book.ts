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
    price:{
        type:Number,
        required:false
    },
    available:{
        type:Boolean,
        requires:true,
        default:false
    },
    publishingDate:{
        type:Date,
        required:true,
        default:Date.now
    }
})

const book=mongoose.model("book",bookSchema)
export default book;