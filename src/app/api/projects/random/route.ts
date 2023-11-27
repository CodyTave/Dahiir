import { getRandomIndices } from "@/app/Utils/apiFunctions";
import { dbConnect } from "@/app/lib/mongoose";
import ProjectModel from "@/app/models/project";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const countParam = req.nextUrl.searchParams.get("count");
    const count = countParam ? parseInt(countParam) : 5;
    const totalCount = await ProjectModel.countDocuments();
    if (totalCount < count) {
      const result = await ProjectModel.find({});
      return Response.json(result);
    }
    const randomIndices = getRandomIndices(count, totalCount);
    const result = await ProjectModel.aggregate([
      { $match: {} },
      { $skip: randomIndices[0] },
      { $sample: { size: count } },
    ]);

    return Response.json(result);
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}
