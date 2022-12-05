import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';
import Home from './components/Home';
import Pollution from './components/Pollution';
import PollutionDetails from './components/PollutionDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weatherdetails/:cityname" element={<WeatherDetails />} />
          <Route path="/pollutiondetails/:cityname" element={<PollutionDetails />} />
          <Route path="/pollution" element={<Pollution />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
