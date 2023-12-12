import { getRandomProject } from "@/app/services/api";
import { redirect } from "next/navigation";

export default async function Random({
  searchParams,
}: {
  searchParams?: { except: string | undefined };
}) {
  await getRandomProject(searchParams?.except || "").then((res) => {
    redirect(`/work/${res.slug}`);
  });
  return (
    <div className="text-center text-5xl mt-10 font-semibold">
      Wait a Sec...
    </div>
  );
}
