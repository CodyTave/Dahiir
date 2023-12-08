import React from "react";
import EndpointDoc from "../components/EndpointDoc";
import { Docs } from "../constants/documentation";

export default function page() {
  return (
    <div className="grid gap-10">
      {Docs.map((doc) => (
        <EndpointDoc key={doc.endpoint} Doc={doc} />
      ))}
    </div>
  );
}
