import Folder from "@layouts/Folder";
import profileData from "@utils/json/profileData";
import React, { Dispatch, FC } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Container, Navigator, Section } from "./styles";

interface IProjects {
  projectWindow: boolean;
  setProjectWindow: Dispatch<React.SetStateAction<boolean>>;
}

const Projects: FC<IProjects> = ({ projectWindow, setProjectWindow }) => {
  return projectWindow ? (
    <Folder folderWindow={projectWindow} setFolderWindow={setProjectWindow}>
      <Container>
        <ul>
          <Scrollbars autoHide={true}>
            {profileData.map((item) => (
              <li>
                <Section>
                  <header>
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                  </header>
                  <div className="section__main">
                    <img src={item.imgSrc} />
                    <p className="main__content">
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
                          <a href={"https://" + item.webpage}>{item.webpage}</a>
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
                    </p>
                  </div>
                </Section>
              </li>
            ))}
          </Scrollbars>
        </ul>
      </Container>
      <Navigator></Navigator>
    </Folder>
  ) : null;
};

export default Projects;
