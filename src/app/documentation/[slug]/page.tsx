import React from "react";
import EndpointDoc from "../../components/EndpointDoc";
import { Docs } from "../../constants/documentation";
import { notFound } from "next/navigation";
import { docsNav } from "@/app/constants/constants";

export default function page({ params }: { params: { slug: string } }) {
  const nav = docsNav.find((doc) => doc.id === params.slug) || notFound();
  const doc = Docs.find((doc) => doc.endpoint === nav.endpoint) || notFound();
  return (
    <div className="grid">
      <EndpointDoc key={doc.endpoint} Doc={doc} />
    </div>
  );
}
