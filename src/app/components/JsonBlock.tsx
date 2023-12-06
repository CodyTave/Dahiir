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
    <SyntaxHighlighter
      wrapLines
      wrapLongLines={wrap}
      className={`sm:px-10 ${
        wrap ? "px-3" : "px-1"
      } py-10 rounded-md overflow-x-auto min-h-[200px]`}
      style={JsonStyles}
    >
      {code}
    </SyntaxHighlighter>
  );
}
