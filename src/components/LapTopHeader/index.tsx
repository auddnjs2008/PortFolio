import React, { Dispatch, FC, useCallback } from "react";
import { Container, NoteIcon, ProfileIcon, ProjectIcon } from "./styles";

interface ILapTopHeader {
  setProjectWindow: Dispatch<React.SetStateAction<boolean>>;
  setProfileWindow: Dispatch<React.SetStateAction<boolean>>;
}

const LapTopHeader: FC<ILapTopHeader> = ({
  setProjectWindow,
  setProfileWindow,
}) => {
  const onProjectsClick = useCallback(() => {
    setProjectWindow((state) => !state);
  }, []);

  const onProfileClick = useCallback(() => {
    setProfileWindow((state) => !state);
  }, []);

  return (
    <Container>
      <ProjectIcon onClick={onProjectsClick}></ProjectIcon>
      <NoteIcon></NoteIcon>
      <ProfileIcon></ProfileIcon>
    </Container>
  );
};

export default LapTopHeader;
