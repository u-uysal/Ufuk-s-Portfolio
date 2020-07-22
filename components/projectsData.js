import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import projectsInfo from "./projectsInfo";

function ProjectsData(props) {
  console.log(props);
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
