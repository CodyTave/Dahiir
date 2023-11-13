import { dbConnect } from "@/app/lib/mongoose";
import EducationModel from "@/app/models/education";

///DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const uuid = params.id;
  try {
    await dbConnect();
    const result = await EducationModel.findOneAndDelete({ _id: uuid });
    if (!result) {
      return Response.json({ error: "Item Not Found" }, { status: 404 });
    }
    return Response.json(
      { status: "Education data deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
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
  { params }: { params: { id: string }; body: any }
) {
  const uuid = params.id;
  const body = await req.json();
  try {
    await dbConnect();
    const result = await EducationModel.findOneAndUpdate({ _id: uuid }, body);
    if (!result) {
      return Response.json({ error: "Item Not Found" }, { status: 404 });
    }
    const updated = await EducationModel.findOne({ _id: uuid });
    return Response.json(updated, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json(
      { Status: "Something went wrong during update" },
      { status: 500 }
    );
  }
}
