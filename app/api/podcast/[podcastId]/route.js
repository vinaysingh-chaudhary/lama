import { NextRequest, NextResponse } from "next/server";
import podcasts from "../../../../models/podcast.model";
import dbConnect from "../../../../database/dbConnect";
import mongoose from "mongoose";

dbConnect()
export const GET = async(_, context) => {
    try {
        const {podcastId} = context.params; 
        
        if (!mongoose.Types.ObjectId.isValid(podcastId)) {
            return NextResponse.json({ error: 'Invalid podcastId' }, {status: 400});
        }

        const podcast = await podcasts.findById(podcastId); 
        if(!podcast){
            return NextResponse.json({error: "No podcast found"}, {status: 404}); 
        }
        
        return NextResponse.json({message: "Podcast details", podcast}, {status: 200}); 
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}


export const PATCH =async (NextRequest, context) => {
    try {
        const {podcastId} = context.params; 
        const { description } = await NextRequest.json(); 

        console.log(description)

        if(!description){
            return NextResponse.json({ error: 'Provide the description' }, {status: 400});
        }
                
        if (!mongoose.Types.ObjectId.isValid(podcastId)) {
            return NextResponse.json({ error: 'Invalid podcastId' }, {status: 400});
        }

        const updatedPodcast = await podcasts.findByIdAndUpdate(podcastId, {description}, {new: true})
        if (!updatedPodcast) {
            return  NextResponse.json({ error: 'Failed to update the podcast' }, {status: 500});
        }

        return NextResponse.json({message: "Podcast updated successfully", updatedPodcast}, {status: 200}); 
        
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}


export const DELETE = async(_, context) => {
    try {
        const {podcastId} = context.params; 

        if(!podcastId){
          return NextResponse.json({error: "podcastId not found " }, {status: 400}); 
        }

        const deletePodcastRefrence = await podcasts.findByIdAndDelete(podcastId); 
        if(!deletePodcastRefrence){
            return NextResponse.json({error: "Failed to delete podcast"}, {status: 500});
        }


        return NextResponse.json(({success: true, deletePodcastRefrence}, {status: 200}))
    } catch (error) {
        return NextResponse.json(({error: error.message || "Something went wrong"}, {status: 500}))
    }
}