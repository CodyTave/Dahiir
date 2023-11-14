import { NextApiRequest } from "next";

export function Auth(req: Request): Promise<void> {
  return new Promise((resolve, reject) => {
    const bearerToken = req.headers.get("authorization")?.split(" ")[1];
    const apiKey = process.env.API_KEY;
    if (!bearerToken || !apiKey) {
      return reject(Response.json({}, { status: 401 }));
    }
    try {
      if (bearerToken !== apiKey) {
        throw new Error("Api Key is not Valid");
      }
      resolve();
    } catch (error) {
      reject(Response.json({ error: error }, { status: 401 }));
    }
  });
}
