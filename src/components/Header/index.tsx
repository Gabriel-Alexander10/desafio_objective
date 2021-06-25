import Image from 'next/image';

import logoImg from '../../assets/logo.svg';

import { Container, Logo, LogoContainer, UserInfoContainer } from './styles';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logoImg} alt="" />
      </LogoContainer>

      <UserInfoContainer>
        <p>
          <strong>Nome</strong> Teste frontend
        </p>

        <div>GA</div>
      </UserInfoContainer>
    </Container>
  )
}