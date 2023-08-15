import { StyledSignUpButton } from "../styles/Header.styled";

import { Link, useLocation } from "react-router-dom";

export default function SignUpButton() {
  const { pathname } = useLocation();
  const signUpPathRegex = /signup/i;

  return (
    <StyledSignUpButton className={signUpPathRegex.test(pathname) && "hide"}>
      <Link to="/signup" className="reactRouterLink">
        <p>Sign up</p>
      </Link>
    </StyledSignUpButton>
  );
}
