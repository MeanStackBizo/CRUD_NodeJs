const express=require("express")
const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/FirstCrud')
            .then(()=>console.log("ok"))
            .catch(()=>console.log("No"));
            
const app=express();

app.use((req,res)=>{
    res.json("Hello World")
})

module.exports =app