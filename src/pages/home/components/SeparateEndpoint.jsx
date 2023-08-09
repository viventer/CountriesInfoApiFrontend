import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

import { StyledSeparateEndpoint } from "../styles/Endpoints.styled";
import SeparateEndpointDetails from "./SeparateEndpointDetails";

export default function SeparateEndpoint({ url, description, exampleUrl }) {
  const exampleQuery = "";

  async function exampleFetch() {
    try {
      let response = await fetch("http://localhost:3500/countries-info", {
        method: "GET",
        headers: {
          username: "tom1",
          "x-api-key": "116e9972e0a74552b977527ae69f98a",
          "Content-Type": "apllication/json",
        },
      });
      response = await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  exampleFetch();

  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetailsClicked() {
    setShowDetails((prev) => !prev);
  }

  return (
    <StyledSeparateEndpoint>
      <div className="flex">
        <p>GET</p>
        <p>{`/${url}`}</p>
      </div>
      <p>{description}</p>
      {showDetails && <SeparateEndpointDetails />}
      <button onClick={handleShowDetailsClicked}>
        <FontAwesomeIcon
          icon={showDetails ? faChevronUp : faChevronDown}
          className="icon"
        />
      </button>
    </StyledSeparateEndpoint>
  );
}
