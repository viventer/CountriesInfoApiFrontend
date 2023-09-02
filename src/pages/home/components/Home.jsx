import EndpointsList from "./EndpointsList";
import HowToStartButton from "./HowToStartButton";
import { StyledHome } from "../styles/Home.styled";

export default function Home() {
  return (
    <StyledHome>
      <HowToStartButton />
      <EndpointsList />
    </StyledHome>
  );
}
