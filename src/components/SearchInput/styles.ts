import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  max-width: 295px;
  height: 2rem;

  background: var(--white);
  border-bottom: 1px solid var(--border);
  border-radius: 4px;

  padding: 0 1rem;

  @media (max-width: 700px) {
    max-width: 700px;
  }

  > input {
    outline: none;
    background: transparent;
    border: 0;
    width: 90%;
    height: 2rem;

    font-style: italic;
    color: var(--sub-text);

    &:focus {
      outline: none;
    }

     > svg {
      color: var(--sub-text);
      font-weight: bold;
     }
  }
`;