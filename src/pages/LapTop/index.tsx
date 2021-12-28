import LapTopHeader from "@components/LapTopHeader";
import Projects from "@components/Projects";

import React, { useState } from "react";
import { Container } from "./styles";

const LapTop = () => {
  const [projectWindow, setProjectWindow] = useState(false);
  const [profileWindow, setProfileWindow] = useState(false);

  return (
    <Container>
      <LapTopHeader
        setProjectWindow={setProjectWindow}
        setProfileWindow={setProfileWindow}
      ></LapTopHeader>
      {projectWindow ? <Projects></Projects> : ""}
    </Container>
  );
};

export default LapTop;
