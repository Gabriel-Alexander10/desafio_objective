import { GetServerSideProps } from 'next';
import md5 from 'md5';
import React, { useEffect } from 'react'
import { useHeroes } from '../hooks/HeroesContext';

import { Header } from '../components/Header';
import { Heroes } from '../components/Heroes';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';

import { api } from '../services/api';
import { AxiosResponse } from 'axios';

import { Content, HeroesListContainer } from '../styles/pages/Home';
import { IHero, IHeroesApiConfig } from '../types/HeroesTypes';
import { generateApiConfig } from '../services/apiConfigSSR';

interface HomeProps {
  apiHeroes: IHero[];
  apiConfig: IHeroesApiConfig;
  total: number;
}

export default function Home({ apiHeroes, apiConfig, total}: HomeProps) {
  const { 
    handleUpdateHeroes,
    handleUpdateHeroesApiConfig,
    handleUpdateTotalHeroes
  } = useHeroes();

  useEffect(() => {
    
    
    try {
      api.get('/characters', apiConfig).then(response => {
        const apiHeroes = response?.data.data.results ?? [];
        const total = response?.data.data.total;
        
        handleUpdateHeroes(apiHeroes);
        handleUpdateHeroesApiConfig(apiConfig);

        handleUpdateTotalHeroes(total);
      });

      console.log("Hello World!");
    } catch (err) {
      console.error(err);
    }

  // so quero executar uma vez
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const apiConfig = generateApiConfig();

  return {
    props: {
      apiConfig: apiConfig,
      offset: 0,
    },
  }
}
