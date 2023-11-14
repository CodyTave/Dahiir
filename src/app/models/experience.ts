import mongoose, { Document, Schema, model } from "mongoose";

export interface experience extends Document {
  institution: string;
  post: string;
  startDate: Date;
  endDate: Date | null;
  duration: string;
}

const ExperienceSchema = new Schema<experience>(
  {
    institution: { type: String, required: true },
    post: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date || null, required: false },
    duration: { type: String, required: false },
  },
  { versionKey: false }
);
delete mongoose.models.experience;

const ExperienceModel = model<experience>("experience", ExperienceSchema);

export default ExperienceModel;
