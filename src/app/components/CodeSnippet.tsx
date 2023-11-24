import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JsonStyles } from "@/app/constants/styles";
export default function CodeSnippet({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <SyntaxHighlighter
      wrapLines
      // wrapLongLines
      className="sm:px-10 px-1 py-10 rounded-md overflow-x-auto min-h-[200px]"
      language={language}
      style={JsonStyles}
    >
      {code}
    </SyntaxHighlighter>
  );
}
