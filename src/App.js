import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import Projects from './components/projects-timeline/projects-timelines.component';
import Contact from './pages/contact-form/contact-form.component';
import Footer from './components/footer/footer.component';
//import Particles from "react-particles-js";
//import { particlesOptions } from "./particlesOptions";
const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
      
      <div>
        <Parallax blur={{ min: -1000, max: 1000 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-300}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
          </Container>
       
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
          </Container>
       
      </div>
      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
            <hr />
            <Projects/>
          </Slide>
          </Container>
       
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
            <hr />
            <Contact/>
          </Fade>
          </Container>
       
      </div>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
