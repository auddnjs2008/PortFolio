import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { Container, Navigator, ProjectsWrapper } from "./styles";

interface IFolder {
  children: ReactNode[];
}

const Folder: FC<IFolder> = ({ children }) => {
  const [folderWindow, setFolderWindow] = useState(false);

  const onCloseFolderWindow = useCallback(() => {
    setFolderWindow(false);
  }, []);

  return folderWindow ? (
    <Container>
      <Navigator>
        <header>
          <div></div>
          <div></div>
          <div></div>
        </header>
        <main>{children[1]}</main>
      </Navigator>
      <ProjectsWrapper>
        <header>
          <ul>
            <li>
              <div className="nameBox">
                <span>
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </span>
                <h2>Myeoung Won</h2>
              </div>
            </li>

            <li>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </li>
            <li onClick={onCloseFolderWindow}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </li>
          </ul>
        </header>
        <main>{children[0]}</main>
      </ProjectsWrapper>
    </Container>
  ) : null;
};

export default Folder;
