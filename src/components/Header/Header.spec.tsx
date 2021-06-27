import { render, screen } from '@testing-library/react'
import { Header } from '.';

describe("Header component", () => {
  it('renders correctly', () => {
    render(
      <Header />
    );

    expect(screen.getByAltText("Logo Objective")).toBeInTheDocument();
  });

  it('renders Home arrow', () => {
    const { container } = render(
      <Header isOnDetailsPage />
    );

    expect(container.querySelector('header > div:nth-child(1) > a > svg')).toBeInTheDocument();
  });

})