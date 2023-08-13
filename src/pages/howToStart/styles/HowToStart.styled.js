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
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    counter-increment: section-counter;
    margin-bottom: 2rem;
  }

  li:nth-child(2) {
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
  }
`;
