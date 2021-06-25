import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.625rem;

  background: var(--white);

  > button {
    width: 2.5rem;
    height: 2rem;
    background: var(--element);
    border: 1px solid var(--background);
    border-radius: 4px;

    &:hover {
      background: var(--element-highlighted);
    }

    & + button {
      margin-left: 1rem;
    }
  }
`;

export const ArrowButtonWrapper = styled.div`
  padding: 0 8px;
  button {
    background: transparent;
    border: 0;
    svg {
      & + svg {
        margin-left: -20px;
      }
    }
  }
`;