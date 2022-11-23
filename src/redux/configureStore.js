import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import weatherReducer from './weather/weatherSlice';
import pollutionReducer from './pollution/pollutionSlice';

const store = configureStore({
  reducer: {
    pollutionReducer,
    weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
