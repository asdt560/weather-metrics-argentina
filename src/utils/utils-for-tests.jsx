import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import weatherReducer from '../redux/weather/weatherSlice';
import pollutionReducer from '../redux/pollution/pollutionSlice';

const middlewares = [logger, thunk];

export default function renderWithProviders(
  ui,
  {
    // eslint-disable-next-line no-unused-vars
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        weatherReducer,
        pollutionReducer,
      },
    }, applyMiddleware(...middlewares)),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
