import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

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
      {!currentUser ? (
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
