import mongoose, { Schema, model, Document } from "mongoose";

interface AboutData extends Document {
  designation: string;
  content: string | string[] | number;
}

const AboutSchema = new Schema<AboutData>(
  {
    designation: { type: String, required: true },
    content: {
      type: Schema.Types.Mixed,
      validate: {
        validator: function (value: any) {
          return (
            typeof value === "string" ||
            (Array.isArray(value) &&
              value.every((item) => typeof item === "string")) ||
            typeof value === "number"
          );
        },
        message: "Content must be a string, an array of strings, or a number.",
      },
      required: true,
    },
  },
  { versionKey: false }
);
delete mongoose.models.about;

const AboutModel = model<AboutData>("about", AboutSchema);

export default AboutModel;
