import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react'
import { useHeroes } from '../contexts/HeroesContext';

import { Header } from '../components/Header';
import { Heroes } from '../components/Heroes';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';

import { Content, HeroesListContainer } from '../styles/pages/Home';
import { IHeroesApiConfig } from '../types/HeroesTypes';

interface HomeProps {
  apiConfig: IHeroesApiConfig;
}

export default function Home({ apiConfig }: HomeProps) {
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
