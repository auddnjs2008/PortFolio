import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  border: 1px solid black;
`;

export const RepresentBook = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const Book = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: pink;
  opacity: 0;

  @keyframes moveOne {
    0% {
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes moveTwo {
    0% {
    }
    100% {
    }
  }

  @keyframes moveThree {
    0% {
    }
    100% {
    }
  }

  @keyframes moveFour {
    0% {
    }
    100% {
    }
  }
  animation: moveOne 1s linear forwards;
`;
