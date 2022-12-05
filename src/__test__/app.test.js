import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import renderWithProviders from '../utils/utils-for-tests';

describe('home page tests', () => {
  it('home render', () => {
    renderWithProviders(<App />);

    const title = screen.getByText(/Weather and Pollution Tracker/);
    expect(title).toBeInTheDocument();
  });
  it('go to weather', () => {
    renderWithProviders(<App />);

    const weather = screen.getByAltText('Weather');
    fireEvent.click(weather);

    const title = screen.getByText(/Weather Data/);
    expect(title).toBeInTheDocument();
  });
  it('go to pollution', () => {
    renderWithProviders(<App />);

    const back = screen.getByText(/</);
    fireEvent.click(back);
    const pollution = screen.getByAltText('Pollution');
    fireEvent.click(pollution);

    const title = screen.getByText(/Pollution Data/);
    expect(title).toBeInTheDocument();
  });
});
