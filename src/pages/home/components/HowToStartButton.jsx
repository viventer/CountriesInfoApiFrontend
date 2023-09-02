import { useNavigate } from "react-router-dom";

import { StyledHowToStartButton } from "../styles/Home.styled";

export default function HowToStartButton() {
  const navigate = useNavigate();

  return (
    <StyledHowToStartButton onClick={() => navigate("/howtostart")}>
      <p>How to start?</p>
    </StyledHowToStartButton>
  );
}
