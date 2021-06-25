
import { useHeroes } from '../../hooks/HeroesContext';
import { Hero } from '../Hero';
import { Table } from './styles';

export function Heroes() {
  const { heroes } = useHeroes();
  
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
        {heroes.length > 0 && heroes.map(hero => {
          return (
            <Hero key={hero.id} {...hero} />
          )
        })}
      </tbody>
    </Table>
  )
}