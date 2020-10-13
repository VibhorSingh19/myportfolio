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
const App = () => {
  return (
    <div >
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
    </div>
  );
}

export default App;
