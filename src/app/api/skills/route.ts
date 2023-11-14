import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import SkillModel from "@/app/models/skills";
import { NextRequest } from "next/server";

///READ
// prettier-ignore
export async function GET(req: NextRequest) {
  const Category = req.nextUrl.searchParams.get("Category");
  const Proficiency = req.nextUrl.searchParams.get("Proficiency");
  const Domain = req.nextUrl.searchParams.get("Domain");
  const query =  {...(Category && { category: Category }),...(Proficiency && { proficiency: Proficiency }),...(Domain && { domain: Domain }),
  };
  try {
    await dbConnect();
    const skills = await SkillModel.find(query);
    return Response.json(skills);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///CREATE
// prettier-ignore
export async function POST(req: Request) {
  const skill = await req.json();
  try {
    await Auth(req);
    await dbConnect();
    const newSkillData = new SkillModel(skill);
    const savedSkillData = await newSkillData.save();
    return Response.json(savedSkillData, {
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
