import mongoose, { Schema, model, Document } from "mongoose";

interface AboutData extends Document {
  designation: string;
  content: string;
}

const AboutSchema = new Schema<AboutData>(
  {
    designation: { type: String, required: true },
    content: { type: String, required: true },
  },
  { versionKey: false }
);
delete mongoose.models.about;

const AboutModel = model<AboutData>("about", AboutSchema);

export default AboutModel;
