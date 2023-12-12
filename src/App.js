import './App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './component/Topbar';
import Footbar from './component/Footbar';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Register from './page/Register';
import Service from './page/Service';
import Team from './page/Team';

function App() {
  return (
    <div className="main-wrapper">
      <div id="preloader">
        <div class="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footbar />
      <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
}

export default App;
