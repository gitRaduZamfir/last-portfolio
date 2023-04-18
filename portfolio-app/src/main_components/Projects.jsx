import '../css/_projects.css';
import SingleProject from '../minor_components/SingleProject';
import webpage from '../img/project-img/figma-replication.png';

function Projects() {
  return (
    <div>
      <section className="projects-section">
        <header className="projects-header" id="projectsId">
          <h3>Portfolio</h3>
          <h2>A Showcase of My Frontend Development Path</h2>
        </header>
        <main className="projects-main">
          <SingleProject
            webpage={webpage}
            title={'Learning Platform'}
            text={
              "This webpage is designed with a clean and modern interface, making it easy for users to navigate and find the courses they're looking for. The platform utilizes the latest in web development technologies to ensure a smooth and seamless user experience. Explore the possibilities of an easy and comfortable online learning."
            }
          />
        </main>
      </section>
    </div>
  );
}

export default Projects;
