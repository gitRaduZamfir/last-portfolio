import './App.css';
import Home from './main_components/Home';
import About from './main_components/About';
import Projects from './main_components/Projects';
import Contacts from './main_components/Contacts';
import Navbar from './main_components/Navbar';
import Footer from './main_components/Footer';

function App() {
  const scrollHandler = (elementId) => {
    const element = document.getElementById(`${elementId}`);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar scroll={scrollHandler} />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
