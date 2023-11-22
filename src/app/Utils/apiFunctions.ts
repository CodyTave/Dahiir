import { writeFile } from "fs/promises";

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

export function aboutObject(arr: { designation: string; content: string }[]) {
  const result: { [key: string]: string } = {};
  arr.forEach((item) => {
    if (item.designation === "Age") {
      const [day, month, year] = item.content.split("-");
      const birthDate = new Date(
        parseInt(year),
        parseInt(month),
        parseInt(day)
      );
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      result["Age"] = `${age} Years`;
    } else {
      result[item.designation] = item.content;
    }
  });

  return result;
}

export function formDataObject(
  formData: FormData,
  prevObj?: any
): Record<string, string | string[]> {
  const formDataObject: Record<string, string | string[]> = prevObj || {};
  formData.forEach((value, key) => {
    if (!formDataObject[key]) {
      if (!(value instanceof File)) {
        formDataObject[key] = value.toString();
      }
    } else {
      if (!Array.isArray(formDataObject[key])) {
        formDataObject[key] = [
          formDataObject[key].toString(),
          value.toString(),
        ];
      } else {
        if (!(prevObj[key] as string[]).includes(value.toString()))
          if (!(value instanceof File)) {
            (formDataObject[key] as string[]).push(value.toString());
          }
      }
    }
  });

  return formDataObject;
}

export async function handleFormData(formData: FormData, prevObj?: any) {
  const returnObject = formDataObject(formData, prevObj);
  const images = formData.getAll("images");
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
  return returnObject;
}

export async function handleFile(file: File) {
  try {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const path = `./Photos/${file.name}`;
    await writeFile(path, fileBuffer);
    return path;
  } catch (error: any) {
    throw error;
  }
}
