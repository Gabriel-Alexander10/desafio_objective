import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background: var(--white);
  border-bottom: 1px solid var(--border);
  height: 4rem;
`;

export const LogoContainer = styled.div`
  display: flex;

  div {
    width: 120px;
  }

  @media (max-width: 500px) {
    div {
      width: 80px;
      display: flex;
      align-items: center;
    }

    padding-left: 10px;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding-right: 10px;

  p {
    strong {
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    background: var(--element);
    border-radius: 4px;
    font: normal bold 0.9375rem 'PT Sans Caption', sans-serif;
  }

  @media (max-width: 500px) {
    gap: 5px;

     p {
      width: 100px;
    }
  }
`;