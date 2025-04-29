import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../db/db.config.js";

const JWT_SECRET = process.env.JWT_SECRET;

// Signup
export const createUser = async (req, res) => { 
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.json({
            status:400,
            message: "Enter the required credentials",
        })
    }

    const findUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
    
      if (findUser) {
        return res.json({
          status: 400,
          message: "Email already exists. Please use another email.",
        });
      }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            password :hashedPassword,
        }
    });

    // Generate token for the new user
    const token = jwt.sign({ id: newUser.id}, JWT_SECRET, {expiresIn: "1h"});
    return res.json({
        status:200,
        success:true,
        data:{
            token,
            user:{id:newUser.id, name:newUser.name, email:newUser.email}
        },
        message: "User created successfully",
    });
}

// Login
export const loginUser = async (req, res) => { 

    const {email, password} = req.body;
    
    console.log("Login attempt with:", email);

    if (!email || !password) {
        return res.json({
            status: 400,
            message: "Enter the required credentials",
        })
    }

    const findUser = await prisma.user.findUnique({
        where: {
            email: email,
        }
    });
    
    console.log("User found:", findUser ? "Yes" : "No");

    if (!findUser) {
        return res.json({
            status: 400,
            message: "Invalid credentials",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    
    console.log("Password valid:", isPasswordValid ? "Yes" : "No");

    if (!isPasswordValid) {
        return res.json({
            status: 400,
            message: "Invalid credentials",
        });
    }


    // Generate token for the user
    const token = jwt.sign({ id: findUser.id }, JWT_SECRET, { expiresIn: "1h" });

    return res.json({
        status:200,
        success:true,
        data:{
            token,
            user:{id:findUser.id, name:findUser.name, email:findUser.email}
        },
        message:"Login successful",
    });
}