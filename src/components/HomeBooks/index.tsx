import React, { useCallback } from "react";
import { Book, BookContainer, Container } from "./styles";
import bookCss from "@utils/json/bookCss";
import { useNavigate } from "react-router-dom";
const HomeBooks = () => {
  const navigator = useNavigate();
  const onBookClick = useCallback(
    (key: number) => (e: any) => {
      switch (key) {
        case 0:
          navigator("/profile");
          break;
        case 3:
          navigator("/projects");
          break;
        case 6:
          navigator("/");
          break;
        case 8:
          navigator("/concept");
          break;
        default:
          return;
      }
    },
    []
  );

  return (
    <Container>
      <BookContainer>
        {bookCss.map((item, key) => (
          <Book
            key={key}
            color={item.color}
            borderColor={item.borderColor}
            width={item.width}
            height={item.height}
            animation={item.animation ? item.animation : false}
            onClick={onBookClick(key)}
          >
            <span>{item.title}</span>
          </Book>
        ))}
      </BookContainer>
      <div className="bookSelf"></div>
    </Container>
  );
};

export default HomeBooks;
