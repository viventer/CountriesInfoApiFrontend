import { Link } from "react-router-dom";

import {
  faHouse,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledMissing } from "../styles/Missing.styled";
import { StyledButton } from "../styles/Buttons.styled";

export default function Missing() {
  return (
    <StyledMissing>
      <div className="flex">
        <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
        <h2>This Page doesn't exist</h2>
      </div>
      <Link className="reactRouterLink" to="/">
        <StyledButton>
          <FontAwesomeIcon icon={faHouse} />
          <p>Return to the home page</p>
        </StyledButton>
      </Link>
    </StyledMissing>
  );
}
