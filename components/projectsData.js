import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import projectsInfo from "./projectsInfo";
import { AiFillGithub } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
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
          id="carouselPart"
          sm={6}
          className=" d-flex justify-content-center align-items-center"
        >
          <div className="">
            <h3 className="text-center mb-3">{project.projectName}</h3>
            <p className="text-center mb-5">{project.intro}</p>
            <div className=" d-flex justify-content-center align-items-center">
              <a
                target="_blank"
                className="mr-3"
                style={{ color: "#fff" }}
                href={project.sourceCodeLink}
              >
                <AiFillGithub size="3rem" />
              </a>
              <a
                target="_blank"
                style={{ color: "#fff" }}
                href={project.liveModeLink}
              >
                <BsEye color="#fff" size="3rem" />
              </a>
            </div>
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
