import styled from "styled-components";

export const StyledMissing = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  color: white;
  margin-top: 5rem;

  & button {
    font-weight: 700;
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }

  & .flex {
    gap: 1rem;
    font-size: 2rem;
  }

  & .icon {
    font-size: 3rem;
    color: red;
  }
`;
