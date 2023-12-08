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
      <h1 className="font-bold text-lg text-dark-3">{title}</h1>
      <div className="flex flex-col gap-3 mt-3">
        {elements.map((el) => (
          <div
            key={el}
            className="text-sm font-medium bg-dark-3 w-fit rounded-full p-1 px-3 text-light-0"
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
