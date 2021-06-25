type HeroEvents = {
  available: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>
}

type HeroSeries = {
  available: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>
}

export interface HeroesApiConfig {
  params: {
    ts: string;
    hash: string;
  }
}

export interface IHero {
  id: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: HeroSeries;
  events: HeroEvents;
}