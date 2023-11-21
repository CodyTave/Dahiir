import Bio from "./Bio";
import Painting from "./Painting";

export default async function About() {
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold">About Me</h1>
      <div className="grid sm:grid-cols-2 mt-16 gap-14 ">
        <Painting />
        <Bio />
      </div>
    </div>
  );
}
