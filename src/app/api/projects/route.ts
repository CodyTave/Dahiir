import { handleFormData, slugHandler } from "@/app/Utils/apiFunctions";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import ProjectModel from "@/app/models/project";
import { NextRequest } from "next/server";

///READ
// prettier-ignore
export async function GET(req: NextRequest) {
  const Category = req.nextUrl.searchParams.get("category");
  const Year = req.nextUrl.searchParams.get("year");
  const Technology = req.nextUrl.searchParams.get("technology");
  const pageSize = parseInt(req.nextUrl.searchParams.get("pageSize") || '0', 10);
  const query = {
    ...(Technology && { technologiesUsed: { $regex: new RegExp(Technology, 'i') } }),
    ...(Year && { year: Year }),
    ...(Category && { categories: { $regex: new RegExp(Category, 'i') } }),
  };
  try {
    await dbConnect();
    const project = pageSize === 0 ? await ProjectModel.find(query) : await ProjectModel.find(query).limit(pageSize)
    return Response.json(project);
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
    project.slug=slugHandler(project.name as string)
    const newProject = new ProjectModel(project);
    const savedProject = await newProject.save();
    return Response.json(savedProject, {
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
