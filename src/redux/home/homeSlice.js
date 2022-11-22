import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const cities = [
  'https://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=Cordoba,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=Rosario,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=La+Plata,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=Mar+del+Plata,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=Salta,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=San+Miguel+de+Tucuman,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
  'https://api.openweathermap.org/data/2.5/weather?q=Santa+Fe,ar&APPID=56b4f9108ee9c04db470ddaf8abcaea6',
];

const getWeatherData = createAsyncThunk('/getWeather', async () => {
  const weather = await Promise.all(cities.map(async (city) => {
    const resp = await fetch(city);
    return resp.json();
  }));
  return weather;
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    cities: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getWeatherData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      cities: action.payload,
    }));
    builder.addCase(getWeatherData.rejected, (state, action) => ({
      ...state,
      loading: false,
      cities: [],
      error: action.error.message,
    }));
  },
});

export default homeSlice.reducer;
export { getWeatherData };
