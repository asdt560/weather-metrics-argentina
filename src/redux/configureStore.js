import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
