/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { HeroAdventures } from '../../components/HeroAdventures';

import { IHero } from '../../types/HeroesTypes';

import { Content, HeroInfo } from '../../styles/pages/Details';
import { generateApiConfig } from '../../services/apiConfigSSR';
import { api } from '../../services/api';
interface HomeProps {
  hero: IHero;
}

export default function Details({ hero }: HomeProps) {
  const thumbURL = hero && hero.thumbnail.path + "/standard_medium." + hero.thumbnail.extension;

  return (
    <div>
      <Head>
        <title>Desafio Objective | Details</title>
      </Head>
      <Header isOnDetailsPage />

      {hero && (
        <Content>

          <div>
            <div>
              <img src={thumbURL} alt={hero.name} />
            </div>
            

            <HeroInfo>
              <strong>{hero && hero.name}</strong>

              <p>{!!hero.description ? hero.description : "O herói não possui descrição"}</p> 
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

  const responseHero = response.data.data.results[0]

  return {
    props: {
      hero: {
        id: responseHero.id,
        description: responseHero.description,
        name: responseHero.name,
        thumbnail: responseHero.thumbnail,
        series: responseHero.series.items,
        events: responseHero.events.items,
        comics: responseHero.comics.items,
        stories: responseHero.stories.items,
      },
    },
    revalidate: 5 * 60 * 60,
  }
}
