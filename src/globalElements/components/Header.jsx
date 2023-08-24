import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import { StyledHeader } from "../styles/Header.styled";

import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import GetApiKeyButton from "./GetApiKeyButton";

export default function Header() {
  const isLogged = localStorage.getItem("isLogged");

  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <div className="flex">
        <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
        <button disabled={pathname === "/"}>
          <Link to="/" className="reactRouterLink">
            <h1>Countries Info API</h1>
          </Link>
        </button>
      </div>
      {!isLogged ? (
        <div className="flex">
          <SignUpButton />
          <SignInButton />
        </div>
      ) : (
        <GetApiKeyButton />
      )}
    </StyledHeader>
  );
}
