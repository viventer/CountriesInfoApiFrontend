import { Link } from "react-router-dom";

import { StyledButton } from "../styles/Buttons.styled";

export default function GetApiKeyButton() {
  return (
    <StyledButton>
      <Link to="/generateapikey" className="reactRouterLink">
        <p>Get API key</p>
      </Link>
    </StyledButton>
  );
}
