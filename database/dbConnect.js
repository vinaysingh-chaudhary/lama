import mongoose from "mongoose"
import { NextResponse } from "next/server"

const dbConnect = async() => {
    try {
       await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        return NextResponse.json({error: error.message || "Database connection failed"}, {status: 500}); 
    }
}

export default dbConnect