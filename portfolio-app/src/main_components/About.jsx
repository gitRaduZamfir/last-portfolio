import '../css/_about.css';
import desk from '../img/desk.jpg';

function About() {
  return (
    <div className="about" id="aboutId">
      <div className="about-container">
        <section className="about-section">
          <div className="img-box">
            <img src={desk} alt="desk-img" className="img-desk" />
          </div>
          <div className="text-box">
            <h3>About me</h3>
            <h2>Passionate and Detail-Oriented Junior Frontend Developer </h2>
            <p>
              As a junior frontend React developer, I am passionate about
              creating intuitive and visually appealing web applications using
              modern technologies. I am constantly expanding my skills and
              knowledge in writing clean, maintainable code that is easy to
              understand and modify. I am excited to have the opportunity to
              join your team and make meaningful contributions to the
              development of your projects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
