export type IHeroItemInfo = {
  available: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>
}

export interface IHeroesApiConfig {
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
  series: IHeroItemInfo;
  events: IHeroItemInfo;
  comics: IHeroItemInfo;
  stories: IHeroItemInfo;
}