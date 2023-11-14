import { dbConnect } from "@/app/lib/mongoose";
import SkillModel from "@/app/models/skills";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { kw: string } }
) {
  try {
    await dbConnect();
    const skill = await SkillModel.find({
      name: { $regex: new RegExp(params.kw, "i") },
    });
    if (skill.length === 0) {
      return Response.json(
        {
          error:
            "Unfortunatly this one i gotta learn..Or maybe you just typed it wrong (most likely (;)",
        },
        { status: 404 }
      );
    }
    return Response.json(skill);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}
