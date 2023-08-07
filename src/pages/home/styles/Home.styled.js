import styled from "styled-components";

export const StyledHome = styled.main``;

export const StyledHowToStartButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 0.3rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0.05rem 0.05rem 1.5rem rgba(255, 255, 255, 0.2);

  @media (hover: hover) {
    &:hover {
      filter: brightness(1.25);
      cursor: pointer;
    }
  }
`;
