import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import { StyledHeader } from "../styles/Header.styled";

import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import { selectCurrentUser } from "../slices/authSlice";
import GetApiKeyButton from "./GetApiKeyButton";
import { useSelector } from "react-redux";

export default function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const [loggedIn, setLoggedIn] = useState(currentUser ? true : false);

  return (
    <StyledHeader>
      <div className="flex">
        <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
        <h1>Countries Info API</h1>
      </div>
      {loggedIn ? (
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
