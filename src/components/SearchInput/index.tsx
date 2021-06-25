import { AiOutlineSearch } from 'react-icons/ai';

import { Container } from './styles';

export function SearchInput() {
  return (
    <Container>
      <input placeholder="Search" type="text" />
      
      <AiOutlineSearch size={24} />
    </Container>
  )
}