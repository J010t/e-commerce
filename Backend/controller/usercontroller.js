import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// sign up
const signUp = async (req,res)=>{
    const {username,password,email} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const result = await User.create({email,username,password:hashedPassword});
        const token = jwt.sign({email:result.email,id:result._id},process.env.JWT_SECRET_KEY);
        res.status(200).json({result,token});

    } catch (err) {
        console.log(err);
    }
};


//login
const logIn = async (req,res) => {
    const {email,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign({email:existingUser.email,id:existingUser._id},process.env.JWT_SECRET_KEY);
        res.status(200).json({result:existingUser,token});
        
        
    } catch (err) {
        console.log(err);
    }
} 


export {signUp,logIn}
