import React, { useEffect } from 'react';
import { ImCompass } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWeatherData } from '../redux/home/homeSlice';

const BuenosAires = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.homeReducer.cities);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getWeatherData());
    }
  });
  const spin = (degree) => {
    const result = degree - 45;
    return result;
  };
  const city = cities.filter((city) => city.name === 'Buenos Aires');
  return (
    <div>
      {city.map((city) => (
        <div
          key={city.name}
        >
          <div className="topbar">
            <NavLink className="backlink" to="/">&lt;</NavLink>
            <h1>{city[0].name}</h1>
          </div>
          <h2>{city[0].weather[0].main}</h2>
          <ul className="infolist">
            <li>
              <div className="category">
                <p>Temperature</p>
                <p>
                  {Math.round((city[0].main.temp - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
              <div className="subelement">
                <p>Feels Like</p>
                <p>
                  {Math.round((city[0].main.feels_like - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
              <div className="subelement">
                <p>Minimal</p>
                <p>
                  {Math.round((city[0].main.temp_min - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
              <div className="subelement">
                <p>Maximal</p>
                <p>
                  {Math.round((city[0].main.temp_max - 273.15) * 10) / 10}
                  {' '}
                  {'\u2103'}
                </p>
              </div>
            </li>
          </ul>
          <div className="category">
            <p>Wind</p>
            <p>
              {city[0].wind.speed}
              {' '}
              m/s
            </p>
            {' '}
            <p>
              <ImCompass style={{ transform: `rotate(${spin(city[0].wind.deg)}deg)` }} />
            </p>
          </div>
          <div className="category">
            <p>Pressure</p>
            <p>
              {city[0].main.pressure}
              {' '}
              hPa
            </p>
          </div>
          <div className="category">
            <p>Humidity[0]</p>
            <p>
              {city[0].main.humidity}
              {' '}
              %
            </p>
          </div>
          <div className="category">
            <p>Visibility[0]</p>
            <p>
              {city[0].visibility[0] / 1000}
              {' '}
              km
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuenosAires;
