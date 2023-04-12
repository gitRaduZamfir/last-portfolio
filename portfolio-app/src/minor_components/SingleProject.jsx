import { BsGithub } from 'react-icons/bs';
import '../css/_single_project.css';
import LinkButton from './LinkButton';
import { AiFillEye } from 'react-icons/ai';

function SingleProject({ title, text, webpage, gitLink, demoLink }) {
  return (
    <div className="single-project-container">
      <div className="content-container">
        <div className="project-img-container">
          <img src={webpage} alt="webpage-show" />
        </div>
        <div className="project-text-container">
          <div className="description-section">
            <h2 className="h2-title">{title}</h2>
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
    </div>
  );
}

export default SingleProject;
