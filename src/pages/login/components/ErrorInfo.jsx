import { StyledErrorInfo } from "../styles/Login.styled";

export default function ErrorInfo({ message }) {
  return (
    <StyledErrorInfo className={!message && "hide"}>
      <p>{message}</p>
    </StyledErrorInfo>
  );
}