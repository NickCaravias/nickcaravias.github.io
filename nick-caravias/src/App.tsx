import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="sticky top-0 w-full bg-green-700 p-5 shadow-lg flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white font-bold text-lg hover:bg-gray-200 hover:text-black p-2 rounded">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-bold text-lg hover:bg-gray-200 hover:text-black p-2 rounded">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white font-bold text-lg hover:bg-gray-200 hover:text-black p-2 rounded">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white font-bold text-lg hover:bg-gray-200 hover:text-black p-2 rounded">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;