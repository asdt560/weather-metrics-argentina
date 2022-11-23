import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWeatherData } from '../redux/weather/weatherSlice';
import { getPollutionData } from '../redux/pollution/pollutionSlice';

const Home = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weatherReducer.cities);
  const citiespollution = useSelector((state) => state.pollutionReducer.cities);
  console.log(citiespollution);
  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getWeatherData());
    }
    if (citiespollution.length === 0) {
      dispatch(getPollutionData());
    }
  });
  return (
    <main>
      <h1>Argentina Weather and Pollution Tracker</h1>
      <div>
        <NavLink to="/weather">
          Weather
        </NavLink>
        <NavLink to="/pollution">
          Air Pollution
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
