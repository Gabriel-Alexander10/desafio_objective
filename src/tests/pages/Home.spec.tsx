import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useHeroesQuery } from '../../services/hooks/useHeroesCache';

import Home from '../../pages';
import React from 'react';
import { HeroesProvider } from '../../contexts/HeroesContext';
import { debug } from 'console';

jest.mock('../../services/hooks/useHeroesCache')

function renderHome() {
  return render(
    <HeroesProvider>
      <Home />
    </HeroesProvider>
  );
}

const heroes = [{
  id: "123",
  name: "John doe", 
  series: [{
    name: "serie 1",
    resourceURI: "serie 1"
  }],
  events: [{
    name: "event 1",
    resourceURI: "event 1"
  }], 
  thumbnail: [{
    name: "event 1",
    resourceURI: "event 1"
  }],
}];

const heroes2 = [{
  id: "123",
  name: "John doe 2", 
  series: [{
    name: "serie 1",
    resourceURI: "serie 1"
  }],
  events: [{
    name: "event 1",
    resourceURI: "event 1"
  }], 
  thumbnail: [{
    name: "event 1",
    resourceURI: "event 1"
  }],
}];

describe("Homepage", () => {
  
  it('renders correctly when data is loading', () => {
    const useHeroesQueryMocked = mocked(useHeroesQuery);

    useHeroesQueryMocked.mockReturnValue({
        data: {
          heroes: [],
          totalHeroes: 50,
        },
        isLoading: true,
    } as any);

    renderHome();

    expect(screen.getByAltText("Logo Objective")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("Carregando")).toBeInTheDocument();
  });

  it('renders correctly when data is loaded', () => {
    const useHeroesQueryMocked = mocked(useHeroesQuery);

    useHeroesQueryMocked.mockReturnValue({
        data: {
          heroes,
          totalHeroes: 50,
        },
        isLoading: false,
    } as any);

    renderHome();

    expect(screen.getByAltText("Logo Objective")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText(heroes[0].name)).toBeInTheDocument();
  });

  it('calls api with input value', async () => {
    const useHeroesQueryMocked = mocked(useHeroesQuery);

    useHeroesQueryMocked.mockImplementation((offset, string, opt) => {
      if (string === "A") {
        return {
          data: {
            heroes: heroes2,
            totalHeroes: 50,
          },
          isLoading: false,
        } as any;
      }

      return {
        data: {
          heroes,
          totalHeroes: 50,
        },
        isLoading: false,
      }
    });

    renderHome();

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "A" }});

    await waitFor(() => {
      expect(screen.getByText("John doe 2")).toBeInTheDocument();
    }, { timeout: 600 });
  });

  it('calls api with page value', async () => {
    const useHeroesQueryMocked = mocked(useHeroesQuery);

    useHeroesQueryMocked.mockImplementation((offset, string, opt) => {
      if (offset === 1) {
        return {
          data: {
            heroes: heroes2,
            totalHeroes: 50,
          },
          isLoading: false,
        } as any;
      }

      return {
        data: {
          heroes,
          totalHeroes: 50,
        },
        isLoading: false,
      }
    });

    renderHome();

    const button = screen.getByText("2");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("John doe 2")).toBeInTheDocument();
    }, { timeout: 600 });
  });

})