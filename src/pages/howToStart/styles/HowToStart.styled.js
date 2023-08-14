import styled from "styled-components";

export const StyledHowToStart = styled.main`
  h2 {
    font-size: 1.6rem;
  }

  ol {
    margin-top: 1rem;
  }

  li {
    font-size: 1.5rem;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    counter-increment: section-counter;
    margin-bottom: 2rem;
  }

  li:nth-child(2),
  li:nth-child(6) {
    margin-bottom: 0.5rem;
  }

  li:nth-child(4) {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  li::before {
    content: counter(section-counter);
    font-size: 1.5rem;
    font-weight: 700;
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  div {
    font-size: 1.5rem;
  }

  @media (max-width: 750px) {
    li {
      font-size: 1.25rem;
    }
    div {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 400px) {
    li {
      font-size: 1.15rem;
    }
    div {
      font-size: 1.15rem;
    }
  }
`;
