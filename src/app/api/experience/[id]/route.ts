import ExperienceModel from "@/app/models/experience";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";
import { getDuration } from "@/app/Utils/apiFunctions";

///DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const uuid = params.id;
  try {
    await Auth(req);
    await dbConnect();
    const result = await ExperienceModel.findOneAndDelete({ _id: uuid });
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
  req: Request,
  { params }: { params: { id: string }; experience: any }
) {
  const uuid = params.id;
  const experience = await req.json();
  try {
    await Auth(req);
    await dbConnect();
    experience.duration = getDuration(experience.startDate, experience.endDate);
    const result = await ExperienceModel.findOneAndUpdate(
      { _id: uuid },
      experience,
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
