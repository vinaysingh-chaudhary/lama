import { NextRequest, NextResponse } from "next/server";
import projects from "../../../../models/project.model";
import dbConnect from "../../../../database/dbConnect";

dbConnect(); 
export const POST =async (NextRequest) => {
    try {
        const { projectName, owner }= await NextRequest.json(); 
       
        if(!projectName && !owner){
            return NextResponse.json({error: "Please provide Name and OwnerId"}, {status : 400})
        }

        const newProject = new projects({
            projectName,
            owner
        });

        await newProject.save();

        return NextResponse.json({ message: 'Project Created successfully', newProject }, { status: 200 });
    } catch (error) {
        return NextResponse.json({error: error.message || "something went wrong"}, {status : 500})
    }
}