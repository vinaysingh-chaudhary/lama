import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import users from '../../../../models/user.model'
import dbConnect from '../../../../database/dbConnect'
import axios from "axios";
import jwt from 'jsonwebtoken'


dbConnect(); 
export const POST = async(NextRequest) => {
    const {email, password} = await NextRequest.json(); 
     
    try {
        if(!email || !password)
            return NextResponse.json({error: "Provide email and password"}, {status: 401});
        
    
        const isAlreadyExists = await users.findOne({email: email});
        if(isAlreadyExists){

            const userWithoutPassword = await users.findById(isAlreadyExists._id).select(
                "-password -accessToken"
            ); 

            const generatedAccessToken = jwt.sign(
                {
                    _id: userWithoutPassword?._id
                },  
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '30d'
                }
             ); 

             const response = NextResponse.json(
                {
                    success: true, 
                    message: "User logged in successfully", 
                    user: userWithoutPassword
                },
                {
                    status: 200
                }
            ); 

             response.cookies.set("accessToken", generatedAccessToken, {
                httpOnly: true,
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
            }); 

            return response; 
        }

   
        const hashedPassword = await bcrypt.hash(password, 10); 
    
        const registerUserRefrence = await users.create(
            {
                email,
                password: hashedPassword
            }
        ); 
    
        if(!registerUserRefrence)
            return NextResponse.json({error: "Failed to register user"}, {status: 500}); 
    

        const userWithoutPassword = await users.findById(registerUserRefrence._id).select(
            "-password -accessToken"
        ); 


        const generatedAccessToken = jwt.sign(
            {
                _id: userWithoutPassword?._id
            },  
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '30d'
            }
         ); 


        const response = NextResponse.json(
            {
                success: true, 
                message: "User logged in successfully", 
                user: userWithoutPassword
            },
            {
                status: 200
            }
        ); 

        response.cookies.set("accessToken", generatedAccessToken, {
            httpOnly: true,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
        }); 
        
        return response;
    } catch (error) {
        return NextResponse.json({success: false, error: error.message}, {status: 500})
    }
};