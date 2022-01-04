import ProjectSlider from "@components/ProjectSlider";
import Folder from "@layouts/Folder";
import projectData from "@utils/json/projectData";
import React, { Dispatch, FC, useCallback, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { IBook } from "types";
import {
  Container,
  Navigator,
  PortFolioLi,
  PortFolioUl,
  Section,
} from "./styles";

interface IProjects {
  projectWindow: boolean;
  setProjectWindow: Dispatch<React.SetStateAction<boolean>>;
}

const Projects: FC<IProjects> = ({ projectWindow, setProjectWindow }) => {
  const scrollBar = useRef(null);
  const sectionBox = useRef<HTMLLIElement>(null);

  const onMenuClick = useCallback((e) => {
    const multipleNum = Number(e.target.id) - 1;
    if (scrollBar.current && sectionBox.current) {
      (scrollBar.current as any).scrollTop(
        (sectionBox.current.clientHeight + 50) * multipleNum
      );
    }
  }, []);

  return projectWindow ? (
    <Folder folderWindow={projectWindow} setFolderWindow={setProjectWindow}>
      <Container>
        <PortFolioUl>
          <Scrollbars autoHide={true} ref={scrollBar}>
            {projectData.map((item: IBook, index: number) => (
              <PortFolioLi key={index} ref={sectionBox}>
                <Section>
                  <header>
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                  </header>
                  <div className="section__main">
                    <ProjectSlider imgSrces={item.imgSrc}></ProjectSlider>
                    <div className="main__content">
                      {item.contentOne}
                      <br></br>
                      <br></br>
                      {item.contentTwo}
                      <hr></hr>
                      <div className="content__grid">
                        <div>
                          <h5>✔주요 기능</h5>
                          <span>{item.function}</span>
                        </div>
                        <div>
                          <h5>✔GitHub</h5>
                          <a href={"https://" + item.github} target="_blank">
                            {item.github}
                          </a>
                        </div>
                        <div>
                          <h5>✔Domain</h5>
                          <a href={"https://" + item.webpage} target="_blank">
                            {item.webpage}
                          </a>
                        </div>
                        <div>
                          <h5>✔Front-end</h5>
                          <span>{item.frontend}</span>
                        </div>
                        <div>
                          <h5>✔Back-end</h5>
                          <span>{item.backend}</span>
                        </div>
                        <div>
                          <h5>✔Deployment</h5>
                          <span>{item.deployment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>
              </PortFolioLi>
            ))}
          </Scrollbars>
        </PortFolioUl>
      </Container>
      <Navigator>
        <div className="navigator__title">빠른찾기</div>
        <ul>
          <li id="1" onClick={onMenuClick}>
            병원예약 웹사이트
          </li>
          <li id="2" onClick={onMenuClick}>
            영화정보 웹사이트
          </li>
          <li id="3" onClick={onMenuClick}>
            포켓몬 웹 게임
          </li>
          <li id="4" onClick={onMenuClick}>
            웹 실시간 채팅 서비스
          </li>
        </ul>
      </Navigator>
    </Folder>
  ) : null;
};

export default Projects;
