import React from "react";
import { StyledSeparateEndpointDetails } from "../styles/Endpoints.styled";

export default function SeparateEndpointDetails({
  exampleUrl,
  exampleResponse,
}) {
  return (
    <StyledSeparateEndpointDetails>
      <h3>By sending a GET request to a URL similar to this:</h3>
      <p>{`http://localhost:3500/${exampleUrl}`}</p>
      <h3>You will receive a response similar to this:</h3>
      <p>{JSON.stringify(exampleResponse)}</p>
    </StyledSeparateEndpointDetails>
  );
}
