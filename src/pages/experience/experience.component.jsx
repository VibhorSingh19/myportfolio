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
                    <strong className="body-title-style ">Automated Vending Machine</strong>
                    <br />
                    <strong>Role:</strong> Developer.
                    <br />
                    <strong>Description:</strong> <strong>Backend Software for a Vending Machine</strong> to perform tasks such as taking and dispensing order as well as promoting clean India Green India by providing various rewards to the customers for recycling order wastes, all in automated manner.

                    <br />
                    <strong>Technology:</strong> : MERN STACK (Mongo DB, Express js, React js, Node js)

                    <br />
                    <strong>Duration:</strong> JAN 2020 – Present
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
