import mongoose, { Schema } from "mongoose";

const podcastSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        projectId: {
            type: mongoose.Types.ObjectId,
            ref: "projects",
            required: true
        },
        status: {
            type: Boolean, 
            default : true
        }
    },{
        timestamps: true
    }
);

const podcasts = mongoose.models.podcasts || mongoose.model("podcasts", podcastSchema);
export default podcasts;
