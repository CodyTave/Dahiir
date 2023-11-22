import { getDuration } from "@/app/Utils/apiFunctions";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import ExperienceModel, { experience } from "@/app/models/experience";
import { NextRequest } from "next/server";

///READ
// prettier-ignore
export async function GET(req: NextRequest) {
  const Year = req.nextUrl.searchParams.get("Year");
  const Current = req.nextUrl.searchParams.get("Current");
  const YearStart = new Date(`${Year}-01-01`);
  const YearEnd = new Date(`${Year}-12-31`);
  const query = Current
    ? { endDate: null }
    : Year
    ? { startDate: { $lte: YearEnd }, $or: [{ endDate: { $gte: YearStart } }, { endDate: null }]}
    : {};
  try {
    await dbConnect();
    if (Year && Current) {
      return Response.json({ Status:"You can't Provide Current and Year Params at the same time, Read Documentation..." },{ status: 400 });
    }
    const education = await ExperienceModel.find(query);
    return Response.json(education);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///CREATE
// prettier-ignore
export async function POST(req: Request) {
  const experience :experience = await req.json();
  try {
    await Auth(req);
    await dbConnect();
    if(!experience.endDate){
      experience.endDate=null
    }    
    experience.duration = getDuration(experience.startDate,experience.endDate)
    const newEducationData = new ExperienceModel(experience);
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
      console.log(error);
      return Response.json({ Status: "Something went Wrong" }, { status: 500 });
    }
  }
}
