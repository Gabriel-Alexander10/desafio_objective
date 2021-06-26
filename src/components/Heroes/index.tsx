
import { useEffect } from 'react';
import { useHeroes } from '../../contexts/HeroesContext';
import { useHeroesQuery } from '../../services/hooks/useHeroesCache';
import useWindowDimensions from '../../services/hooks/useWindowDimensions';
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
  const size = useWindowDimensions();

  useEffect(() => {
    if (!!data) {
      handleUpdateTotalHeroes(data.totalCount);
      handleUpdateHeroesApiConfig(data.apiConfig);
      handleUpdateHeroes(data.heroes);
    }
  }, [handleUpdateTotalHeroes, handleUpdateHeroesApiConfig, data, handleUpdateHeroes]);
  
  return (
    <Table>
      <thead>
        <tr>
          <th>Personagem</th>

          {size.width >= 700 && (
            <>
              <th>Séries</th>

              <th>Eventos</th>
            </>
          )}
        </tr>
      </thead>

      
      <tbody>
        {isLoading  ? (
            <tr>
              <td>
                Carregando
              </td>
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