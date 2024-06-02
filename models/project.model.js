import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        projectName: {
            type: String,
            required: true
        }, 
        owner: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true
        }, 

    },
    {
        timestamps: true
    }
); 

const projects = mongoose.models.projects || mongoose.model("projects", projectSchema); 
export default projects;
