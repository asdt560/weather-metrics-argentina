import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getPollutionData } from '../redux/pollution/pollutionSlice';

const Pollution = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const citiespollution = useSelector((state) => state.pollutionReducer.cities);
  useEffect(() => {
    if (citiespollution.length === 0) {
      dispatch(getPollutionData());
    }
  });
  let filtered = citiespollution;
  if (search !== '') {
    // eslint-disable-next-line max-len
    filtered = citiespollution.filter((city) => city.name.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div>
      Pollution!
      <NavLink className="backlink" to="/">&lt;</NavLink>
      <div>
        <input
          placeholder="Find City..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {filtered.map((city) => {
        const { name } = city;
        return (
          <NavLink
            className="citydiv"
            key={uuidv4()}
            to={`/pollutiondetails/${name}`}
          >
            <p>
              {city.name}
            </p>
            <p>
              Air Quality Index:
              {' '}
              {city.list[0].main.aqi}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Pollution;
