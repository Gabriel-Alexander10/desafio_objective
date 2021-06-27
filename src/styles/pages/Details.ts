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
      min-width: 80px;
      border-radius: 4px;
      margin-right: 1rem;

      div {
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
        max-height: 80px;
        max-width: 80px;
        border-radius: 4px;
      }
    }

    @media (max-width: 900px) {
      width: 100%;
    }

    @media(max-width: 500px) {
      flex-direction: column;
      align-items: center;
      > div {
        
        margin: 0;
        img {
          width: 4rem;
        }
      }
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

  @media(max-width: 600px) { 
    padding: 2.5rem 2rem;
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

  @media(max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;