// import mongoose  from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";

import connectDb from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDb();









/*
import express from "express";
const app=express();
(async()=>{
    try{
    await   mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(err)=>{
        console.log(err);
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listing on port ${process.env.PORT}`)
    })
    } catch(err){
        console.log(err);
    }
})()*/