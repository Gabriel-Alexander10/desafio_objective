import { SearchContainer } from "./styles";

import { SearchInput } from "../SearchInput";


export function Search() {
  return (
    <SearchContainer>
      <h1>
        Busca de personagens
      </h1>

      <strong>Nome do personagem</strong>

      <SearchInput />
    </SearchContainer>
  )
}