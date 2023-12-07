import React from "react";

export default function DetailsComponent({
  title,
  elements,
  color,
}: {
  title: string;
  elements: string[];
  color?: string;
}) {
  return (
    <div>
      <h1 style={{ color: color || "#1E1E1E" }} className="font-bold text-lg">
        {title}
      </h1>
      <div className="flex flex-col gap-3 mt-3">
        {elements.map((el) => (
          <div
            style={{ backgroundColor: color || "#1E1E1E" }}
            key={el}
            className="text-sm font-medium  w-fit rounded-full p-1 px-3 text-light-0"
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
