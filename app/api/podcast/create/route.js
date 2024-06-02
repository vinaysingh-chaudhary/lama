import podcasts from "../../../../models/podcast.model";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../database/dbConnect";
import mongoose from "mongoose";

dbConnect()
export const POST = async (NextRequest) => {
    try {
        const { title, description, projectId } = await NextRequest.json();

        if (!mongoose.Types.ObjectId.isValid(projectId)) {
            return NextResponse.json({ error: 'Invalid projectId' }, {status: 400});
        }

        if (!title || !description) {
            return NextResponse.json({ error: "Title, Description, and ProjectId are required" }, { status: 400 });
        }
        const newPodcast = new podcasts({
            title,
            description,
            projectId,
            createdAt: new Date()
        });

        await newPodcast.save();

        return NextResponse.json({ message: 'Podcast added successfully', newPodcast }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
};