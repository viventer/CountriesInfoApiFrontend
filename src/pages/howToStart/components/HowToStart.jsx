import GetApiKeyButton from "../../../globalElements/components/GetApiKeyButton";
import EndpointsButton from "./EndpointsButton";
import { StyledHowToStart } from "../styles/HowToStart.styled";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HowToStart() {
  const exampleRequest = `
await fetch("http://localhost:3500/countries-info", {
  headers: {
    username: "tom1",
    "x-api-key": "1c71ff02d90a41ecb4b6f9f7b8b3facd",
  },
});
`;

  return (
    <StyledHowToStart>
      <h2>How to start?</h2>
      <ol>
        <li>
          <p>Register/Login</p>
        </li>
        <li>
          <p>Generate your API key here:</p>
        </li>
        <GetApiKeyButton />
        <li>
          <p>
            Put your API key and username in the header of your request, for
            example:
          </p>
        </li>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          customStyle={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            padding: "0.5rem 1rem",
          }}
        >
          {exampleRequest.trim()}
        </SyntaxHighlighter>
        <li>
          <p>Now you can create request to these endpoints:</p>
        </li>
        <EndpointsButton />
      </ol>
    </StyledHowToStart>
  );
}
