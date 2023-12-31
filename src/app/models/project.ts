import mongoose, { Document, Schema, model } from "mongoose";

export interface project extends Document {
  title: string;
  slug: string;
  description: string;
  frame: string;
  categories: string[];
  role?: string;
  technologiesUsed?: string[];
  clientOrCompany?: string;
  year?: string;
  url?: string;
  images?: string[];
  challenges?: string;
  projectStatus?: string;
  collaboration?: string;
  figma?: string;
  primaryColor?: string;
}

const ProjectSchema = new Schema<project>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [String], required: true },
    frame: String,
    role: String,
    technologiesUsed: [String],
    clientOrCompany: String,
    year: String,
    url: String,
    images: [String],
    challenges: String,
    projectStatus: String,
    collaboration: String,
    figma: String,
    primaryColor: String,
  },
  { versionKey: false }
);
delete mongoose.models.project;

const ProjectModel = model<project>("project", ProjectSchema);

export default ProjectModel;
