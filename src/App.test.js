import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders Header component', () => {
    render(<App />, { wrapper: MemoryRouter });

    const headerElement = screen.getByAltText('AllicaBank');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders CharactersList component for / route', () => {
    render(<App />, { wrapper: MemoryRouter });

    const charactersListHeader = screen.getByText(/Character List/i);
    expect(charactersListHeader).toBeInTheDocument();
  });

  test('renders CharactersList component for /characters route', () => {
    render(<App />, { wrapper: MemoryRouter, initialEntries: ['/characters'] });

    const charactersListHeader = screen.getByText(/Character List/i);
    expect(charactersListHeader).toBeInTheDocument();
  });
});
