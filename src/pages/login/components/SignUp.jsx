import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useRegisterMutation } from "../../../globalElements/slices/authApiSlice";

import ErrorInfo from "./ErrorInfo";
import { SignUpForm } from "./SignUpForm";

import { StyledSignUp } from "../styles/Login.styled";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
  const [register, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidConfirmPassword(password === confirmPassword);
  }, [confirmPassword]);

  useEffect(() => {
    if (isSuccess) {
      finish();
    }
  }, [isSuccess, navigate]);

  const finish = () => {
    setUsername("");
    setPassword("");
    navigate("/dash/users");
  };

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onConfirmPasswordChanged = (e) => setConfirmPassword(e.target.value);

  const canSave =
    [validUsername, validPassword, validConfirmPassword].every(Boolean) &&
    !isLoading;

  const onSignUpClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await register({ username, password });
    }
  };

  const content = (
    <StyledSignUp>
      {isError && <ErrorInfo message={error?.data?.message} />}
      <h2>Sign up</h2>

      <SignUpForm
        handlers={{
          onSignUpClicked,
          onUsernameChanged,
          onPasswordChanged,
          onConfirmPasswordChanged,
        }}
        canSave={canSave}
        data={{
          username,
          password,
          confirmPassword,
        }}
      />

      <p>Already registered? </p>
      <Link to="/login" className="reactRouterLink">
        Sign in
      </Link>
    </StyledSignUp>
  );

  return content;
};
export default NewUserForm;
