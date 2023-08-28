import styled from "styled-components";

export const StyledGenerateApiKey = styled.main`
  & h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  & h2:nth-of-type(2) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.4);
    width: 100%;
  }

  & ol {
    margin-bottom: 1rem;
  }

  & li {
    font-size: 1.5rem;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    counter-increment: section-counter;
    margin-bottom: 0.75rem;
  }

  & li > p {
    font-family: "Ubuntu Mono", monospace;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & li > p::before {
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

  .liButton {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: 1.5rem;
    margin-left: 1rem;

    transition: filter 0.15s ease-in-out;
  }

  .liButton:hover {
    filter: saturate(3);
    cursor: pointer;
  }

  .liButton:active {
    filter: opacity(0.8);
  }

  .deleteButton {
    color: ${({ theme }) => theme.colors.peach};
  }

  .copyButton {
    color: ${({ theme }) => theme.colors.lightGreen};
  }

  & span {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  .generateNewButton {
    padding: 0.5rem;
    font-weight: 700;
    gap: 0.3rem;
    font-size: 1.3rem;
  }
`;
