import styled from 'styled-components';

export const HeroItem = styled.tr`
  padding: 0 1.5rem;
  height: 88px;
  background: var(--white);
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;

  td:first-child,
  th:first-child {
    border-radius: 4px 0 0 4px;
  }

  td:last-child,
  th:last-child {
    border-radius: 0 4px 4px 0;
  }
  
  td {
    text-align: left;
    padding-left: 18px;
    font: 400 0.75rem "PT Sans";
    color: var(--text);
    width: 33%;

    & + td {
      padding-right: 2rem;
      padding-left: 0;
    }
    
    span {
      display: block;
    }
    
    > div {
      display: flex;
      align-items: center;

      strong {
        margin-left: 24px;
        font: bold 1rem "PT Sans";
      }

    }
  }
`;

export const HeroAvatarWrapper = styled.div`
  border-radius: 4px;
  width: 3rem;
  height: 3rem;

  img {
    width: 100%;
    border-radius: 4px;
  }
`;