import '../css/_projects.css';
import SingleProject from '../minor_components/SingleProject';
import webpage from '../img/project-img/figma-replication.png';
import bgtapp from '../img/project-img/bgt-app.png';

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
            gitLink={'https://github.com/gitRaduZamfir/last-portfolio'}
            demoLink={'https://zamfir-dev.vercel.app/'}
          />
          <SingleProject
            webpage={bgtapp}
            title={'Budget App'}
            text={
              'My budget web app is an easy-to-use tool designed to help users manage their finances. With features like budget creation, item sorting, progress traking, users can keep a close eye on their spending habits. All user data is stored in Local Storage, but as this app is very flexible, there is possibility to add features like connecting to external database, adding diagrams, setting budget limits and alerts.  '
            }
            gitLink={'https://github.com/gitRaduZamfir/my-budget-app'}
            demoLink={'https://my-budget-app-eta.vercel.app/'}
          />
        </main>
      </section>
    </div>
  );
}

export default Projects;
