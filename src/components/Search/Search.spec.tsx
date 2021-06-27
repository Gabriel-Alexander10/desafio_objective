import { render, screen } from '@testing-library/react'
import { Search } from '.';

describe("Search component", () => {
  it('renders correctly', () => {
    render(
      <Search />
    );

    expect(screen.getByText("Busca de personagens")).toBeInTheDocument();
    expect(screen.getByText("Nome do personagem")).toBeInTheDocument();
  });
})