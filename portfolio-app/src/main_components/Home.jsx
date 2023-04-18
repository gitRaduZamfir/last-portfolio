import LinkButton from '../minor_components/LinkButton';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import html from '../img/html.png';
import css from '../img/css.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import tailwind from '../img/tailwind.png';
import git from '../img/git.png';
import sass from '../img/sass.png';
import '../css/_home.css';
import TechIcon from '../minor_components/TechIcon';

function Home() {
  return (
    <div className="home" id="homeId">
      <div className="gridLg">
        <div className="textBox">
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I am Radu. A husband, father, retired Dentist and future
            Front-End Developer.
          </p>
          <div className="btnSection">
            <a
              href="https://www.linkedin.com/in/radu-zamfir-713788271/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkButton children={<BsLinkedin />} color={'#0B5FA2'} />
            </a>
            <a
              href="https://github.com/gitRaduZamfir"
              target="-blanc"
              rel="noreferrer"
            >
              <LinkButton children={<BsGithub />} color={'#000000'} />
            </a>
          </div>
        </div>
        <div className="imgContainer">
          <div className="imgBox"></div>
        </div>
      </div>
      <div className="tech">
        <span className="technologies">Technologies</span>
        <div className="techIcons">
          <TechIcon src={html} alt={'html-icon'} />
          <TechIcon src={css} alt={'css-logo'} />
          <TechIcon src={javascript} alt={'javascript-logo'} />
          <TechIcon src={react} alt={'react-logo'} />
          <TechIcon src={tailwind} alt={'tailwind-logo'} />
          <TechIcon src={sass} alt={'sass-logo'} />
          <TechIcon src={git} alt={'git-logo'} />
        </div>
      </div>
    </div>
  );
}

export default Home;
