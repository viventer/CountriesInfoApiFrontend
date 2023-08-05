import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkGreen};

  & .icon {
    font-size: 2rem;
    margin-right: 1rem;
  }

  & button {
    color: white;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0.7rem;
    padding: 0.5rem;
  }

  & button:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const StyledSignUpButton = styled.button`
  border: none;
  margin-right: 1rem;
`;

export const StyledSignInButton = styled.button`
  border: 0.15rem solid white;
`;
