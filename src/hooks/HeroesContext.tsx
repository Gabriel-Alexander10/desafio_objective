import { createContext, useCallback, useContext, useState } from 'react';

import { IHero, HeroesApiConfig } from '../types/HeroesTypes';

interface HeroesContextProps {
  heroes: IHero[];
  handleUpdateHeroes: (heroes: IHero[]) => void;
  heroesApiConfig: HeroesApiConfig;
  handleUpdateHeroesApiConfig: (apiConfig: HeroesApiConfig) => void;
}

const HeroesContext = createContext<HeroesContextProps>({} as HeroesContextProps);


export function HeroesProvider({  children }) {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [heroesApiConfig, setHeroesApiConfig] = useState<HeroesApiConfig>({} as HeroesApiConfig);

  const handleUpdateHeroes = useCallback((newHeroes: IHero[]) => {
    setHeroes(newHeroes);
  }, []);

  const handleUpdateHeroesApiConfig = useCallback((apiConfig: HeroesApiConfig) => {
    setHeroesApiConfig(apiConfig);
  }, []);

  return (
    <HeroesContext.Provider
      value={{ 
        heroes, 
        handleUpdateHeroes, 
        heroesApiConfig,
        handleUpdateHeroesApiConfig
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