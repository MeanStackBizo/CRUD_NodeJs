
import express from "express";
const bodyparser=require("body-parser")
const cors=require("cors");

const app=express();
app.use(cors());
app.use(bodyparser.json({ limit: "500mb" }));
app.use(bodyparser.urlencoded({ extended: true, limit: "500mb" }));
//app.use(bodyparser.json());

export default app;