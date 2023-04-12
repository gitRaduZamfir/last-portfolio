import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './main_components/Navbar';
import Home from './main_components/Home';
import About from './main_components/About';
import Projects from './main_components/Projects';
import Contacts from './main_components/Contacts';
import Footer from './main_components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
