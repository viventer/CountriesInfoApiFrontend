import { StyledEndpointsList } from "../styles/Endpoints.styled";
import SeparateEndpoint from "./SeparateEndpoint";

import endpointsData from "../data/endpointsData.json";

export default function EndpointsList() {
  const endpointsComponents = endpointsData.endpoints.map((endpoint) => (
    <SeparateEndpoint
      key={endpoint.url}
      url={endpoint.url}
      description={endpoint.description}
      exampleUrl={endpoint.exampleUrl}
      exampleResponse={endpoint.exampleResponse}
    />
  ));

  return (
    <StyledEndpointsList>
      <h2>Endpoints:</h2>
      {endpointsComponents}
    </StyledEndpointsList>
  );
}
