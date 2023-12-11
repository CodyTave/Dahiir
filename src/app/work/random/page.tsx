import useRandom from "@/app/hooks/useRandom";
import { redirect } from "next/navigation";

export default async function page() {
  const NextLink = await useRandom();
  redirect(NextLink);
  return (
    <div className="text-center text-5xl mt-10 font-semibold">
      Wait a Sec...
    </div>
  );
}
