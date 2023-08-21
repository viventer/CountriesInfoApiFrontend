import { StyledAuthForm } from "../styles/Login.styled";

export default function SignInForm({
  handlers,
  loginData,
  usernameRef,
  canSubmit,
}) {
  return (
    <StyledAuthForm onSubmit={handlers.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        ref={usernameRef}
        value={loginData.username}
        onChange={handlers.handleUserInput}
        autoComplete="off"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={handlers.handlePwdInput}
        value={loginData.password}
        required
      />
      <button
        className={canSubmit ? "activeButton" : "disabledButton"}
        disabled={!canSubmit}
      >
        Sign in
      </button>
      <div className="flex">
        <input
          type="checkbox"
          id="persist"
          onChange={handlers.handlePersistToggle}
          checked={loginData.persist}
        />
        <label htmlFor="persist">Trust this device</label>
      </div>
    </StyledAuthForm>
  );
}
