import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  border-bottom: 0.1rem solid white;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.7rem;
  }

  & .icon {
    font-size: 1.7rem;
    margin-right: 0.5rem;
  }

  & button {
    color: white;
    font-size: 1.4rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0.7rem;
    padding: 0.4rem;
  }

  & button:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 1.5rem;
    }
    & .icon {
      font-size: 1.5rem;
    }
    & button {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 375px) {
    & {
      display: block;
    }
    & .flex {
      justify-content: left;
    }
    & .flex:nth-of-type(2) {
      margin-top: 0.5rem;
      gap: 0.5rem;
    }
  }
`;

export const StyledSignUpButton = styled.button`
  border: none;
  margin-right: 1rem;
  @media (max-width: 465px) {
    border: 0.15rem solid white;
    margin-right: 0;
  }
  @media (max-width: 375px) {
    border: none;
  }
`;

export const StyledSignInButton = styled.button`
  border: 0.15rem solid white;
  @media (max-width: 465px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: flex;
  }
`;

export const StyledGetApiKeyButton = styled.button`
  border: 0.15rem solid white;
`;
