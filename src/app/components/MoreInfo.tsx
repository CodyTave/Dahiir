"use client";
import { useGlobalContext } from "../context/store";
import Button from "./Button";

export default function MoreInfo() {
  const { setVariant } = useGlobalContext();

  return (
    <div className="flex mx-auto flex-col justify-center gap-10 mt-5">
      <h4 className="leading-normal sm:text-5xl text-3xl font-bold max-w-2xl text-center">
        For More Details About{" "}
        <span
          onMouseEnter={() => setVariant("bigSquare")}
          onMouseLeave={() => setVariant("default")}
          className="text-grbl"
        >
          Me
        </span>{" "}
        , My{" "}
        <span
          onMouseEnter={() => setVariant("bigSquare")}
          onMouseLeave={() => setVariant("default")}
          className="text-pkbl"
        >
          {" "}
          Work{" "}
        </span>
        and{" "}
        <span
          onMouseEnter={() => setVariant("bigSquare")}
          onMouseLeave={() => setVariant("default")}
          className="text-grgr"
        >
          Skills
        </span>
      </h4>
      <div className="flex flex-wrap justify-center mx-auto gap-5">
        <Button>See Documentation</Button>
        <Button light>Or Contact me</Button>
      </div>
    </div>
  );
}
