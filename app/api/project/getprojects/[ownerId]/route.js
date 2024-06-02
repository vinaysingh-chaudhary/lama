import { NextResponse } from "next/server"
import projects from "../../../../../models/project.model";
import dbConnect from "../../../../../database/dbConnect";

dbConnect();
export const GET = async(NextRequest, context) => {
   try { 
      const { ownerId } = context.params;

     const projectlist = await projects.find({owner: ownerId}); 
     
     return NextResponse.json({mesage: "Projects fetced successfully", length: projectlist?.length , projectlist}, {status: 200}); 
   } catch (error) {
    return NextResponse.json({error: error.message || "something went wrong"}, {status : 500}); 
   }
}