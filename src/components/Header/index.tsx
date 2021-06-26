import Link from 'next/link';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import logoImg from '../../assets/logo.png';

import { Container, Logo, LogoContainer, UserInfoContainer } from './styles';

interface HeaderProps {
  isOnDetailsPage?: boolean;
}

export function Header({ isOnDetailsPage = false }: HeaderProps) {
  return (
    <Container>

      <LogoContainer>
        { isOnDetailsPage && (
          <Link href="/">
            <a>
              <MdKeyboardArrowLeft size={24} />
            </a>
          </Link>
        ) }
        <div>
          <Logo src={logoImg} alt="" />
        </div>
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