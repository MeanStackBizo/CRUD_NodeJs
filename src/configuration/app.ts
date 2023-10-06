
import express from "express";
const bodyparser=require("body-parser")
const cors=require("cors");

const app=express();
app.use(cors());
app.use(bodyparser.json());

export default app;