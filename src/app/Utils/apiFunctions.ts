import { writeFile } from "fs/promises";
import { calculateAge } from "./functions";
import { S3 } from "aws-sdk";
const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
};
const Bucket_name = process.env.AWS_BUCKET_NAME || "";

const s3 = new S3(awsConfig);

type Duration = {
  years: number;
  months: number;
  days: number;
};

export function getDuration(startDate: Date, endDate: Date | null): string {
  const currentDate = new Date();
  const endDateToUse = endDate || currentDate;
  // Ensure is a Date object
  const endDateObject =
    endDateToUse instanceof Date ? endDateToUse : new Date(endDateToUse);
  const startDateObject =
    startDate instanceof Date ? startDate : new Date(startDate);

  const diffInMilliseconds = Math.abs(
    endDateObject.getTime() - startDateObject.getTime()
  );
  const duration: Duration = {
    years: endDateObject.getUTCFullYear() - startDateObject.getUTCFullYear(),
    months: endDateObject.getUTCMonth() - startDateObject.getUTCMonth(),
    days: Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)),
  };

  if (duration.years > 0) {
    return `${duration.years} ${duration.years === 1 ? "year" : "years"}`;
  }

  if (duration.months > 0) {
    return `${duration.months} ${duration.months === 1 ? "month" : "months"}`;
  }

  if (duration.days > 0) {
    return `${duration.days} ${duration.days === 1 ? "day" : "days"}`;
  }

  return "0 days"; // default if no duration
}

export function aboutObject(
  arr: { designation: string; content: string | string[] }[]
) {
  const result: { [key: string]: string | string[] } = {};

  arr.forEach((item) => {
    if (item.designation === "Age") {
      const contentArray = Array.isArray(item.content)
        ? item.content
        : [item.content];
      result["Age"] = calculateAge(contentArray[0]);
    } else {
      result[item.designation] = item.content;
    }
  });

  return result;
}

export function formDataObject(
  formData: FormData,
  prevObj: Record<string, string | string[]> = {}
): Record<string, string | string[]> {
  const newObject: Record<string, string | string[]> = prevObj || {};

  formData.forEach((value, key) => {
    const isntFile = !(value instanceof File);
    if (isntFile) {
      if (newObject[key]) {
        newObject[key] = Array.isArray(newObject[key])
          ? [...(newObject[key] as string[]), value.toString()]
          : [newObject[key].toString(), value.toString()];
      } else {
        newObject[key] = value.toString();
      }
    }
  });

  return newObject;
}

export async function handleFormData(formData: FormData, prevObj?: any) {
  const returnObject = formDataObject(formData, prevObj);
  const images = formData.getAll("images");
  const frame = formData.get("frame");
  if (images.length !== 0) {
    const links: string[] = (prevObj?.images as string[]) || [];
    await Promise.all(
      images.map(async (img) => {
        const filePath = await handleFile(img as File);
        links.push(filePath);
      })
    );
    returnObject.images = links;
  }
  if (frame) {
    const path = await handleFile(frame as File);
    returnObject.frame = path;
  }

  return returnObject;
}

export async function handleFile(file: File) {
  try {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const key = `Photos/${file.name}`;
    const params = {
      Bucket: Bucket_name,
      Key: key,
      Body: fileBuffer,
      ContentType: file.type,
    };

    await s3.upload(params).promise();

    const publicUrl = `https://${Bucket_name}.s3.amazonaws.com/${key}`;
    return publicUrl;
  } catch (error: any) {
    throw error;
  }
}

export function slugHandler(str: string) {
  return str.replace(/ /g, "-").toLowerCase();
}
