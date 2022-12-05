import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const cities = [
  {
    name: 'Buenos Aires',
    lon: '-58.3772',
    lat: '-34.6132',
  },
  {
    name: 'Córdoba',
    lon: '-64.1811',
    lat: '-31.4135',
  },
  {
    name: 'Rosario',
    lon: '-60.6393',
    lat: '-32.9468',
  },
  {
    name: 'La Plata',
    lon: '-57.9545',
    lat: '-34.9215',
  },
  {
    name: 'Mar del Plata',
    lon: '-57.5575',
    lat: '-38.0023',
  },
  {
    name: 'Salta',
    lon: '-65.4117',
    lat: '-24.7859',
  },
  {
    name: 'San Miguel de Tucumán',
    lon: '-65.2226',
    lat: '-26.8241',
  },
  {
    name: 'Santa Fe',
    lon: '-60.7',
    lat: '-31.6333',
  },
];

const getPollutionData = createAsyncThunk('/getPollution', async () => {
  const pollution = await Promise.all(cities.map(async (city) => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=56b4f9108ee9c04db470ddaf8abcaea6`);
    return resp.json();
  }));
  const result = [];
  pollution.forEach((item) => {
    const index = pollution.indexOf(item);
    result.push({
      ...item,
      name: cities[index].name,
    });
  });
  return result;
});

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState: {
    loading: false,
    cities: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getPollutionData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getPollutionData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      cities: action.payload,
    }));
    builder.addCase(getPollutionData.rejected, (state, action) => ({
      ...state,
      loading: false,
      cities: [],
      error: action.error.message,
    }));
  },
});

export default pollutionSlice.reducer;
export { getPollutionData };
