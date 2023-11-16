import mongoose, { Document, Schema, model } from "mongoose";

export interface project extends Document {
  title: string;
  description: string;
  categories: string[];
  role?: string;
  technologiesUsed?: string[];
  clientOrCompany?: string;
  year?: Date;
  url?: string;
  images?: string[];
  challenges?: string;
  projectStatus?: string;
  collaboration?: string;
}

const ProjectSchema = new Schema<project>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [String], required: true },
    role: String,
    technologiesUsed: [String],
    clientOrCompany: String,
    year: Date,
    url: String,
    images: [String],
    challenges: String,
    projectStatus: String,
    collaboration: String,
  },
  { versionKey: false }
);
delete mongoose.models.project;

const ProjectModel = model<project>("project", ProjectSchema);

export default ProjectModel;
