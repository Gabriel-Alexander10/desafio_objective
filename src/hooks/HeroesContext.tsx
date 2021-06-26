import { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

import { IHero, IHeroesApiConfig } from '../types/HeroesTypes';

interface HeroesContextProps {
  heroes: IHero[];
  handleUpdateHeroes: (heroes: IHero[]) => void;
  heroesApiConfig: IHeroesApiConfig;
  handleUpdateHeroesApiConfig: (apiConfig: IHeroesApiConfig) => void;
  totalHeroes: number;
  handleUpdateTotalHeroes: (total: number) => void;
  currentPage: number;
  handleUpdateCurrentPage: (pageNumber: number) => void;
  currentHero: IHero;
  handleUpdateCurrentHero: (hero: IHero) => void;
}

const HeroesContext = createContext<HeroesContextProps>({} as HeroesContextProps);


export function HeroesProvider({  children }) {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [heroesApiConfig, setHeroesApiConfig] = useState<IHeroesApiConfig>({} as IHeroesApiConfig);
  const [currentHero, setCurrentHero] = useState<IHero>({} as IHero);

  const [totalHeroes, setTotalHeroes] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);


  const handleUpdateHeroes = useCallback((newHeroes: IHero[]) => {
    setHeroes(newHeroes);
  }, []);

  const handleUpdateHeroesApiConfig = useCallback((apiConfig: IHeroesApiConfig) => {
    console.log("atualizer para", apiConfig);

    setHeroesApiConfig(apiConfig);
  }, []);

  const handleUpdateCurrentHero = useCallback((hero: IHero) => {
    setCurrentHero(hero);
  }, []);

  const handleUpdateTotalHeroes = useCallback((total: number) => {
    setTotalHeroes(total);
  }, []);

  const handleUpdateCurrentPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);

    api.get('/characters', {
      params: {
        ...heroesApiConfig.params,
        offset: pageNumber * 10,
      }
    }).then(response => {
      setHeroes(response?.data.data.results);
    })
  }, [heroesApiConfig]);

  return (
    <HeroesContext.Provider
      value={{ 
        heroes, 
        handleUpdateHeroes, 
        heroesApiConfig,
        handleUpdateHeroesApiConfig,
        totalHeroes,
        handleUpdateTotalHeroes,
        currentPage,
        handleUpdateCurrentPage,
        currentHero,
        handleUpdateCurrentHero,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
}

export const useHeroes = () => {
  const context = useContext(HeroesContext);

  return context;
}