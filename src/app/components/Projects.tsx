import Image from "next/image";
import { getProjects } from "../services/api";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div>
      <Image width={200} height={150} alt="" src="/Photos/DPlayer.png" />
    </div>
  );
}
