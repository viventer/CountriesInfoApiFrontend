import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import { StyledHeader } from "../styles/Header.styled";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import GetApiKeyButton from "./GetApiKeyButton";
import SignOutButton from "./SignOutButton";

import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { isLogged } = useAuth();

  return (
    <StyledHeader>
      <div className="flex">
        <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
        <Link to="/" className="reactRouterLink">
          <h1>Countries Info API</h1>
        </Link>
      </div>
      {/* isLogged is undefined only after login, before the first refresh of the page */}
      {!isLogged && isLogged != undefined ? (
        <div className="flex">
          <SignUpButton />
          <SignInButton />
        </div>
      ) : (
        <div className="flex">
          <GetApiKeyButton />
          <SignOutButton />
        </div>
      )}
    </StyledHeader>
  );
}
