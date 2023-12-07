"use client";

import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { getBaseUrl } from "../services/api";

export default function EndpointConsole({
  endpoint,
  methodAvailable,
}: {
  methodAvailable: string;
  endpoint: string;
}) {
  const [method, setMethod] = useState("GET");
  const [toggle, setToggle] = useState(false);
  const [url, setUrl] = useState("");
  const [paramsQuery, setQuery] = useState("?");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const methods = [
    {
      id: "get",
      title: "GET",
      color: "#4EB162",
    },
    {
      id: "post",
      title: "POST",
      color: "#B1A14E",
    },
    {
      id: "put",
      title: "PUT",
      color: "#4E6BB1",
    },
    {
      id: "delete",
      title: "DELETE",
      color: "#c0392b",
    },
  ];
  function handleSwitch(method: string) {
    setMethod(method.toUpperCase());
    setToggle(false);
  }
  async function getUrl() {
    await getBaseUrl().then((url) => {
      setUrl(`${url}/${endpoint}` || "");
    });
  }
  useEffect(() => {
    getUrl();
  }, []);
  return (
    <div className="grid gap-5">
      <h2 className="text-2xl font-bold">Request Console:</h2>
      <div className="flex gap-5">
        <div className="flex relative" ref={dropdownRef}>
          <button
            onClick={() => setToggle(!toggle)}
            className={`bg-light-2 px-5 py-2 rounded-md font-bold text-lg flex items-center gap-2 ${
              method === "GET" ? "text-green-0" : "text-yellow-0"
            }`}
          >
            <span>{method}</span>
            <ChevronDownIcon className="w-4 h-4 text-dark-0" />
          </button>
          {toggle && (
            <div
              className={`grid text-lg bg-light-2  rounded-md font-bold absolute top-full mt-2 w-full`}
            >
              {methods.map(({ id, color, title }) => (
                <button
                  disabled={id.toUpperCase() !== methodAvailable}
                  onClick={() => handleSwitch(id)}
                  key={id}
                  style={{ color: color }}
                  className="font-bold text-lg px-5 py-2 hover:bg-light-1/20 disabled:grayscale "
                >
                  {title}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex bg-light-2 p-3 xs:px-5 px-1 rounded-md w-full font-sans font-medium">
          <span className="xs:text-base text-xs">{url}</span>
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={paramsQuery}
            className="bg-light-2 focus:outline-none text-green-0"
          />
        </div>
        <button className="px-6 py-2 bg-green-0 text-light-0 font-semibold rounded-md hover:bg-green-0/90 transall">
          Send
        </button>
      </div>
    </div>
  );
}
