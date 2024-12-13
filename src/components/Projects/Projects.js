import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tipdriver from "../../Assets/Projects/tipdriver.png";

import uscis from "../../Assets/Projects/uscis.png";
import petsok from "../../Assets/Projects/petsok.gif"; // Добавьте этот импорт

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card petsok-col">
            <style>
              {`
                .petsok-col img.card-img-top {
                  max-height: 400px;
                  height: auto;
                  width: auto;
                  object-fit: contain;
                  display: block;
                  margin: 0 auto;
                }
              `}
            </style>
            <ProjectCard
              imgPath={petsok}
              isBlog={true}
              title="PetsOk"
              description="An online marketplace for pet boarding services, connecting pet owners with reliable hosts. This project included developing the backend, building mobile applications, and implementing real-time chat with WebSockets. I also optimized animations using React Native’s Animated library, improving performance and user experience. PetsOk streamlines booking processes and ensures a secure, convenient environment for pet care."

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipdriver}
              isBlog={false}
              title="Tipdriver"
              description="A platform designed for effortless tipping for drivers, Tipdriver is fully launched and in production. It features a responsive website, mobile applications, and a robust backend to ensure a seamless user experience. This solution simplifies the process of rewarding drivers, enhancing customer satisfaction and encouraging better service."
              demoLink="https://tipdriver.me"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uscis}
              isBlog={true}
              title="USCIS Case Tracker"
              description="A mobile application and backend solution that aggregates U.S. immigration case status data from open sources. Implemented a neural network to solve complex CAPTCHAs, utilizing a network of proxies and caching to handle large-scale requests efficiently. Currently serving over 10,000 users, the app provides real-time updates, analytics, and insights into immigration case processing times."

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
