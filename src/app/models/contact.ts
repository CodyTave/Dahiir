import mongoose, { Schema, model, Document } from "mongoose";

interface ContactFormData extends Document {
  Name: string;
  PhoneNumber: string;
  Email: string;
  Message: string;
}

const ContactFormSchema = new Schema<ContactFormData>(
  {
    Name: { type: String, required: true },
    PhoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return /^\d+([- ]?\d+)*$/.test(value);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    Email: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    Message: { type: String, required: true },
  },
  { versionKey: false }
);
delete mongoose.models.ContactForm;

const ContactFormModel = model<ContactFormData>(
  "ContactForm",
  ContactFormSchema
);

export default ContactFormModel;
