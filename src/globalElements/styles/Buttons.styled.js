import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1.4rem;
  color: white;
  border: 0.15rem solid white;
  border-radius: 0.7rem;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colors.darkGreen};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;
