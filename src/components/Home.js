import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWeatherData } from '../redux/home/homeSlice';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.homeReducer.cities);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getWeatherData());
    }
  });
  let filtered = cities;
  if (search !== '') {
    filtered = cities.filter((city) => city.name.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div>
      Home!
      <div>
        <input
          placeholder="Find City..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {filtered.map((city) => {
        const { name } = city;
        const link = '/'.concat(name.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
        return (
          <NavLink
            className="citydiv"
            key={city.id}
            to={link}
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

export default Home;
