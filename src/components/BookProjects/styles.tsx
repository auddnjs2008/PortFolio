import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  @keyframes slide {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  ul {
    min-width: 500px;
    height: 500px;
    position: relative;
    transform-style: preserve-3d;
    /* animation: slide 5s linear infinite; */

    li:nth-of-type(1) {
      transform: rotateY(0deg) translateZ(250px);
    }

    li:nth-of-type(2) {
      transform: rotateY(90deg) translateZ(250px);
    }
    li:nth-of-type(3) {
      transform: rotateY(180deg) translateZ(250px);
    }
    li:nth-of-type(4) {
      transform: rotateY(270deg) translateZ(250px);
    }
  }

  .pillar {
    height: 100%;
    width: 50px;
    background-color: brown;
  }
`;
