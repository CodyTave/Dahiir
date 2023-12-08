import React from "react";
import { Documentation } from "../constants/types";
import MethodDoc from "./MethodDoc";
import ParamDetail from "./ParamDetail";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import EndpointTesting from "./EndpointTesting";

export default function EndpointDoc({ Doc }: { Doc: Documentation }) {
  const { title, endpoint, description, Params, Note, method } = Doc;

  return (
    <div className="grid sm:grid-cols-2 gap-48">
      <div className="grid gap-10 h-fit">
        <MethodDoc title={title} method={method} endpoint={`/${endpoint}`} />
        <div className="grid gap-3">
          <h2 className="text-2xl font-bold">Description :</h2>
          <p>{description}</p>
        </div>
        <div className="grid gap-5">
          <h2 className="text-2xl font-bold">Params :</h2>
          <div className="grid gap-8">
            {Params.map((param) => (
              <ParamDetail key={param.id} param={param} />
            ))}
          </div>
        </div>
        <div className="bg-dark-0 flex items-center p-3 rounded-md gap-5 text-light-0 font-light">
          <ExclamationTriangleIcon className=" w-7 h-7" />
          <span>{Note}</span>
        </div>
      </div>
      <EndpointTesting endpoint={endpoint} method="get" />
    </div>
  );
}
