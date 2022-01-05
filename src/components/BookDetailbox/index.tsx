import BookLoading from "@components/BookLoading";
import ProjectSlider from "@components/ProjectSlider";
import projectData from "@utils/json/projectData";
import React, { FC, useCallback, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { BookInfoWrapper, Container, Section } from "./styles";

const BookDetailbox = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(true);
  const [key] = useState(Number(location.pathname.split("/")[2]));

  const onButtonClick = useCallback(() => {
    navigator("/projects");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <BookLoading loadingColor={projectData[key].color} />
  ) : (
    <Container bookColor={projectData[key].color}>
      <BookInfoWrapper>
        <button onClick={onButtonClick}>
          <div></div>
          <span>책 덮기</span>
        </button>
        <Section>
          <header>
            <h2>{projectData[key].title}</h2>
            <h3>{projectData[key].subtitle}</h3>
          </header>
          <div className="section__main">
            <ProjectSlider imgSrces={projectData[key].imgSrc}></ProjectSlider>
            <div className="main__content">
              {projectData[key].contentOne}
              <br></br>
              <br></br>
              {projectData[key].contentTwo}
              <hr></hr>
              <div className="content__grid">
                <div>
                  <h5>✔주요 기능</h5>
                  <span>{projectData[key].function}</span>
                </div>
                <div>
                  <h5>✔GitHub</h5>
                  <a
                    href={"https://" + projectData[key].github}
                    target="_blank"
                  >
                    {projectData[key].github}
                  </a>
                </div>
                <div>
                  <h5>✔Domain</h5>
                  <a
                    href={"https://" + projectData[key].webpage}
                    target="_blank"
                  >
                    {projectData[key].webpage}
                  </a>
                </div>
                <div>
                  <h5>✔Front-end</h5>
                  <span>{projectData[key].frontend}</span>
                </div>
                <div>
                  <h5>✔Back-end</h5>
                  <span>{projectData[key].backend}</span>
                </div>
                <div>
                  <h5>✔Deployment</h5>
                  <span>{projectData[key].deployment}</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </BookInfoWrapper>
    </Container>
  );
};

export default BookDetailbox;
