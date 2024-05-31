//require('dotenv').config({path:'/.env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constans";
import dotenv from "dotenv";
import connectDB from "./db/db1.js";
import {app} from "./app.js";

dotenv.config({
  path : './.env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
.catch((err) => {
    console.log("MONGO db connection failed!!!", err);
  });














/*
import express from "express"
const app = express()
(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error:", error)
            throw error
        }) 

            app.listen(process.env.PORT,()=>{
                console.log(`App is running on port ${process.env.PORT}`);
            }) 

    } catch (error) {
        console.error("ERROR", error);
        throw err
    }
})
*/