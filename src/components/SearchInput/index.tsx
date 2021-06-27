import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useHeroes } from '../../contexts/HeroesContext';
import { api } from '../../services/api';

import { Container } from './styles';

export function SearchInput() {
  const [inputSearch, setInputSearch] = useState('');
  
  const {
    heroesApiConfig,
    currentPage,
    handleSearch
  } = useHeroes();

  const debouncedSearch = async (text: string) => {
    handleSearch(text);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInputSearch = useCallback(
    debounce((text) => {
      debouncedSearch(text);
    }, 500)
  , [heroesApiConfig, currentPage]);

  useEffect(() => {
    handleInputSearch(inputSearch);
  }, [handleInputSearch, inputSearch]);

  return (
    <Container>
      <input
        placeholder="Search"
        type="text"
        value={inputSearch}
        onChange={e => setInputSearch(e.target.value)}
      />
      
      <MdSearch size={24} />
    </Container>
  )
}