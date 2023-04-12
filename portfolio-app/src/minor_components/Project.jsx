import { BsGithub } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import '../css/_single_project.css';
import LinkButton from './LinkButton';

function Project({ title, text, webpage, gitLink, demoLink }) {
  return (
    <div className="single-container">
      <div className="show-section">
        <img src={webpage} alt="figma-tmplt" />
      </div>
      <div className="description">
        <div className="project-text-section">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-section">
          <a href={gitLink} className="git-btn" target="_blanc">
            <span>Code</span>
            <LinkButton children={<BsGithub />} />
          </a>
          <a href={demoLink} className="demo-btn" target="_blanc">
            <span>Live Demo</span>
            <LinkButton children={<AiFillEye />} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
