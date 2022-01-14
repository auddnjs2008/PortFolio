import Book from "@components/Book";
import BookDetailbox from "@components/BookDetailbox";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectData from "@utils/json/projectData";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Controller } from "./styles";

const BookProjects = () => {
  const CarouselBox = useRef<HTMLUListElement>(null);
  const [nightmode] = useState(
    localStorage.getItem("nightmode")
      ? localStorage.getItem("nightmode")
      : "false"
  );

  const navigator = useNavigate();
  const onBookClick = useCallback(
    (key: number) => (e: any) => {
      navigator(`/projects/${key}`);
    },
    []
  );

  const onArrowClick = useCallback((e) => {
    const nowCurrent = CarouselBox.current;
    const direction = e.currentTarget.className;
    if (nowCurrent) {
      const originAngle = nowCurrent.style.transform
        ? Number(nowCurrent.style.transform.split("deg")[0].split("(")[1])
        : 0;
      CarouselBox.current.style.transform = `rotateY(${
        (direction === "left" ? 60 : -60) + originAngle
      }deg)`;
    }
  }, []);

  const onHomeClick = useCallback((e) => {
    const nowCurrent = CarouselBox.current;
    if (nowCurrent) {
      nowCurrent.style.animation = "slide 1.5s linear forwards";
      setTimeout(() => {
        // nowCurrent.style.animation = "";
        navigator("/");
      }, 1500);
    }
  }, []);

  return (
    <Container nightmode={nightmode as string}>
      <ul ref={CarouselBox}>
        {projectData.map((item, key) => (
          <Book key={key} bookInfo={item} onBookClick={onBookClick(key)}></Book>
        ))}
      </ul>
      <Controller>
        <span className="left" onClick={onArrowClick}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <span className="right" onClick={onArrowClick}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </span>
        <div onClick={onHomeClick}></div>
      </Controller>
    </Container>
  );
};

export default BookProjects;
