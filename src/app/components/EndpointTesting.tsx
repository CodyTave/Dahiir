"use client";
import React, { useEffect, useState } from "react";
import EndpointConsole from "./EndpointConsole";
import CodeBlock from "./CodeBlock";
import ResponseJson from "@/app/components/ResponseJson";
import { getAnything, getBaseUrl } from "../services/api";
import LoadingCompo from "@/app/components/LoadingCompo";
export default function EndpointTesting({
  method,
  endpoint,
  noParams,
}: {
  method: string;
  endpoint: string;
  noParams?: boolean;
}) {
  const [response, setResponse] = useState("");
  const [url, setUrl] = useState(`/${endpoint}`);
  const [paramQuery, setParams] = useState(noParams ? "" : "?");
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
    console.log(`/${endpoint}` + paramQuery);
    getAnything(`/${endpoint}` + paramQuery).then((resp) => {
      setResponse(JSON.stringify(resp, null, 5));
      setLaoded(true);
    });
  }
  return (
    <>
      {Loaded ? (
        <div className="grid gap-10">
          <CodeBlock method="get" url={url + paramQuery} />
          <EndpointConsole
            noParams={noParams}
            send={handleSubmit}
            setParams={(e) => setParams(e)}
            paramQuery={paramQuery}
            methodAvailable={method.toUpperCase()}
            endpoint={url}
          />
          <ResponseJson code={response} />
        </div>
      ) : (
        <LoadingCompo />
      )}
    </>
  );
}
