import { StyledErrorInfo } from "../styles/Login.styled";

export default function ErrorInfo({ message }) {
  return (
    <StyledErrorInfo>
      <p>{message}</p>
    </StyledErrorInfo>
  );
}
