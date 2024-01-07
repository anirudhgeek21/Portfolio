import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Banner from './components/Landing_banner/Banner';
import Aniflix from './components/Projects/Aniflix/Aniflix'

function App() {
  return (
    <div className="App ">
    <Router>
      <Navbar />
      <Banner />
      <Aniflix />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
