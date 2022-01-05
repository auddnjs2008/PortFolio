import React, { FC, useEffect } from "react";
import { Container } from "./styles";

interface IBookLoading {
  loadingColor: string;
}

const BookLoading: FC<IBookLoading> = ({ loadingColor }) => {
  return (
    <Container loadingColor={loadingColor}>
      <div className="left"></div>
      <div className="right">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default BookLoading;
