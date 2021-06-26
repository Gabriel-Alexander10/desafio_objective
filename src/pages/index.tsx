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

import { Container, Content, HeroesListContainer } from '../styles/pages/Home';
import { IHero, IHeroesApiConfig } from '../types/HeroesTypes';

interface HomeProps {
  apiHeroes: IHero[];
  apiConfig: IHeroesApiConfig;
  total: number;
}

export default function Home({ apiHeroes, apiConfig, total}: HomeProps) {
  const { 
    handleUpdateHeroes,
    handleUpdateHeroesApiConfig,
    handleUpdateCurrentPage,
    handleUpdateTotalHeroes
  } = useHeroes();

  useEffect(() => {
    handleUpdateHeroes(apiHeroes);
    handleUpdateHeroesApiConfig(apiConfig);

    handleUpdateTotalHeroes(total);

  // so quero executar uma vez
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const ts = Number(new Date());
  const md5Hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.NEXT_PUBLIC_API_KEY);

  const apiConfig = {
    params: {
      ts,
      hash: md5Hash,
    },
  };

  let response: AxiosResponse;
  
  try {
    response = await api.get('/characters', apiConfig);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      apiHeroes: response?.data.data.results ?? [],
      apiConfig: apiConfig,
      offset: 0,
      total: response?.data.data.total,
    },
  }
}
