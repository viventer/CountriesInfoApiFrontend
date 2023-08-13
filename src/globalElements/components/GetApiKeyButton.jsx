import { StyledGetApiKeyButton } from "../styles/Header.styled";
import { Link } from "react-router-dom";

export default function GetApiKeyButton() {
  return (
    <StyledGetApiKeyButton>
      <Link
        to="/generateapikey"
        style={{ textDecoration: "none", color: "white" }}
      >
        <p>Get API key</p>
      </Link>
    </StyledGetApiKeyButton>
  );
}
