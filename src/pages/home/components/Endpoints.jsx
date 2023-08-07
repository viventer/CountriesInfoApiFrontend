import { StyledEndpoints } from "../styles/Endpoints.styled";

export default function Endpoints() {
  const endpoints = [
    {
      url: "countries-info",
      description: "Sends back information about all countries.",
    },
    {
      url: "countries-info:countryCode",
      description:
        "Sends back information about a specific country. Provide ISO A3 or ISO A2 country code.",
    },
    {
      url: "countries-borders",
      description: "Sends back borders of all countries in geojson format.",
    },
    {
      url: "countries-borders:countryCode",
      description:
        "Sends back borders of specific country in geojson format. Provide ISO A3 or ISO A2 country code.",
    },
  ];

  return (
    <StyledEndpoints>
      <h2>Endpoints:</h2>
    </StyledEndpoints>
  );
}
