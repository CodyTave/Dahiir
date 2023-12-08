import React from "react";
import { Param } from "../constants/types";
import { joinStrings } from "../Utils/functions";

export default function ParamDetail({ param }: { param: Param }) {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-5">
        <h3 className="text-lg font-semibold">{param.title}</h3>
        <span className="text-green-0">
          {param.enums && joinStrings(param.enums, 5)}
        </span>
      </div>
      <p>{param.description}</p>
    </div>
  );
}
