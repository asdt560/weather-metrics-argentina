import React, { useEffect } from 'react';
import { ImCompass } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getWeatherData } from '../redux/weather/weatherSlice';

const WeatherDetails = () => {
  const { cityname } = useParams();
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weatherReducer.cities);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getWeatherData());
    }
  });
  const spin = (degree) => {
    const result = degree - 45;
    return result;
  };
  const city = cities.list.filter((city) => city.name === `${cityname}`);
  return (
    <div>
      {city.map((city) => (
        <div
          key={city.name}
        >
          <div className="topbar">
            <NavLink className="backlink" to="/weather">&lt;</NavLink>
            <h1 className="sectiontitle">{city.name}</h1>
          </div>
          <h2 className="weathersummary">
            <p className="leftweather">Weather:</p>
            <p className="centerweather">{city.weather[0].main}</p>
          </h2>
          <ul className="infolist">
            <li>
              <div className="category">
                <p>Temperature</p>
                <p>
                  {Math.round((city.main.temp - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
              <div className="subelement">
                <p>Feels Like</p>
                <p>
                  {Math.round((city.main.feels_like - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
              <div className="subelement">
                <p>Minimal</p>
                <p>
                  {Math.round((city.main.temp_min - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
              <div className="subelement">
                <p>Maximal</p>
                <p>
                  {Math.round((city.main.temp_max - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
            </li>
          </ul>
          <div className="category">
            <p>Wind</p>
            <p>
              {city.wind.speed}
              {' '}
              m/s
            </p>
            {' '}
            <p>
              <ImCompass style={{ transform: `rotate(${spin(city.wind.deg)}deg)` }} />
            </p>
          </div>
          <div className="category">
            <p>Pressure</p>
            <p>
              {city.main.pressure}
              {' '}
              hPa
            </p>
          </div>
          <div className="category">
            <p>Humidity</p>
            <p>
              {city.main.humidity}
              {' '}
              %
            </p>
          </div>
          <div className="category">
            <p>Visibility</p>
            <p>
              {city.visibility / 1000}
              {' '}
              km
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
