import BookLoading from "@components/BookLoading";
import HomeBooks from "@components/HomeBooks";
import React from "react";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      {/* <HomeBooks></HomeBooks> */}
      <BookLoading></BookLoading>
    </Container>
  );
};

export default Home;
