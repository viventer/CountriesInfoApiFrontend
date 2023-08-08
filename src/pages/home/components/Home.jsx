import EndpointsList from "./EndpointsList";
import { StyledHome } from "../styles/Home.styled";
import HowToStartButton from "./HowToStartButton";

export default function Home() {
  return (
    <StyledHome>
      <HowToStartButton />
      <EndpointsList />
    </StyledHome>
  );
}
