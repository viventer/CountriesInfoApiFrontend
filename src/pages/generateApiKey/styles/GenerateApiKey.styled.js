import styled from "styled-components";

export const StyledGenerateApiKey = styled.main`
  h2 {
    font-size: 1.6rem;
  }

  ol {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  li {
    font-size: 1.5rem;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    counter-increment: section-counter;
    margin-bottom: 0.75rem;
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

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
  }
`;
