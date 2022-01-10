import React, { FC } from "react";
import { Container } from "./styles";

interface IBookProfileMyInfo {
  myinfo: React.RefObject<HTMLDivElement>;
}

const BookProfileMyInfo: FC<IBookProfileMyInfo> = ({ myinfo }) => {
  return (
    <Container ref={myinfo}>
      <h1> About Me</h1>
    </Container>
  );
};

export default BookProfileMyInfo;
