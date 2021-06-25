
import { Hero } from '../Hero';
import { Table } from './styles';

export function Heroes() {
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
        <Hero />

        <Hero />

        <Hero />
      </tbody>
    </Table>
  )
}