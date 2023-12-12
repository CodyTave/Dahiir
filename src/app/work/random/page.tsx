import useRandom from "@/app/hooks/useRandom";
import { getRandomProject } from "@/app/services/api";
import { redirect } from "next/navigation";

export default async function Random() {
  const NextLink = await getRandomProject().then((res) => {
    redirect(`/work/${res.slug}`);
  });
  return (
    <div className="text-center text-5xl mt-10 font-semibold">
      Wait a Sec...
    </div>
  );
}
