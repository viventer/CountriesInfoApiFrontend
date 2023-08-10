import { StyledEndpointsList } from "../styles/Endpoints.styled";

import SeparateEndpoint from "./SeparateEndpoint";

export default function EndpointsList() {
  const endpoints = [
    {
      url: "countries-info",
      description: "Sends back information about all countries.",
      exampleUrl: "countries-info",
    },
    {
      url: "countries-info:countryCode",
      description:
        "Sends back information about a specific country. Provide ISO A3 or ISO A2 country code.",
      exampleUrl: "countries-info/PL",
    },
    {
      url: "countries-borders",
      description: "Sends back borders of all countries in geojson format.",
      exampleUrl: "countries-borders",
    },
    {
      url: "countries-borders:countryCode",
      description:
        "Sends back borders of specific country in geojson format. Provide ISO A3 or ISO A2 country code.",
      exampleUrl: "countries-borders/PL",
    },
  ];

  (async function makeQueriesForExampleResponses() {
    await Promise.all(
      endpoints.map(async (endpoint) => {
        endpoint.exampleResponse = await getExampleResponse(
          endpoint.exampleUrl
        );
      })
    );
  })();

  async function getExampleResponse(url) {
    try {
      let response = await fetch(`http://localhost:3500/${url}`, {
        method: "GET",
        headers: {
          username: "tom1",
          "x-api-key": "1c71ff02d90a41ecb4b6f9f7b8b3facd",
        },
      });
      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  const endpointsComponents = endpoints.map((endpoint) => (
    <SeparateEndpoint
      key={endpoint.url}
      url={endpoint.url}
      description={endpoint.description}
      exampleUrl={endpoint.exampleUrl}
    />
  ));

  return (
    <StyledEndpointsList>
      <h2>Endpoints:</h2>
      {endpointsComponents}
    </StyledEndpointsList>
  );
}
