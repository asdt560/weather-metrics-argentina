import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWeatherData } from '../redux/weather/weatherSlice';

const Weather = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weatherReducer.cities);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getWeatherData());
    }
  });
  let filtered = cities.list;
  if (search !== '') {
    // eslint-disable-next-line max-len
    filtered = cities.list.filter((city) => city.name.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div>
      <div className="topbar">
        <NavLink className="backlink" to="/">&lt;</NavLink>
        <h1 className="sectiontitle">Weather Data</h1>
      </div>
      <div>
        <input
          className="searchbar"
          placeholder="Find City..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {filtered?.map((city) => {
        const { name } = city;
        return (
          <NavLink
            className="citydiv navlink"
            key={city.id}
            to={`/weatherdetails/${name}`}
          >
            <p>
              {city.name}
            </p>
            <p>
              {Math.round((city.main.temp - 273.15) * 10) / 10}
              {' '}
              {'\u2103'}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Weather;
