import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
//import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import dotenv from"dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();


//const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001



//middleware
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())  // this middleware will parse JSON bodies: req.body
app.use(rateLimiter)



//

// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.URL}`);
//     next();
    
// })

app.use("/api/notes", notesRoutes)


connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("Server started on PORT: ", PORT);
});

})




//mongodb+srv://ssen18e:pVj241UxfILCxjEh@cluster0.q2ld9aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0