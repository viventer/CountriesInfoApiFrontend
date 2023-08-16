import { StyledSignInForm } from "../styles/Login.styled";

export default function SignInForm({ handlers, loginData, usernameRef }) {
  return (
    <StyledSignInForm onSubmit={handlers.handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        ref={usernameRef}
        value={loginData.username}
        onChange={handlers.handleUserInput}
        autoComplete="off"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={handlers.handlePwdInput}
        value={loginData.password}
        required
      />
      <button>Sign In</button>

      <label htmlFor="persist">
        <input
          type="checkbox"
          id="persist"
          onChange={handlers.handlePersistToggle}
          checked={loginData.persist}
        />
        Trust This Device
      </label>
    </StyledSignInForm>
  );
}
