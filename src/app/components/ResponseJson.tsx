"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JsonStyles } from "@/app/constants/styles";
export default function JsonBlock({
  code,
  wrap,
}: {
  code: string;
  wrap?: boolean;
}) {
  return (
    <div
      className={` min-h-[200px] max-h-[500px] overflow-y-auto relative rounded-md transall sm:px-10 bg-dark-3 ${
        wrap ? "px-3" : "px-1"
      } py-10 overflow-x-auto`}
    >
      <div className="text-light-0 font-bold text-xl mb-5">Response</div>
      <SyntaxHighlighter
        language="json"
        wrapLines
        wrapLongLines={wrap}
        style={JsonStyles}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
