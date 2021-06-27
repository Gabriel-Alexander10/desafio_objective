import React, { useEffect } from 'react'

import { Header } from '../components/Header';
import { Heroes } from '../components/Heroes';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';

import { Content, HeroesListContainer } from '../styles/pages/Home';

export default function Home() {
  return (
    <div>
      <Header />

      <Content>
        <Search />

        <HeroesListContainer>
          <Heroes />
          
        </HeroesListContainer>

      </Content>

      <Pagination />
    </div>
  )
}
