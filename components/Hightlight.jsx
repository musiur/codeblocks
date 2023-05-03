import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const Highlight = ({ content }) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark}>
      {content}
    </SyntaxHighlighter>
  );
};

export default Highlight;
