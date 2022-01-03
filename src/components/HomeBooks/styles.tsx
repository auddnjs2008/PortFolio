import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  div.bookSelf {
    width: 100%;
    height: 30px;
    border: 1px solid black;
    background-color: #d28c51;
  }
`;

export const BookContainer = styled.ul`
  width: 100%;

  display: flex;
  justify-content: center;
  li {
    width: 20px;
    height: 169px;
    margin-right: 10px;
    border: 1px solid black;
  }

  li:nth-of-type(1) {
    background-color: blue;
  }
`;
