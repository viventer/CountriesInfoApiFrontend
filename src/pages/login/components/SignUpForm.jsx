import { StyledSignUpForm } from "../styles/Login.styled";

export function SignUpForm({ canSave, data, handlers }) {
  return (
    <StyledSignUpForm onSubmit={handlers.onSignUpClicked}>
      <label htmlFor="username">
        Username: <span>[3-20 letters]</span>
      </label>
      <input
        id="username"
        type="text"
        autoComplete="off"
        value={data.username}
        onChange={handlers.onUsernameChanged}
        required
      />

      <label htmlFor="password">
        Password: <span>[4-12 chars incl. !@#$%]</span>
      </label>
      <input
        id="password"
        type="password"
        value={data.password}
        onChange={handlers.onPasswordChanged}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        type="password"
        value={data.confirmPassword}
        onChange={handlers.onConfirmPasswordChanged}
        required
      />
      <button disabled={!canSave}>Sign up</button>
    </StyledSignUpForm>
  );
}
