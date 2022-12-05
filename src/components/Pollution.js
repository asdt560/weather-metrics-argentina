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
      <div className="topbar">
        <NavLink className="backlink" to="/">&lt;</NavLink>
        <h1 className="sectiontitle">Pollution Data</h1>
      </div>
      <div>
        <input
          className="searchbar"
          placeholder="Find City..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {filtered.map((city) => {
        const { name } = city;
        return (
          <NavLink
            className="citydiv navlink"
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
