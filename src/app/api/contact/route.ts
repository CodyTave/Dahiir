import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import ContactFormModel from "@/app/models/contact";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await Auth(req);
    await dbConnect();
    const contacts = await ContactFormModel.find({});
    return Response.json(contacts);
  } catch (error: any) {
    if (error.status === 401) {
      return Response.json({ Status: "Access Unauthorized" }, { status: 401 });
    }
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const aboutData = await req.json();
  try {
    await dbConnect();
    const newData = new ContactFormModel(aboutData);
    const savedData = await newData.save();
    return Response.json(savedData, {
      status: 201,
      statusText: "Data Added Successfully",
    });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ error: error.message }, { status: 400 });
    } else {
      if (error.status === 401) {
        return Response.json(
          { Status: "Access Unauthorized" },
          { status: 401 }
        );
      }
      return Response.json({ Status: "Something went Wrong" }, { status: 500 });
    }
  }
}
