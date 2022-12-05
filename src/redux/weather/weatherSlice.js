import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getWeatherData = createAsyncThunk('/getWeather', async () => {
  const resp = await fetch('https://api.openweathermap.org/data/2.5/group?id=3435910,3860259,3838583,3432043,3430863,3838233,3836873,3836277&units;=metric&appid=56b4f9108ee9c04db470ddaf8abcaea6');
  const data = resp.json();
  return data;
});

const weatherSlice = createSlice({
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

export default weatherSlice.reducer;
export { getWeatherData };
