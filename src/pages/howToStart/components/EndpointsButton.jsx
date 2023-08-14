import { Link } from "react-router-dom";

import { StyledButton } from "../../../globalElements/styles/Buttons.styled";

export default function EndpointsButton() {
  return (
    <StyledButton>
      <Link to="/" className="reactRouterLink">
        Endpoints
      </Link>
    </StyledButton>
  );
}
