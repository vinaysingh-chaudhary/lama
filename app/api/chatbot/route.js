import dbConnect from '../../../database/dbConnect'
import { NextResponse } from 'next/server';
import chatbot from '../../../models/chatbox.model'


dbConnect(); 
export const POST =  async(NextRequest) => {
      try {
        const data  = await NextRequest.json(); 
        
        if(!data){
            return NextResponse.json({error: "No chatbox data recieved"}, {status: 400}); 
        } 
       
        const createdChatbot = await chatbot.create(data); 
        if(!createdChatbot){
            return NextResponse.json({error: "Failed to create chatbot"}, {status: 500});
        }; 

        return NextResponse.json({message: "Chatbot created successfully", createdChatbot}, {status: 200});
      } catch (error) {
        return NextResponse.json({error: error.message || "Something went wrong"}, {status: 500}); 
      }
}



