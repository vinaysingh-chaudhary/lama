import dbConnect from "../../../../database/dbConnect";
import chatbot from '../../../../models/chatbox.model'
import { NextResponse } from "next/server";

dbConnect
export const GET =  async(NextRequest, context) => {
    try {
      const { owner } = context.params
      console.log(owner)

      
      if(!owner){
          return NextResponse.json({error: "Owner id not recieved"}, {status: 400}); 
      } 
     
      const createdChatbot = await chatbot.findOne({owner: owner}); 
   
      return NextResponse.json({message: "Chatbot created successfully", createdChatbot}, {status: 200});
    } catch (error) {
      return NextResponse.json({error: error.message || "Something went wrong"}, {status: 500}); 
    }
}
