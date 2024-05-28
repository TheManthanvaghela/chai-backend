//require('dotenv').config({path:'/.env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constans";
import connectDB from "./db/db1.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
})
connectDB()




















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