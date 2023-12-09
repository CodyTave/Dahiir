"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

export default function EndpointConsole({
  endpoint,
  methodAvailable,
  paramQuery,
  setParams,
  send,
}: {
  methodAvailable: string;
  endpoint: string;
  paramQuery: string;
  setParams: (q: string) => void;
  send: () => void;
}) {
  const [method, setMethod] = useState("GET");
  const [toggle, setToggle] = useState(false);
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
  return (
    <div className="grid gap-5 h-fit">
      <h2 className="text-2xl font-bold">Request Console:</h2>
      <div className="flex mlg:flex-row flex-col  gap-5">
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
              className={`grid text-lg bg-light-2 z-30 rounded-md font-bold absolute top-full mt-2 mlg:w-full`}
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
          <span className="xs:text-base text-xs shrink-0 line-clamp-1">
            {endpoint}
          </span>
          <input
            onChange={(e) => setParams(e.target.value)}
            value={paramQuery}
            className="bg-light-2 focus:outline-none text-green-0 w-full xs:text-base text-xs"
          />
        </div>
        <button
          onClick={send}
          className="px-6 py-2 bg-green-0 text-light-0 font-semibold rounded-md hover:bg-green-0/90 transall"
        >
          Send
        </button>
      </div>
    </div>
  );
}
