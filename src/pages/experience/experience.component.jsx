import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import "./experience.style.css";


const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Developer</Card.Title>
                </div>
                <div>
              
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Smart Kaksha Project</strong>
                    <br />
                    <strong>Company: IBM.</strong>
                    <br />
                    
                    <strong>Role:</strong> Developer.
                    <br />
                    <strong>Description:</strong> <strong>Developing a robust backend with Node.js</strong>  and MySQL.Contribute to the development of REST APIs in Node.js and online learning application with the React

                    <br />
                    <strong>Technology:</strong> : MERN STACK (Mongo DB, Express js, React js, Node js)

                    <br />
                    <strong>Duration:</strong> 02/2021 - 05/202
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      {/* Unigov
Job Description: Developing a social management platform which replicates the institutional 
activities and provides 360-degree services to an individual on an online platform.
Creating reusable React Native components and performing bug fixes.
Duration: June1st, 2021 – July 31st, 2021 */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Mobile Application Developer</Card.Title>
                </div>
                <div>
             
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Unigov Mobile</strong>
                    <br />
                    <strong>Company: One For Life</strong>
                    <br />
                    
                    <strong>Role:</strong> Developer.
                    <br />
                    <strong>Description:</strong> <strong>Developing a social management platform which replicates the institutional activities</strong> and provides 360-degree services to an individual on an online platform.Creating reusable React Native components and performing bug fixes.

                    <br />
                    <strong>Technology:</strong> : React Native, Redux, Aws-Amplify.

                    <br />
                    <strong>Duration:</strong> June 1st, 2021 – July 31st, 2021

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Experience;
