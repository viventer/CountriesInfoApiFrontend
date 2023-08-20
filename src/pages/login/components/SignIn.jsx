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
import { StyledSignIn } from "../styles/Login.styled";

export default function Login() {
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      console.log("tak");
      navigate("/");
    }
    console.log(currentUser);
  }, []);

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
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handlePersistToggle = () => setPersist((prev) => !prev);

  if (isLoading) return <HashLoader color="fff" />;

  const content = (
    <StyledSignIn>
      {!errMsg && <ErrorInfo aria-live="assertive" message={errMsg} />}
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
      />
      <p>Need an Account? </p>
      <Link to="/login" className="reactRouterLink">
        Sign up
      </Link>
    </StyledSignIn>
  );

  return content;
}
