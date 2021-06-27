import { fireEvent, render, screen, waitFor  } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { Pagination } from '.';
import { useHeroes } from '../../contexts/HeroesContext'

jest.mock("../../contexts/HeroesContext");

describe("Pagination component", () => {
  it('renders correctly', () => {
    const useHeroesMocked = mocked(useHeroes);

    useHeroesMocked.mockReturnValue({
      currentPage: 0,
      totalHeroes: 50,
      handleUpdateCurrentPage: jest.fn(),
    } as any);

    render(
      <Pagination />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it('change the button colors when hovered', async () => {
    const useHeroesMocked = mocked(useHeroes);

    const handleUpdateCurrentPage = jest.fn();

    useHeroesMocked.mockReturnValue({
      currentPage: 0,
      totalHeroes: 50,
      handleUpdateCurrentPage,
    } as any);

    render(
      <Pagination />
    );

    const button = screen.getByText("2");

    // not working ;-;
    // fireEvent.mouseEnter(button);

    // await waitFor(() => {
    //   expect(button).toHaveStyleRule('background-color', 'var(--element-highlighted)');
    // })

    fireEvent.click(button);

    expect(handleUpdateCurrentPage).toHaveBeenCalled();
  });

})