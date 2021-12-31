import { Container, LoadingBar } from "./styles";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IMacBookLoading {
  state: string;
}

const MacBookLoading: FC<IMacBookLoading> = ({ state }) => {
  const navigator = useNavigate();
  useEffect(() => {
    if (state === "open") {
      setTimeout(() => {
        navigator("/laptop");
      }, 3500);
    } else if (state === "close") {
      setTimeout(() => {
        navigator("/");
      }, 3500);
    }
  }, []);

  return (
    <Container>
      <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%95%A0%ED%94%8C%EB%A1%9C%EA%B3%A0.png"></img>
      <LoadingBar>
        <div></div>
      </LoadingBar>
    </Container>
  );
};

export default MacBookLoading;
