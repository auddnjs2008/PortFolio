import React, { FC } from "react";
import { IBook } from "types";
import { Container } from "./styles";

const Book: FC<{ bookInfo: IBook }> = ({ bookInfo }) => {
  return (
    <Container backgroundColor={bookInfo.color}>
      <h1>{bookInfo.title}</h1>
    </Container>
  );
};

export default Book;
