import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import { StyledHeader } from "../styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <FontAwesomeIcon icon={faEarthAmericas} />
    </StyledHeader>
  );
}
