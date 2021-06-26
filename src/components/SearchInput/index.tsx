import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useHeroes } from '../../hooks/HeroesContext';
import { api } from '../../services/api';

import { Container } from './styles';

export function SearchInput() {
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(0);
  
  const { heroesApiConfig, handleUpdateHeroes, currentPage } = useHeroes();

  const debouncedSearch = async (text: string) => {
    const config = !text.trim() ? { 
      params: {
        ...heroesApiConfig.params,
        offset: (currentPage) * 10,
    }}: {
      params: {
        ...heroesApiConfig.params,
        nameStartsWith: text,
      }
    };

    try {
      const response = await api.get('/characters', config);

      handleUpdateHeroes(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (!search.trim() && searched == 0) {
      return;
    }
    
    handleSearch(search);
    setSearched(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((search) => {
      debouncedSearch(search);
    }, 500)
  , [heroesApiConfig, currentPage]);

  return (
    <Container>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      
      <MdSearch size={24} />
    </Container>
  )
}