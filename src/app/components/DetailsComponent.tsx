import React from "react";

export default function DetailsComponent({
  title,
  elements,
}: {
  title: string;
  elements: string[];
}) {
  return (
    <div>
      <h1 className="font-bold">{title} :</h1>
      <div className="flex flex-col gap-1 mt-3">
        {elements.map((el) => (
          <div key={el} className="text-sm font-medium">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
