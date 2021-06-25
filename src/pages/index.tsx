import React from 'react'
import { Header } from '../components/Header';
import { Heroes } from '../components/Heroes';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';

import { Container, Content, HeroesListContainer } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Search />

        <HeroesListContainer>
          <Heroes />
          
        </HeroesListContainer>

      </Content>

      <Pagination />
    </Container>
  )
}
