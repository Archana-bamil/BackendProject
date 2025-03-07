import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb=async ()=>{
    try {
    const connectInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
    console.log(`/n mongoDB connected ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("error ",error);
        process.exit(1);
    }
}
export default connectDb;