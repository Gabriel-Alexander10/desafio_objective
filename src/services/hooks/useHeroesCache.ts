import { useQuery, UseQueryOptions } from "react-query";
import { IHero, IHeroesApiConfig } from "../../types/HeroesTypes";
import { api, myApi } from "../api";

type GetHeroesResponse = {
	totalCount: number;
	heroes: IHero[];
  apiConfig: IHeroesApiConfig;
}

export async function getHeroes(page: number, nameStartsWith: string): Promise<GetHeroesResponse> {
  const response = await myApi.get<IHeroesApiConfig>('/heroesHash');
  const apiConfig = {
    params: {
      ...response.data.params,
      offset: page * 10,
      nameStartsWith,
    }
  }

  const { data } = await api.get('/characters', apiConfig);

	const totalCount = data.data.total;

	const heroes = data.data.results.map(hero => {
			return {
        id: hero.id,
        description: hero.description,
        name: hero.name,
        thumbnail: hero.thumbnail,
        series: hero.series.available >= 4 ? hero.series.items.slice(0, 4) : hero.series.items,
        events: hero.events.available >= 4 ? hero.events.items.slice(0, 4) : hero.events.items,
        comics: hero.comics.available >= 4 ? hero.comics.items.slice(0, 4) : hero.comics.items,
        stories: hero.stories.available >= 4 ? hero.stories.items.slice(0, 4) : hero.stories.items,
			}
	});

	return {
		heroes,
		totalCount,
    apiConfig,
	};
}

export const useHeroesQuery = (page: number = 0, nameStartsWith: string = undefined,  _options: UseQueryOptions) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(['heroes', page], () => getHeroes(page, nameStartsWith), {
    staleTime:  1000 * 60 * 60 * 24, // 24 hours
  })
}