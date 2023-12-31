import styled from "styled-components";

export const StyledEndpointsList = styled.section`
  h2 {
    font-size: 1.5rem;
  }
`;

export const StyledSeparateEndpoint = styled.article`
  margin: 2rem 0 0 0;
  max-width: 70rem;
  & > .flex {
    gap: 1rem;
    justify-content: left;
    margin-bottom: 0.5rem;
  }
  & > .flex > p {
    font-size: 1.2rem;
    font-weight: 700;
  }
  & > .flex > p:first-child {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    padding: 0.25rem 0.75rem;
    border-radius: 0.3rem;
  }
  & > p,
  & > button {
    font-size: 1.1rem;
  }
  & > p {
    background-color: rgba(33, 104, 105, 0.25);
    padding: 0.5rem 1rem;
    border-radius: 0.3rem 0.3rem 0 0;
  }
  & > button {
    color: white;
    background-color: rgba(33, 104, 105, 0.25);
    border: none;
    width: 100%;
    border-radius: 0 0 0.3rem 0.3rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.5);
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 600px) {
    & > .flex > p {
      font-size: 1.4rem;
    }
    & > p,
    & > button {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1400px) {
    & > .flex > p {
      font-size: 1.5rem;
    }
    & > p,
    & > button {
      font-size: 1.3rem;
    }
  }
`;

export const StyledSeparateEndpointDetails = styled.section`
  background-color: rgba(33, 104, 105, 0.25);

  h3 {
    padding: 1rem 1rem 0.5rem 1rem;
  }
  p {
    padding: 0 1rem 0.5rem 1rem;
  }
`;
