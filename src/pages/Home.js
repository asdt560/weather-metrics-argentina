import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWeatherData } from '../redux/weather/weatherSlice';
import { getPollutionData } from '../redux/pollution/pollutionSlice';
import weatherimg from '../assets/weatherimg.png';
import pollutionimg from '../assets/pollutionimg.png';

const Home = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weatherReducer.cities);
  const citiespollution = useSelector((state) => state.pollutionReducer.cities);
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
      <h1>Weather and Pollution Tracker</h1>
      <div className="linkscontainer">
        <NavLink className="navlink" to="/weather">
          <div className="linkdiv">
            <img className="linkimg" src={weatherimg} alt="Weather" />
            <h2 className="linktitle">Weather</h2>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/pollution">
          <div className="linkdiv">
            <img className="linkimg pol" src={pollutionimg} alt="Pollution" />
            <h2 className="linktitle">Air Pollution</h2>
          </div>
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
