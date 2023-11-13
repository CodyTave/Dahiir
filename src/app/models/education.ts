import mongoose, { Document, Schema, model } from "mongoose";

enum level {
  HIGHSCHOOL = "HighSchool",
  COLLEGE = "College",
  UNIVERSITY = "University",
}

interface education extends Document {
  institution: string;
  degree: string;
  graduationYear: string;
  level: level;
  isCerificate: boolean;
}

const EducationSchema = new Schema<education>(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    graduationYear: { type: String, required: true },
    level: { type: String, enum: level, required: true },
    isCerificate: { type: Boolean, required: true },
  },
  { versionKey: false }
);
delete mongoose.models.education;

const EducationModel = model<education>("education", EducationSchema);

export default EducationModel;
