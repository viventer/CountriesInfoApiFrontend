import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { StyledSeparateEndpoint } from "../styles/Endpoints.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SeparateEndpoint({ url, description, exampleUrl }) {
  return (
    <StyledSeparateEndpoint>
      <div className="flex">
        <p>GET</p>
        <p>{`/${url}`}</p>
      </div>
      <p>{description}</p>
      <button>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </button>
    </StyledSeparateEndpoint>
  );
}
