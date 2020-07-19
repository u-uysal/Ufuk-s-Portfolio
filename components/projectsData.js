import React from "react";
import { Carousel, Row, Col, Button, Container } from "react-bootstrap";
import Link from "next/link";
function ProjectsData() {
  const projectsInfo = [
    {
      id: 1,
      src: "/dance.png",
      alt: "A couple are dancing",
      projectName: "Dance With Me",
      sourceCodeLink: "https://github.com/Mert1980/DanceWithMe",
      liveModeLink: "https://hyf-class6-dancewithme.herokuapp.com/",
      intro:
        "Dance-With-Me application matches the users in accordance with their preferences (location, gender, age, weight and height) and show the events in which they can enjoy together.",
    },
    {
      id: 2,
      src: "/cards.png",
      alt: "Github interface",
      projectName: "Github Cards App",
      sourceCodeLink: "https://github.com/u-uysal/github-card-app",
      liveModeLink: "https://u-uysal.github.io/github-card-app/",
      intro:
        "Github cards app finds GitHub user according to user name by using Github API",
    },
    {
      id: 3,
      src: "/form.png",
      alt: "Sign up form",
      projectName: "React Form Validation",
      sourceCodeLink: "https://github.com/u-uysal/Form-Validation",
      liveModeLink: "https://u-uysal.github.io/Form-Validation/index.html",
      intro:
        "React Form Validation is an app that user inputs own information for a random application",
    },
  ];
  const infoComponent = projectsInfo.map((project) => (
    <Carousel.Item key={project.id}>
      <Row className="mb-5">
        <Col sm={6}>
          <img
            className="d-block w-100"
            style={{ width: "300px", height: "300px" }}
            src={project.src}
            alt={project.alt}
          />
        </Col>
        <Col
          sm={6}
          className="bg-secondary d-flex justify-content-center align-items-center"
        >
          <div className="">
            <h3 className="mb-3 text-light">{project.projectName}</h3>
            <p className="mb-3 text-light">{project.intro}</p>
            <a
              className="border border-white rounded p-2 mr-2 hover-button"
              href={project.sourceCodeLink}
              target="_blank"
            >
              View Source
            </a>
            <a
              className="border border-white rounded p-2 hover-button"
              href={project.liveModeLink}
              target="_blank"
            >
              Live Mode
            </a>
          </div>
        </Col>
      </Row>
    </Carousel.Item>
  ));

  return (
    <Container id="projects">
      <Carousel>{infoComponent}</Carousel>
    </Container>
  );
}

export default ProjectsData;
