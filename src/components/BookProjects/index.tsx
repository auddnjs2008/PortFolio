import Book from "@components/Book";
import projectData from "@utils/json/projectData";
import React, { useRef } from "react";
import { IBook } from "types";
import { Container } from "./styles";

const BookProjects = () => {
  const CarouselBox = useRef<HTMLUListElement>(null);

  return (
    <Container>
      <ul ref={CarouselBox}>
        {projectData.map((item, key) => (
          <Book key={key} bookInfo={item}></Book>
        ))}
      </ul>
      <div className="pillar"></div>
    </Container>
  );
};

export default BookProjects;
