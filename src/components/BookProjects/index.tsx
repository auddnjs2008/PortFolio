import Book from "@components/Book";
import BookDetailbox from "@components/BookDetailbox";
import projectData from "@utils/json/projectData";
import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IBook } from "types";
import { Container } from "./styles";

const BookProjects = () => {
  const CarouselBox = useRef<HTMLUListElement>(null);

  const navigator = useNavigate();
  const onBookClick = useCallback(
    (key: number) => (e: any) => {
      navigator(`/projects/${key}`);
    },
    []
  );

  return (
    <Container>
      <ul ref={CarouselBox}>
        {projectData.map((item, key) => (
          <Book key={key} bookInfo={item} onBookClick={onBookClick(key)}></Book>
        ))}
      </ul>
    </Container>
  );
};

export default BookProjects;
