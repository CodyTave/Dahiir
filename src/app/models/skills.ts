import mongoose, { Document, Schema, model } from "mongoose";

enum proficiency {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}
enum domain {
  DEV = "Dev",
  DESIGN = "Design",
  MUSIC = "Music",
}
enum category {
  PROGRAMMING_LANGUAGE = "ProgrammingLanguage",
  TECHNOLOGY = "Technology",
  SOFTWARE = "Software",
  OTHER = "Other",
}

export interface skill extends Document {
  name: string;
  domain: string;
  category: string;
  proficiency?: string;
}

const SkillSchema = new Schema<skill>(
  {
    name: { type: String, required: true },
    domain: { type: String, enum: domain, required: true },
    category: { type: String, enum: category, required: true },
    proficiency: { type: String, enum: proficiency, required: true },
  },
  { versionKey: false }
);
delete mongoose.models.skill;

const SkillModel = model<skill>("skill", SkillSchema);

export default SkillModel;
