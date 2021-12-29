import LapTopBar from "@components/LapTopBar";
import Projects from "@components/Projects";

import React, { useState } from "react";
import { Container } from "./styles";

const LapTop = () => {
  const [projectWindow, setProjectWindow] = useState(false);
  const [profileWindow, setProfileWindow] = useState(false);

  return (
    <Container>
      <LapTopBar
        setProjectWindow={setProjectWindow}
        setProfileWindow={setProfileWindow}
      ></LapTopBar>
      {projectWindow ? (
        <Projects
          projectWindow={projectWindow}
          setProjectWindow={setProjectWindow}
        ></Projects>
      ) : (
        ""
      )}
    </Container>
  );
};

export default LapTop;
