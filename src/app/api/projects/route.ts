import { handleFormData } from "@/app/Utils/functions";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import ProjectModel from "@/app/models/project";
import { NextRequest } from "next/server";

///READ
// prettier-ignore
export async function GET(req: NextRequest) {
  const Category = req.nextUrl.searchParams.get("Category");
  const Year = req.nextUrl.searchParams.get("Year");
  const Technology = req.nextUrl.searchParams.get("Technology");
  const query = {
    ...(Technology && { technologiesUsed: { $regex: new RegExp(Technology, 'i') } }),
    ...(Year && { year: Year }),
    ...(Category && { categories: { $regex: new RegExp(Category, 'i') } }),
  };
  try {
    await dbConnect();
    const education = await ProjectModel.find(query);
    return Response.json(education);
  } catch (error: any) {
    console.log(error)
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///CREATE
// prettier-ignore
export async function POST(req: Request) {
  const FormDataproject = await req.formData();
  try {
    await Auth(req);
    await dbConnect();
    const project = await handleFormData(FormDataproject)
    const newEducationData = new ProjectModel(project);
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
      console.log(error)
      return Response.json({ Status: "Something went Wrong" }, { status: 500 });
    }
  }
}
