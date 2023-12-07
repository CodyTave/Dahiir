import React from "react";
import EndpointDoc from "../components/EndpointDoc";
import { EducationDocs } from "../constants/documentation";

export default function page() {
  return (
    <div>
      <EndpointDoc Doc={EducationDocs} />
    </div>
  );
}
