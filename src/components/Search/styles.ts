import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  > h1 {
    color: var(--text); 
    font: normal bold 2rem "PT Sans Caption";
  }

  > strong {
    font: normal bold 1rem "PT Sans Caption";
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 700px) {
    align-items: center;
    font: 1.5rem;
  }
`;