// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:'./env'});
connectDB()
.then(() => {
    app.on((err)=>{
        console.log("Application is not able to talk to database:",err);
        throw err;
    })
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port:${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log("MONGO db connection failed !!!",err);
})








/** EXPRESS SETUP */
/*
import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.log("Application not able to talk o database: ", err);
            throw err;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server started at port ${process.env.PORT}`);
        })
    }catch(err){
        console.error("ERROR: ",err)
        throw err;
    }
})()
*/