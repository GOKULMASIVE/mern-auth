import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express();

const mongo=await mongoose.connect(process.env.DBAddress).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err))

app.listen(3000, () => {
  console.log("server get started at localhost:3000");
}); 
 
