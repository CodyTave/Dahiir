import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JsonStyles } from "@/app/constants/styles";
import { NodeJs_axios } from "../constants/codeLanguages";
export default function CodeBlock({
  code,
  wrap,
}: {
  code: string;
  wrap?: boolean;
}) {
  return (
    <SyntaxHighlighter
      wrapLines
      wrapLongLines={wrap}
      className={`sm:px-10 ${
        wrap ? "px-3" : "px-1"
      } py-10 rounded-md overflow-x-auto min-h-[200px]`}
      style={JsonStyles}
      language="javascript"
    >
      {code}
    </SyntaxHighlighter>
  );
}
