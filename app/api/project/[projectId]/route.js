import {NextResponse } from "next/server";
import projects from "../../../../models/project.model";
import podcasts from "../../../../models/podcast.model";
import dbConnect from "../../../../database/dbConnect";

dbConnect(); 
export const POST =async (NextRequest, context) => {
    try {
        const {projectId} = context.params; 
       
        const project = await projects.findById(projectId);
        if (!project) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        const podcast = await podcasts.find({projectId: project._id}); 

        return NextResponse.json({ message: 'Project and associated podcasts found', project, podcast }, { status: 200 });
    } catch (error) {
        return NextResponse.json({error: error.message || "something went wrong"}, {status : 500})
    }
}