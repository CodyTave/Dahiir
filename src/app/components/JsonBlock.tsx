"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JsonStyles } from "@/app/constants/styles";
import { useState } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
export default function JsonBlock({
  code,
  wrap,
  expandable,
}: {
  code: string;
  wrap?: boolean;
  expandable?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={` min-h-[200px] overflow-y-hidden ${
        expanded ? "max-h-full" : "max-h-[350px]"
      } relative rounded-md transall`}
    >
      <SyntaxHighlighter
        language="json"
        wrapLines
        wrapLongLines={wrap}
        className={`sm:px-10 ${wrap ? "px-3" : "px-1"} py-10 overflow-x-auto `}
        style={JsonStyles}
      >
        {code}
      </SyntaxHighlighter>
      {expandable && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-light-0 absolute bottom-5 right-1/2 translate-x-1/2 text-sm   z-30  transall flex items-center gap-1 p-1 px-3 rounded-full bg-dark-0 hover:bg-dark-1"
          >
            {expanded ? (
              <span className="hover:bg-dark-0">See Less</span>
            ) : (
              <span className="">See Mooore</span>
            )}
            <ArrowDownIcon
              className={`w-3 h-3 ${expanded && "rotate-180"} transall`}
            />
          </button>
          {!expanded && (
            <span className="bottom-grad absolute bottom-0 left-0 w-full z-20 h-32 rounded-md"></span>
          )}
        </>
      )}
    </div>
  );
}
