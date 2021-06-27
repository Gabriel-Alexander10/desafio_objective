import { render, screen, fireEvent } from '@testing-library/react';
import lodash from 'lodash';
import { SearchInput } from '.';

describe("Search component", () => {
  it('renders correctly', () => {
    render(
      <SearchInput />
    );

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it('debounces', async () => {
    render(
      <SearchInput />
    );

    const spyDebounce = jest.spyOn(lodash, "debounce");

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: 'A' }});

    expect(spyDebounce).toBeCalledTimes(1);
  });
})