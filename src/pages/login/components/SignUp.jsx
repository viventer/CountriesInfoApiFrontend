import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  setCredentials,
} from "../../../globalElements/slices/authSlice";
import { useRegisterMutation } from "../../../globalElements/slices/authApiSlice";
import { useLoginMutation } from "../../../globalElements/slices/authApiSlice";
import usePersist from "../../../hooks/usePersist";

import ErrorInfo from "./ErrorInfo";
import { SignUpForm } from "./SignUpForm";

import { StyledAuth } from "../styles/Login.styled";
import HashLoader from "react-spinners/HashLoader";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const [register, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();

  const [login, { isLoginLoading }] = useLoginMutation();

  const [persist, setPersist] = usePersist();

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
    setValidConfirmPassword(password === confirmPassword && password);
  }, [confirmPassword]);

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      finish();
    }
  }, [isSuccess, navigate]);

  const finish = () => {
    setUsername("");
    setPassword("");
    navigate("/");
  };

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onConfirmPasswordChanged = (e) => setConfirmPassword(e.target.value);
  const onPersistToggle = () => setPersist((prev) => !prev);

  const onSignUpClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await register({ username, password });
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ username, accessToken }));
      navigate(from, { replace: true });
    }
  };

  const canSave =
    [validUsername, validPassword, validConfirmPassword].every(Boolean) &&
    !isLoading;

  if (isLoading && isLoginLoading) return <HashLoader color="fff" />;

  const content = (
    <StyledAuth>
      {isError && <ErrorInfo message={error?.data?.message} />}
      <h2>Sign up</h2>

      <SignUpForm
        handlers={{
          onSignUpClicked,
          onUsernameChanged,
          onPasswordChanged,
          onConfirmPasswordChanged,
          onPersistToggle,
        }}
        canSave={canSave}
        data={{
          username,
          password,
          confirmPassword,
          persist,
        }}
        usernameRef={usernameRef}
      />

      <div className="flex">
        <p>Already registered? </p>
        <Link to="/signin" className="reactRouterLink">
          <p>Sign in</p>
        </Link>
      </div>
    </StyledAuth>
  );

  return content;
};
export default NewUserForm;
