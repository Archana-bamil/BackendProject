// import mongoose  from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`app is listing on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongoDb connect error ",err);
    
})









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