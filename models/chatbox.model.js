import mongoose, { Schema } from "mongoose";

const chatbotSchema = new Schema(
    {
        chatbotName: {
            type: String,
            required: true
        },
        welcomeMessage: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        primaryColor: {
            type: String,
            required: true,
            default: "#000000"
        },
        fontColor: {
            type: String,
            required: true,
            default: "#00FF00"
        },
        fontSize: {
            type: String,
            required: true,
            enum: ["small", "medium", "large"]
        },
        chatHeight: {
            type: Number,
            required: true
        },
        chatIconSize: {
            type: Number,
            required: true
        },
        positionOnScreen: {
            type: String,
            required: true,
            enum: ["right"]
        },
        distanceFromBottom: {
            type: Number,
            required: true
        },
        horizontalDistance: {
            type: Number,
            required: true
        },
        chatbotImage: {
            type: String,
        },
        owner:{
            type: mongoose.Types.ObjectId,
            ref: "users"
        }
    },
    {
        timestamps: true
    }
);

const chatbot = mongoose.models.chatbot || mongoose.model("chatbot", chatbotSchema);
export default chatbot;
