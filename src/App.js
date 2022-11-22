import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BuenosAires from './components/BuenosAires';
import Cordoba from './components/Cordoba';
import Laplata from './components/Laplata';
import Mardelplata from './components/Mardelplata';
import Salta from './components/Salta';
import Rosario from './components/Rosario';
import Santafe from './components/Santafe';
import Tucuman from './components/Tucuman';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buenosaires" element={<BuenosAires />} />
          <Route path="/cordoba" element={<Cordoba />} />
          <Route path="/laplata" element={<Laplata />} />
          <Route path="/rosario" element={<Rosario />} />
          <Route path="/santafe" element={<Santafe />} />
          <Route path="/salta" element={<Salta />} />
          <Route path="/mardelplata" element={<Mardelplata />} />
          <Route path="/sanmigueldetucuman" element={<Tucuman />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
