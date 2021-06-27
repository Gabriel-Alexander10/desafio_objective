import { render, screen } from '@testing-library/react'
import { Header } from '.';

describe("Header component", () => {
  it('renders correctly', () => {
    render(
      <Header />
    );

    screen.logTestingPlaygroundURL();

    expect(screen.getByAltText("Logo Objective")).toBeInTheDocument();
  });

  it('renders Home arrow', () => {
    const { container } = render(
      <Header isOnDetailsPage />
    );

    expect(container.querySelector('header > div:nth-child(1) > a > svg')).toBeInTheDocument();
  });

})