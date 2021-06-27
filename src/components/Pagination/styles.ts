import styled, { css } from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.625rem;

  background: var(--white);
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

export const Button = styled.button<ButtonProps>`
  width: 2.5rem;
  height: 2rem;
  ${props => props.active ?
     css`background: var(--element-highlighted);` :
     css`background: var(--element);`
  };
  border: 1px solid var(--background);
  border-radius: 4px;

  &:hover, &:focus {
    background-color: var(--element-highlighted);
  }



  & + button {
    margin-left: 1rem;
  }
`;