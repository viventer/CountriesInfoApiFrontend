import { StyledSeparateEndpoint } from "../styles/Endpoints.styled";
import SeparateEndpointDetails from "./SeparateEndpointDetails";

export default function SeparateEndpoint({
  url,
  description,
  exampleUrl,
  exampleResponse,
}) {
  return (
    <StyledSeparateEndpoint>
      <div className="flex">
        <p>GET</p>
        <p>{`/${url}`}</p>
      </div>
      <p>{description}</p>
      <SeparateEndpointDetails
        exampleUrl={exampleUrl}
        exampleResponse={exampleResponse}
      />
    </StyledSeparateEndpoint>
  );
}
