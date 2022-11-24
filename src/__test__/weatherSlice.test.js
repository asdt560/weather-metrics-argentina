import fetchMock from 'jest-fetch-mock';
import store from '../redux/configureStore';
import { getWeatherData } from '../redux/weather/weatherSlice';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('redux state tests', () => {
  it('Should initially set state to initial state', () => {
    const state = store.getState().weatherReducer;
    expect(state).toEqual({
      loading: false,
      cities: [],
      error: '',
    });
  });
  it('get weather data', async () => {
    const response = [{
      coord: {
        lon: -58.3772,
        lat: -34.6132,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      base: 'stations',
      main: {
        temp: 308.02,
        feels_like: 307.07,
        temp_min: 306.44,
        temp_max: 311.09,
        pressure: 1010,
        humidity: 27,
        sea_level: 1010,
        grnd_level: 1007,
      },
      visibility: 10000,
      wind: {
        speed: 2.94,
        deg: 31,
        gust: 5.3,
      },
      clouds: {
        all: 2,
      },
      dt: 1669319244,
      sys: {
        type: 2,
        id: 2008409,
        country: 'AR',
        sunrise: 1669278953,
        sunset: 1669329894,
      },
      timezone: -10800,
      id: 3435910,
      name: 'Buenos Aires',
      cod: 200,
    }];
    fetch.mockResponse(JSON.stringify(response));
    const fetcher = await store.dispatch(getWeatherData());
    const result = fetcher.payload;
    const expected = [
      {
        base: 'stations',
        clouds: {
          all: 2,
        },
        cod: 200,
        coord: {
          lat: -34.6132,
          lon: -58.3772,
        },
        dt: 1669319244,
        id: 3435910,
        main: {
          feels_like: 307.07,
          grnd_level: 1007,
          humidity: 27,
          pressure: 1010,
          sea_level: 1010,
          temp: 308.02,
          temp_max: 311.09,
          temp_min: 306.44,
        },
        name: 'Buenos Aires',
        sys: {
          country: 'AR',
          id: 2008409,
          sunrise: 1669278953,
          sunset: 1669329894,
          type: 2,
        },
        timezone: -10800,
        visibility: 10000,
        weather: [
          {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        ],
        wind: {
          deg: 31,
          gust: 5.3,
          speed: 2.94,
        },
      },
    ];
    expect(result).toEqual(expected);
  });
});
