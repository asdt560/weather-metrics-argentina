import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import WeatherDetails from './pages/WeatherDetails';
import Home from './pages/Home';
import Pollution from './pages/Pollution';
import PollutionDetails from './pages/PollutionDetails';
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
