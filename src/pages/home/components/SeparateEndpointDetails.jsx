import React, { useContext } from "react";
import { StyledSeparateEndpointDetails } from "../styles/Endpoints.styled";

import ReactJson from "react-json-view";
import { ThemeContext } from "styled-components";

export default function SeparateEndpointDetails({
  exampleUrl,
  exampleResponse,
}) {
  const theme = useContext(ThemeContext);

  const reactJsonTheme = {
    base00: "rgba(0, 0, 0, 0.25)", // background
    base01: "", // nothing
    base02: "white", // lines
    base03: "", // nothing
    base04: theme.colors.lightGreen, // other number of items
    base05: "white", // nothing
    base06: "", // nothing
    base07: "yellow", // keys
    base08: "", // nothing
    base09: "white", // values
    base0A: "", // nothing
    base0B: theme.colors.lightBlue, // float type
    base0C: theme.lightGreen, // number of items
    base0D: "white", // expanding
    base0E: theme.colors.lightBlue, // copy icon
    base0F: theme.colors.lightBlue, // int type
  };
  return (
    <StyledSeparateEndpointDetails>
      <h3>By sending a GET request to a URL similar to this:</h3>
      <p>{`http://localhost:3500/${exampleUrl}`}</p>
      <h3>You will receive a response similar to this:</h3>
      <ReactJson
        src={exampleResponse}
        collapsed={2}
        theme={reactJsonTheme}
        style={{ fontSize: "0.9rem" }}
      />
    </StyledSeparateEndpointDetails>
  );
}
