import React from "react";
import { Book, BookContainer, Container } from "./styles";
import bookCss from "@utils/json/bookCss";
const HomeBooks = () => {
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
