
import { useEffect } from 'react';
import { useHeroes } from '../../hooks/HeroesContext';
import { useHeroesQuery } from '../../services/hooks/useHeroesCache';
import { Hero } from '../Hero';
import { Table } from './styles';

export function Heroes() {
  const {
    currentPage,
    handleUpdateTotalHeroes,
    handleUpdateHeroesApiConfig,
    handleUpdateHeroes,
    heroes
  } = useHeroes();

  const { isLoading, data } = useHeroesQuery(currentPage, undefined, {});

  useEffect(() => {
    if (!!data) {
      handleUpdateTotalHeroes(data.totalCount);
      handleUpdateHeroesApiConfig(data.apiConfig);
      handleUpdateHeroes(data.heroes);
    }
  }, [handleUpdateTotalHeroes, handleUpdateHeroesApiConfig, data]);
  
  return (
    <Table>
      <thead>
        <tr>
          <th>Personagem</th>

          <th>Séries</th>

          <th>Eventos</th>
        </tr>
      </thead>

      
      <tbody>
        {isLoading  ? (
            <tr>
              <td>
                Carregando
              </td>
              <td></td>
              <td></td>
            </tr>
          ): (
            <>
              {heroes.length > 0 && heroes.map(hero => {
                return (
                  <Hero key={hero.id} {...hero} />
                )
              })}
            </>
          )}
        </tbody>
    </Table>
  )
}