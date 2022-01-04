import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid black;
  width: 50%;
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
  align-items: flex-end;
`;

export const Book = styled.li<{
  color: string;
  borderColor: string;
  width: number;
  height: number;
  animation: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin-right: 10px;
  border: ${(props) => `3px solid ${props.borderColor}`};
  background-color: ${(props) => `${props.color}`};
  padding: 10px;

  &:nth-of-type(6) {
    transform: rotate(0deg);
  }
  &:nth-of-type(7) {
    transform: rotate(-5deg);
  }
  &:nth-of-type(15) {
    transform: rotate(-10deg);
  }
  span {
    writing-mode: vertical-rl; // rotate(-90deg);
  }

  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: ${(props) =>
      props.animation ? `rotate(0) translateY(-100px)` : ""};
    background-color: ${(props) => (props.animation ? "yellow" : "")};
  }
`;
