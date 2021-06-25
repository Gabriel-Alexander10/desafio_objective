import React from 'react'
import { Header } from '../components/Header';
import { Heroes } from '../components/Heroes';
import { Search } from '../components/Search';

import { Container, HeroesListContainer } from '../styles/pages/Home';

export default function Home() {
  return (
    <div>
      <Header />

      <Container>
        <Search />

        <HeroesListContainer>
          <Heroes />
          
        </HeroesListContainer>

      </Container>
    </div>
  )
}
