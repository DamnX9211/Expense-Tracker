import {User} from "../models/userModel.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const {fullname, email, password}= req.body;
        if(!fullname || !email || !password){
            return res.status(400).json({
                message:"All fields are required",
                succes: false
            })
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exists",
                success: false
            })
        };

        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            password: hashPassword
        });
        return res.status(201).json({
            message: "User registered successfully",
            success: true
        })

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const login = async (req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            res.status(400).json({
                message: "Email and password are required",
                success: false
            })
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success: false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!user){
            return res.status(400).json({
                message:"Invalid email or password",
                success: false
            })
        };
        const tokenData = {
            userId: user._id
        }
        const token = await Jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d"});
        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly: true, sameSite: "strict"}).json({
            message: `Welcome back ${user.fullname}`,
            user:{
                id: user._id,
                fullname: user.fullname,
                email: user.email
            },
            success: true
        })

    } catch (error){
        console.log(error);
    }
}

export const logout = async (req,res) =>{
    try {
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: "Logout successful",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}