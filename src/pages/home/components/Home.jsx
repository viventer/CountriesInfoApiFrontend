import Endpoints from "./Endpoints";
import { StyledHome } from "../styles/Home.styled";
import HowToStartButton from "./HowToStartButton";

export default function Home() {
  return (
    <StyledHome>
      <HowToStartButton />
      <Endpoints />
    </StyledHome>
  );
}
