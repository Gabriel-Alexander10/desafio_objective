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
  search: string;
  handleSearch: (search: string) => void;
}

const HeroesContext = createContext<HeroesContextProps>({} as HeroesContextProps);


export function HeroesProvider({  children }) {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [heroesApiConfig, setHeroesApiConfig] = useState<IHeroesApiConfig>({} as IHeroesApiConfig);

  const [totalHeroes, setTotalHeroes] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");


  const handleUpdateHeroes = useCallback((newHeroes: IHero[]) => {
    setHeroes(newHeroes);
  }, []);

  const handleUpdateHeroesApiConfig = useCallback((apiConfig: IHeroesApiConfig) => {
    setHeroesApiConfig(apiConfig);
  }, []);

  const handleUpdateTotalHeroes = useCallback((total: number) => {
    setTotalHeroes(total);
  }, []);

  const handleUpdateCurrentPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
  }, []);

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
        search,
        handleSearch
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