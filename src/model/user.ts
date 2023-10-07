import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})

const user=mongoose.model("User",userSchema);
export default user;