"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JsonStyles } from "@/app/constants/styles";
import { codeSnippets } from "../constants/codeLanguages";
import { useState } from "react";
export default function CodeBlock({
  method,
  url,
  wrap,
}: {
  method: string;
  url: string;
  wrap?: boolean;
}) {
  const [language, setLanguage] = useState(codeSnippets[0]);
  function handleChange(arg: string) {
    const code = codeSnippets.find((snippet) => snippet.id === arg);
    if (code) {
      setLanguage(code);
    }
  }
  return (
    <div
      className={`sm:px-10 py-10 ${
        wrap ? "px-3" : "px-1"
      } rounded-md overflow-x-auto min-h-[200px] bg-dark-3`}
    >
      <div className="text-light-0 font-bold text-xl">{"Request"}</div>
      <select
        onChange={(e) => handleChange(e.target.value)}
        className="text-light-0/50 font-semibold my-5 bg-dark-3 focus:outline-none"
      >
        {codeSnippets.map(({ id, title }) => (
          <option value={id} key={id}>
            {title}
          </option>
        ))}
      </select>
      <SyntaxHighlighter
        wrapLines
        wrapLongLines={wrap}
        style={JsonStyles}
        language={language.language}
      >
        {language.code(method, url)}
      </SyntaxHighlighter>
    </div>
  );
}
