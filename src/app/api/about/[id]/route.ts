import AboutModel from "@/app/models/about";
import { dbConnect } from "@/app/lib/mongoose";
import { Auth } from "@/app/lib/token";

///DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const uuid = params.id;
  try {
    await Auth(req);
    await dbConnect();
    const result = await AboutModel.findOneAndDelete({ designation: uuid });
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
  { params }: { params: { id: string }; aboutData: any }
) {
  const uuid = params.id;
  const aboutData = await req.json();
  try {
    await Auth(req);
    await dbConnect();
    const result = await AboutModel.findOneAndUpdate(
      { designation: uuid },
      aboutData,
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
    if (error.status === 401) {
      return Response.json({ Status: "Access Unauthorized" }, { status: 401 });
    }
    if (error.name === "ValidationError") {
      return Response.json({ error: error.message }, { status: 400 });
    }
    return Response.json(
      { Status: "Something went wrong during update" },
      { status: 500 }
    );
  }
}
