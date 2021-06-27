import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Infolist = styled.div`
  width: 100%;
  max-width: 535px;
  height: 16rem;
  background-color: var(--white);
  border-radius: 8px;
  
  p {
    font: 400 1.5rem "PT Sans";
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: 6rem;

  border-bottom: 1px solid var(--border);

  svg {
    margin-left: 2rem;
    margin-right: 1rem;
  }

  span {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    svg {
      margin-left: 1rem;
      width: 24px;
    }

    span {
      font-size: 0.8rem;
      width: 50%;
    }
  }
`;