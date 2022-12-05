import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getPollutionData } from '../redux/pollution/pollutionSlice';

const PollutionDetails = () => {
  const { cityname } = useParams();
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.pollutionReducer.cities);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getPollutionData());
    }
  });
  const city = cities.filter((city) => city.name === `${cityname}`);
  const quality = (aqi) => {
    switch (aqi) {
      case 1:
        return '(Good)';
      case 2:
        return '(Fair)';
      case 3:
        return '(Moderate)';
      case 4:
        return '(Poor)';
      case 5:
        return '(Very Poor)';
      default:
        return '(Unknown)';
    }
  };
  return (
    <div>
      {city.map((city) => (
        <div
          key={city.name}
        >
          <div className="topbar">
            <NavLink className="backlink" to="/pollution">&lt;</NavLink>
            <h1 className="sectiontitle">{city.name}</h1>
          </div>
          <h2 className="aqi">
            <p>Air Quality Index:</p>
            <p>{city.list[0].main.aqi}</p>
            <p>{quality(city.list[0].main.aqi)}</p>
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
          <div className="category">
            <p>Ammonia</p>
            <p>
              {city.list[0].components.nh3}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
          <div className="category">
            <p>Ozone</p>
            <p>
              {city.list[0].components.o3}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
          <div className="category">
            <p>Coarse Particulate Matter</p>
            <p>
              {city.list[0].components.pm10}
              {' '}
              μg/m
              <sup>3</sup>
            </p>
          </div>
          <div className="category">
            <p>Fine Particulate Matter</p>
            <p>
              {city.list[0].components.pm2_5}
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
