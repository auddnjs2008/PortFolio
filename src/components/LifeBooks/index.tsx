import LifeSayings from "@utils/json/LifeSayings";
import React from "react";
import { Book, Container, RepresentBook } from "./styles";

const LifeBooks = () => {
  return (
    <Container>
      <RepresentBook></RepresentBook>
      {LifeSayings.map((item) => (
        <Book></Book>
      ))}
    </Container>
  );
};

export default LifeBooks;
