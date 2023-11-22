import { padding } from "../constants/styles";
import Bio from "./Bio";
import CodeSnippet from "./CodeSnippet";
import MethodDoc from "./MethodDoc";
import Painting from "./Painting";
async function getAbout() {
  const res = await fetch(process.env.API_BASE_URL + "/api/about");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function About() {
  const about = await getAbout();
  return (
    <div className={padding + " grid gap-10"}>
      <h1 className="flex justify-center text-3xl font-bold ">About Me</h1>
      <div className="grid lg:grid-cols-2 mt-16 gap-14  ">
        <Painting />
        <Bio />
      </div>
      <MethodDoc
        method="GET"
        title="About"
        endpoint="/about"
        note="this data is updated in real time"
      />
      <CodeSnippet language="json" code={JSON.stringify(about, null, 8)} />
    </div>
  );
}
