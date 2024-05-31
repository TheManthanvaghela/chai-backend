import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

app.use(cors({
    origin:  process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"50kb "}))
app.use(express.urlencoded({extended:true, limit:"50kb"}))
app.use(express.static("public"))
app.use(cookieParser())   

// routs import

import userRouter from "./routes/user.routes.js"

// routes decleration

app.use("/api/v1/users", userRouter) 

export  {app}