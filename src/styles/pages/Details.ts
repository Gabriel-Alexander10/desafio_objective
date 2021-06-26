import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 2.5rem 7.0625rem;
  min-height: 100vh; 

  > div {
    width: 70%;
    min-height: 200px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 1.5rem;
    background: var(--white);
    border-radius: 8px;

    > div {
      width: 6.25rem;
      height: 6.25rem;

      div {
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
      }

      margin-right: 1rem;
    }
  }

  main {
    margin-top: 2rem;
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 300px;
  color: var(--text);

  strong {
    font: 700 1.5rem "PT Sans Caption";
  }
`;