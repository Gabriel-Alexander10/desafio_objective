import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 2.5rem 7.0625rem;
  min-height: calc(100vh - (4rem + 5.625rem)); // full screen - footer and header
`;

export const HeroesListContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  width: 100%;
`;