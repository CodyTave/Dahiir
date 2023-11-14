import { aboutObject } from "@/app/Utils/functions";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import AboutModel from "@/app/models/about";
import { NextRequest } from "next/server";

///READ
// prettier-ignore
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const aboutItems = await AboutModel.find({designation: { $ne: 'Bio' } },{_id:0});
    const about = aboutObject(aboutItems)
    return Response.json(about);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///CREATE
// prettier-ignore
export async function POST(req: Request) {
  const aboutData = await req.json();
  try {
    await Auth(req);
    await dbConnect();
    const newData = new AboutModel(aboutData);
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
       return Response.json({ Status: "Access Unauthorized" }, { status: 401 });
      }
      return Response.json({ Status: "Something went Wrong" }, { status: 500 });
    }
  }
}
