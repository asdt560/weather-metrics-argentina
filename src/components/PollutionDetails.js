import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getPollutionData } from '../redux/pollution/pollutionSlice';

const PollutionDetails = () => {
  const { cityname } = useParams();
  console.log(cityname);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.pollutionReducer.cities);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getPollutionData());
    }
  });
  console.log(cities);
  const city = cities.filter((city) => city.name === `${cityname}`);
  console.log(city);
  return (
    <div>
      {city.map((city) => (
        <div
          key={city.name}
        >
          <div className="topbar">
            <NavLink className="backlink" to="/pollution">&lt;</NavLink>
            <h1>{city.name}</h1>
          </div>
          <h2>
            <p>Air Quality Index:</p>
            <p>{city.list[0].main.aqi}</p>
          </h2>
          <div className="category">
            <p>Carbon Monoxide</p>
            <p>
              {city.list[0].components.co}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
          <div className="category">
            <p>Nitric Oxide</p>
            <p>
              {city.list[0].components.no}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
          <div className="category">
            <p>Nitrogen Dioxide</p>
            <p>
              {city.list[0].components.no2}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
          <div className="category">
            <p>Sulfur Dioxide</p>
            <p>
              {city.list[0].components.no2}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PollutionDetails;
