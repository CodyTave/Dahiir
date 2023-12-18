import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import EducationModel from "@/app/models/education";
import { NextRequest } from "next/server";

///READ
// prettier-ignore

export async function GET(req: NextRequest) {
  const Level = req.nextUrl.searchParams.get("Level");
  const Certificates = req.nextUrl.searchParams.get("Certificates");
  const Latest = req.nextUrl.searchParams.get("Latest");
  const query = Level
    ? { level: Level }
    : Certificates
    ? { isCertificate: Certificates }
    : {};
  try {
    await dbConnect();
    if (Level && Certificates) {
      return Response.json({Status:"You can't Provide Level and Certificates Params at the same time, Read Documentation...",},
        { status: 400 }
      );
    }
    if (Latest) {
      const mostRecent = await EducationModel.findOne({}).sort({ graduationYear: -1 });
      return Response.json(mostRecent);
    }
    const education = await EducationModel.find(query, {
      level: 0,
      isCertificate: 0,
    }).sort({ graduationYear: 1 }); // Use 1 for ascending order or -1 for descending order
    return Response.json(education);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///CREATE
// prettier-ignore
export async function POST(req: Request) {
  const education = await req.json();
  try {
    await Auth(req);
    await dbConnect();
    const newEducationData = new EducationModel(education);
    const savedEducationData = await newEducationData.save();
    return Response.json(savedEducationData, {
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
