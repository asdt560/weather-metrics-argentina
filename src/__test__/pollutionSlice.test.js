import fetchMock from 'jest-fetch-mock';
import store from '../redux/configureStore';
import { getPollutionData } from '../redux/pollution/pollutionSlice';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('redux state tests', () => {
  it('Should initially set state to initial state', () => {
    const state = store.getState().pollutionReducer;
    expect(state).toEqual({
      loading: false,
      cities: [],
      error: '',
    });
  });
  it('get pollution data', async () => {
    const response = [{
      coord: {
        lon: -58.3772,
        lat: -34.6132,
      },
      list: [
        {
          main: {
            aqi: 3,
          },
          components: {
            co: 807.76,
            no: 5.7,
            no2: 42.5,
            o3: 131.61,
            so2: 12.04,
            pm2_5: 15.95,
            pm10: 19.15,
            nh3: 2.57,
          },
          dt: 1669319068,
        },
      ],
    }];
    fetch.mockResponse(JSON.stringify(response));
    const fetcher = await store.dispatch(getPollutionData());
    const result = fetcher.payload;
    const expected = [
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'Buenos Aires',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'Córdoba',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'Rosario',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'La Plata',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'Mar del Plata',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'Salta',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'San Miguel de Tucumán',
      },
      {
        0: {
          coord: {
            lat: -34.6132,
            lon: -58.3772,
          },
          list: [
            {
              components: {
                co: 807.76,
                nh3: 2.57,
                no: 5.7,
                no2: 42.5,
                o3: 131.61,
                pm10: 19.15,
                pm2_5: 15.95,
                so2: 12.04,
              },
              dt: 1669319068,
              main: {
                aqi: 3,
              },
            },
          ],
        },
        name: 'Santa Fe',
      },
    ];
    expect(result).toEqual(expected);
  });
});
