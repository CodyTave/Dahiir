import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JsonStyles } from "@/app/constants/styles";
export default function CodeBlock({
  code,
  wrap,
}: {
  code?: string;
  wrap?: boolean;
}) {
  const codeDemo = `
  var axios = require('axios');
  var config = { method: 'get',maxBodyLength: Infinity,
    url: 'https://www.dahiir.com/api/experience',
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error){
            console.log(error);
         });`;
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
      {codeDemo}
    </SyntaxHighlighter>
  );
}
