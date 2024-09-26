import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuildingPage from './pages/BuildingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BuildingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
