import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/authApiSlice";

import usePersist from "../../../hooks/usePersist";

import ErrorInfo from "./ErrorInfo";
import { StyledSignIn } from "../styles/Login.styled";

const Login = () => {
  const usernameRef = useRef();
  const errRef = useRef();
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
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  const content = (
    <StyledSignIn>
      <h2>Employee Login</h2>
      {errMsg && (
        <ErrorInfo ref={errRef} aria-live="assertive" message={errMsg} />
      )}

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className="form__input"
          type="text"
          id="username"
          ref={usernameRef}
          value={username}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="form__input"
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={password}
          required
        />
        <button className="form__submit-button">Sign In</button>

        <label htmlFor="persist" className="form__persist">
          <input
            type="checkbox"
            className="form__checkbox"
            id="persist"
            onChange={handleToggle}
            checked={persist}
          />
          Trust This Device
        </label>
      </form>
      <Link to="/">Back to Home</Link>
    </StyledSignIn>
  );

  return content;
};
export default Login;
