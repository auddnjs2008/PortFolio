import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  Dispatch,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Container, Navigator, ProjectsWrapper } from "./styles";

interface IFolder {
  children: ReactNode[];
  folderWindow: boolean;
  setFolderWindow: Dispatch<React.SetStateAction<boolean>>;
}

const Folder: FC<IFolder> = ({ children, folderWindow, setFolderWindow }) => {
  const folderContainer = useRef<HTMLDivElement>(null);

  const onCloseClick = useCallback(() => {
    if (folderContainer && folderContainer.current) {
      folderContainer.current.classList.add("closeFolder");
      console.log(folderContainer.current.style.animation);
    }
    setTimeout(() => {
      setFolderWindow(false);
      folderContainer.current?.classList.remove("closeFolder");
    }, 800);
  }, [folderContainer]);

  return folderWindow ? (
    <Container ref={folderContainer}>
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
            <li onClick={onCloseClick}>
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
