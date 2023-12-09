import { padding } from "../constants/styles";
import { getAbout } from "../services/api";
import Bio from "./Bio";
import JsonBlock from "./JsonBlock";
import MethodDoc from "./MethodDoc";
import Painting from "./Painting";

export default async function About({ noPadding }: { noPadding?: boolean }) {
  const about = await getAbout();
  return (
    <div className={(noPadding || padding) + " grid gap-10"}>
      <div>
        {noPadding || (
          <h1 className="flex justify-center text-3xl font-bold ">About Me</h1>
        )}
        <div className="grid lg:grid-cols-2 mt-16 gap-14  ">
          <Painting />
          <Bio />
        </div>
      </div>
      <div className="grid gap-10">
        <MethodDoc
          method="GET"
          title="About"
          endpoint="/about"
          note="this data is updated in real time"
        />
        <JsonBlock expandable code={JSON.stringify(about, null, 5)} />
      </div>
    </div>
  );
}
