import mongoose, { Schema } from "mongoose";

const userModel = new Schema(
    {
        email: {
            type: String,
            required: true
        }, 
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
); 

const users = mongoose.models.users || mongoose.model("users", userModel); 
export default users; 