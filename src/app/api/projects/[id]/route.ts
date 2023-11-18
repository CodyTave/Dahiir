import ProjectModel from "@/app/models/project";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import { handleFormData } from "@/app/Utils/functions";
import { NextRequest } from "next/server";

///READ ONE
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const result = await ProjectModel.findOne({ _id: params.id });
    if (!result) {
      return Response.json({ error: "Item Not Found" }, { status: 404 });
    }
    return Response.json(result);
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json({ Status: "Something went Wrong" }, { status: 500 });
  }
}

///DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const uuid = params.id;
  try {
    await Auth(req);
    await dbConnect();
    const result = await ProjectModel.findOneAndDelete({ _id: uuid });
    if (!result) {
      return Response.json({ error: "Item Not Found" }, { status: 404 });
    }
    return Response.json(
      { status: "Data deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    if (error.name === "ValidationError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    if (error.status === 401) {
      return Response.json({ Status: "Access Unauthorized" }, { status: 401 });
    }
    return Response.json(
      { Status: "Something went wrong during deletion" },
      { status: 500 }
    );
  }
}

///UPDATE
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string }; project: any }
) {
  const uuid = params.id;
  const project = await req.formData();
  const Concat = req.nextUrl.searchParams.get("Concat");
  try {
    await Auth(req);
    await dbConnect();
    const prev =
      Concat?.toLowerCase() === "true"
        ? await ProjectModel.findOne({ _id: uuid }, { _id: 0 })
        : undefined;
    const updatedProject = await handleFormData(project, prev);
    const result = await ProjectModel.findOneAndUpdate(
      { _id: uuid },
      updatedProject,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!result) {
      return Response.json({ error: "Item Not Found" }, { status: 404 });
    }
    return Response.json(result, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    if (error.name === "ValidationError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    if (error.status === 401) {
      return Response.json({ Status: "Access Unauthorized" }, { status: 401 });
    }
    return Response.json(
      { Status: "Something went wrong during update" },
      { status: 500 }
    );
  }
}
