import React, { FC } from "react";
import { IBook } from "types";
import { Container } from "./styles";

interface IBookComponent {
  bookInfo: IBook;
  onBookClick: (e: any) => void;
}

const Book: FC<IBookComponent> = ({ bookInfo, onBookClick }) => {
  return (
    <Container backgroundColor={bookInfo.color} onClick={onBookClick}>
      <h1>{bookInfo.title}</h1>
      <h2>{bookInfo.subtitle}</h2>
      <div></div>
    </Container>
  );
};

export default Book;
