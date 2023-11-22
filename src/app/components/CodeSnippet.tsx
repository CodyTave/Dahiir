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
      className="sm:px-10 py-10 rounded-md overflow-x-auto"
      language={language}
      style={JsonStyles}
    >
      {code}
    </SyntaxHighlighter>
  );
}
