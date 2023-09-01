import { Link, useLocation } from "react-router-dom";

import { StyledSignInButton } from "../styles/Header.styled";

export default function SignInButton() {
  const { pathname } = useLocation();
  const signInPathRegex = /signin/i;

  return (
    <StyledSignInButton className={signInPathRegex.test(pathname) && "hide"}>
      <Link to="/signin" className="reactRouterLink">
        <p>Sign in</p>
      </Link>
    </StyledSignInButton>
  );
}
