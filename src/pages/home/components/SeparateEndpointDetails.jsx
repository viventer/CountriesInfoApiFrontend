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
    base01: "",
    base02: "white", // lines
    base03: "",
    base04: theme.colors.lightGreen, // other number of items
    base05: "",
    base06: "",
    base07: "white", // keys
    base08: "",
    base09: "yellow", // values
    base0A: "",
    base0B: theme.colors.lightBlue, // float type
    base0C: theme.lightGreen, // number of items
    base0D: "white", // expanding
    base0E: theme.colors.lightBlue, // copy icon
    base0F: theme.colors.lightBlue, // int type
  };
  return (
    <StyledSeparateEndpointDetails>
      <h3>Example request URL:</h3>
      <p>{`http://localhost:3500/${exampleUrl}`}</p>
      <h3>Example response:</h3>
      <ReactJson
        src={exampleResponse}
        collapsed={true}
        theme={reactJsonTheme}
        style={{
          fontSize: "0.9rem",
          padding: "0.5rem 1rem",
          borderTop: "0.1rem solid rgba(255, 255, 255, 0.5",
        }}
      />
    </StyledSeparateEndpointDetails>
  );
}
