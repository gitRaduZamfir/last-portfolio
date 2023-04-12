import '../css/_projects.css';
import Project from '../minor_components/Project';
import figma from '../img/project-img/figma-replication.png';

function Projects() {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="project-text">
          <h3>Portfolio</h3>
          <h2>A Showcase of My Frontend Development Path</h2>
        </div>
        <div className="all-projects">
          <Project
            title={'title'}
            text={
              'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.'
            }
            webpage={figma}
            gitLink={
              'https://github.com/gitRaduZamfir/figma-template-replicate'
            }
            demoLink={
              'https://figma-template-replicate-pwiw-67d41nmit-gitraduzamfir.vercel.app/'
            }
          />
        </div>
        <div className="project"></div>
      </div>
    </div>
  );
}

export default Projects;
