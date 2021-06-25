import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export function SearchInput() {
  return (
    <Container>
      <input placeholder="Search" type="text" />
      
      <MdSearch size={24} />
    </Container>
  )
}