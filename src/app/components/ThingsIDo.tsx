import Zelij from "@/assets/extra/Zelij";
import React from "react";

export default function ThingsIDo() {
  const Cards: { id: string; title: string; desc: string; zelij: 1 | 2 | 3 }[] =
    [
      {
        id: "design",
        title: "I Design",
        desc: "Pretty things and Unique enjoyable experiences",
        zelij: 1,
      },
      {
        id: "code",
        title: "I Code",
        desc: "Giving life to abstract and on paper ideas ",
        zelij: 2,
      },
      {
        id: "build",
        title: "I Build",
        desc: "Projects applying my creative perspectives on clients specific needs",
        zelij: 3,
      },
    ];
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold">Things I Do ?</h1>
      <div className="flex flex-wrap justify-center gap-20 mt-16 ">
        {Cards.map(({ id, title, desc, zelij }, index) => (
          <div
            key={id}
            className="flex flex-col gap-5 h-64 bg-dark-3 text-light-0/95 relative w-72 px-6 py-8 rounded-md overflow-hidden"
          >
            <span className="text-3xl font-bold">{title}</span>
            <span className="text-light-1">{desc}</span>
            <Zelij
              className={`absolute w-40 opacity-30 -right-10 -bottom-20 patt${
                (index + 1) % 2
              }`}
              nb={zelij}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
