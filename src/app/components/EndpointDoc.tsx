import React from "react";
import { Documentation } from "../constants/types";
import MethodDoc from "./MethodDoc";
import ParamDetail from "./ParamDetail";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import EndpointTesting from "./EndpointTesting";

export default function EndpointDoc({ Doc }: { Doc: Documentation }) {
  const { title, endpoint, description, Params, Note, method } = Doc;
  const noParams = Params.length === 0;
  return (
    <div className="grid  gap-20">
      <div className="grid gap-10 h-fit">
        <MethodDoc title={title} method={method} endpoint={`/${endpoint}`} />
        <div className="grid gap-3">
          <h2 className="text-2xl font-bold">Description :</h2>
          <p>{description}</p>
        </div>
        {noParams || (
          <div className="grid gap-5">
            <h2 className="text-2xl font-bold">Params :</h2>
            <div className="grid gap-8">
              {Params.map((param) => (
                <ParamDetail key={param.id} param={param} />
              ))}
            </div>
          </div>
        )}
        <div className="bg-dark-0 flex items-center p-3 rounded-md gap-5 text-light-0 font-light sm:text-base text-xs">
          <ExclamationTriangleIcon className=" w-7 h-7" />
          <span>{Note}</span>
        </div>
      </div>
      <EndpointTesting noParams={noParams} endpoint={endpoint} method="get" />
    </div>
  );
}
