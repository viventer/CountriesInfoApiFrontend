import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/authApiSlice";

import HashLoader from "react-spinners/HashLoader";

import usePersist from "../../../hooks/usePersist";

import ErrorInfo from "./ErrorInfo";
import SignInForm from "./SignInForm";
import { StyledSignIn } from "../styles/Login.styled";

export default function Login() {
  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
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
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/");
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
      <h2>Employee Login</h2>
      {errMsg && <ErrorInfo aria-live="assertive" message={errMsg} />}
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
      <Link to="/">Back to Home</Link>
    </StyledSignIn>
  );

  return content;
}
