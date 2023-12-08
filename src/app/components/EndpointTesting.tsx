"use client";
import React, { useEffect, useState } from "react";
import EndpointConsole from "./EndpointConsole";
import CodeBlock from "./CodeBlock";
import { NodeJs_axios } from "../constants/codeLanguages";
import ResponseJson from "@/app/components/ResponseJson";
import { getAnything, getBaseUrl } from "../services/api";
export default function EndpointTesting({
  method,
  endpoint,
}: {
  method: string;
  endpoint: string;
}) {
  const [response, setResponse] = useState("");
  const [url, setUrl] = useState(`/${endpoint}`);
  const [paramQuery, setParams] = useState("?");
  const [Loaded, setLaoded] = useState(false);
  async function getUrl() {
    await getBaseUrl().then((url) => {
      setUrl(`${url}/api/${endpoint}` || "");
    });
  }
  useEffect(() => {
    getUrl();
    handleSubmit();
  }, []);

  async function handleSubmit() {
    getAnything(`/${endpoint}` + paramQuery).then((resp) => {
      setResponse(JSON.stringify(resp, null, 6));
      setLaoded(true);
    });
  }
  return (
    <>
      {Loaded && (
        <div className="grid gap-10">
          <EndpointConsole
            send={handleSubmit}
            setParams={(e) => setParams(e)}
            paramQuery={paramQuery}
            methodAvailable={method.toUpperCase()}
            endpoint={url}
          />
          <CodeBlock method="get" url={url + paramQuery} />
          <ResponseJson code={response} />
        </div>
      )}
    </>
  );
}
