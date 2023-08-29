import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  setCredentials,
} from "../../../globalElements/slices/authSlice";
import { useLoginMutation } from "../../../globalElements/slices/authApiSlice";

import HashLoader from "react-spinners/HashLoader";

import usePersist from "../../../hooks/usePersist";

import ErrorInfo from "./ErrorInfo";
import SignInForm from "./SignInForm";
import { StyledAuth } from "../styles/Login.styled";
import useAuth from "../../../hooks/useAuth";

export default function Login() {
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const { setIsLogged, isLogged } = useAuth();

  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ username, accessToken }));
      setUsername("");
      setPassword("");
      if (!isLogged) {
        setIsLogged(true);
      }
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.originalStatus) {
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handlePersistToggle = () => setPersist((prev) => !prev);

  if (isLoading)
    return (
      <div className="flex">
        <HashLoader color="fff" />
      </div>
    );

  const canSubmit = username && password;

  const content = (
    <StyledAuth>
      {errMsg && <ErrorInfo aria-live="assertive" message={errMsg} />}
      <h2>Sign in</h2>
      <SignInForm
        handlers={{
          handleSubmit,
          handleUserInput,
          handlePwdInput,
          handlePersistToggle,
        }}
        loginData={{ username, password, persist }}
        usernameRef={usernameRef}
        canSubmit={canSubmit}
      />
      <div className="flex">
        <p>Need an Account? </p>
        <Link to="/signup" className="reactRouterLink">
          <p>Sign up</p>
        </Link>
      </div>
    </StyledAuth>
  );

  return content;
}
