export type IHeroItemInfo = {
  available: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>
}

type ApiConfig = {
  offset?: number; // page number * 10
  nameStartsWith?: string;
  limit: number;
  ts: number;
  hash: string
}

export interface IHeroesApiConfig {
  params: ApiConfig;
}

export interface IHero {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: IHeroItemInfo;
  events: IHeroItemInfo;
  comics: IHeroItemInfo;
  stories: IHeroItemInfo;
}