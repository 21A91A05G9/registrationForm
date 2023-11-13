import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import register from "./models/register";
const app=express();
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://vasavi_08:dnStiz5jq68pGmhA@cluster0.yhpakpu.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(()=> app.listen(5001))
.then(()=>console.log("Connected to Database & Listening to localhost 5001"))
.catch((err)=>console.log(err));
app.post('/register',async(req,res,next)=>{
    console.log("Data in backend:",req.body)
    const {name,username,email,password} = req.body
    const registerData = new register({
        name,
        username,
        email,
        password
    })
    try{
        registerData.save()
    }
    catch(err){
        console.log(err)
    }
    return  res.send({"blogData":registerData},{msg:"submitted"})
})

