import { dbConnect } from "@/app/lib/mongoose";
import ProjectModel from "@/app/models/project";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const totalCount = await ProjectModel.countDocuments();
    const random = Math.floor(Math.random() * totalCount);
    const result = await ProjectModel.findOne().skip(random);
    return Response.json(result);
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}
