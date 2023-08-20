import { StyledHowToStartButton } from "../styles/Home.styled";
import { useNavigate } from "react-router-dom";

export default function HowToStartButton() {
  const navigate = useNavigate();

  function changePage() {
    navigate("/howtostart");
  }

  return (
    <StyledHowToStartButton onClick={changePage}>
      <p>How to start?</p>
    </StyledHowToStartButton>
  );
}
