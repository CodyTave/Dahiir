import { aboutObject } from "@/app/Utils/apiFunctions";
import { dbConnect } from "@/app/lib/mongoose";
import AboutModel from "@/app/models/about";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const aboutItems = await AboutModel.find(
      { designation: "Bio" },
      { _id: 0 }
    );
    const about = aboutObject(
      aboutItems as { designation: string; content: string | string[] }[]
    );
    return Response.json(about);
  } catch (error: any) {
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}
