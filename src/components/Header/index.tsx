import Link from 'next/link';
import { memo } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Container, Logo, LogoContainer, UserInfoContainer } from './styles';

interface HeaderProps {
  isOnDetailsPage?: boolean;
}

const HeaderComponent = ({ isOnDetailsPage = false }: HeaderProps) => {
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
          <Logo src="/assets/logo.png" alt="Logo Objective" />
        </div>
      </LogoContainer>

      <UserInfoContainer>
        <p>
          <strong>Gabriel Alexander</strong> Teste de frontend
        </p>

        <div>GA</div>
      </UserInfoContainer>
    </Container>
  )
}

export const Header = memo((HeaderComponent));