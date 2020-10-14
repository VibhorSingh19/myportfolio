import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.webp'
import './about.style.css'
import Button from 'react-bootstrap/Button'
const About = () => {
  return (
    <div id='about'>
      <h1 className="pt-3 text-center font-details pb-3">About me</h1>
      <Container>
         <Row className="pt-3 pb-5 align-items-center">
            {/*Profile Pic*/}
            <Col xs={12} md={6}>
             <Row className="justify-content-center mb-2 mr-2">
              <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
             </Row>
            </Col>
            {/*About me*/}
            <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                 Hi there! I am <strong>&nbsp;Vibhor Singh</strong>
                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack. Finding the opportunity to work in a fun and challenging working environment that will encourage me to improve and learn new and necessary skills and get advance in the software engineering industry.
                <br />
                <br />
                </Row>
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                 <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a >
                      <Button href="https://drive.google.com/file/d/1vKtlRsDGvHeKdtOKPq1VvA2ZPcWTcwwB/view?usp=sharing"className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                   <a >
                      <Button href="https://github.com/VibhorSingh19" className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/vibhor-singh-43539a186/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
                </Row>
            </Col>
         </Row>
      </Container>
    </div>
  );
}

export default About;
