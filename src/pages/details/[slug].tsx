/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useHeroes } from '../../hooks/HeroesContext';

import { Header } from '../../components/Header';
import { HeroAdventures } from '../../components/HeroAdventures';

import { IHero, IHeroesApiConfig } from '../../types/HeroesTypes';

import heroImg from '../../assets/teste.png';
import { Content, HeroInfo } from '../../styles/pages/Details';
import { generateApiConfig } from '../../services/apiConfigSSR';
import { api } from '../../services/api';



interface HomeProps {
  hero: IHero;
  apiConfig: IHeroesApiConfig;
}

export default function Details({ apiConfig, hero }: HomeProps) {
  const {
    handleUpdateCurrentHero,
    handleUpdateHeroesApiConfig
  } = useHeroes();

  const thumbURL = hero && hero.thumbnail.path + "/standard_medium." + hero.thumbnail.extension;

  useEffect(() => {
    // handleUpdateCurrentHero(hero);
    // handleUpdateHeroesApiConfig(apiConfig)
  }, []);

  return (
    <div>
      <Header isOnDetailsPage />

      {hero && (
        <Content>

          <div>
            <div>
              <img src={thumbURL} alt="" />
            </div>
            

            <HeroInfo>
              <strong>{hero && hero.name}</strong>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cumque nulla corporis labore tempore dolores facilis. Impedit id in sed praesentium consectetur voluptates quibusdam recusandae ea vel unde. Optio, soluta?</p> 
            </HeroInfo>
          </div>

          <main>
            <HeroAdventures 
              title="comics"
              infos={hero.comics} />

            <HeroAdventures 
              title="stories"
              infos={hero.stories} />

            <HeroAdventures
              title="series"
              infos={hero.series} />

            <HeroAdventures 
              title="events"
              infos={hero.events} />
          </main>

        </Content>
      )}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // poderia gerar as páginas dos heróis mais acessados previamente

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const { slug } = params;
  const apiConfig = generateApiConfig();

  const response = await api.get(`/characters/${slug}`, apiConfig);

  console.log(response.data.data.results[0].name);

  return {
    props: {
      apiConfig,
      hero: response.data.data.results[0],
    },
    revalidate: 5 * 60 * 60,
  }
}
