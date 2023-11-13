import { dbConnect } from "@/app/lib/mongoose";
import EducationModel from "@/app/models/education";
import { NextRequest } from "next/server";

///READ
export async function GET(req: NextRequest) {
  const Level = req.nextUrl.searchParams.get("Level");
  const Certificates = req.nextUrl.searchParams.get("Certificates");
  const Latest = req.nextUrl.searchParams.get("Latest");
  const query = Level
    ? { level: Level }
    : Certificates
    ? { isCerificate: Certificates }
    : {};
  try {
    await dbConnect();
    if (Level && Certificates) {
      return Response.json(
        {
          Status:
            "You can't Provide Level and Certificates Params at the same time, Read Documentation...",
        },
        { status: 400 }
      );
    }
    const education = await EducationModel.find(query, { level: 0 });
    return Response.json(education);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///CREATE
export async function POST(req: Request) {
  const body = await req.json();
  try {
    await dbConnect();
    const newEducationData = new EducationModel(body);
    const savedEducationData = await newEducationData.save();
    return Response.json(savedEducationData, {
      status: 201,
      statusText: "Data Added Successfully",
    });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ error: error.message }, { status: 400 });
    } else {
      return Response.json({ Status: "Something went Wrong" }, { status: 500 });
    }
  }
}
