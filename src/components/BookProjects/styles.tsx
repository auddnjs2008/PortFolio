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
    min-width: 320px;
    height: 320px;
    position: relative;
    transform-style: preserve-3d;
    animation: slide 50s linear infinite;

    // 사각형 90도 z 250  오각형 72도 z 344  육각형 60도 z 420
    li:nth-of-type(1) {
      transform: rotateY(0deg) translateZ(420px);
    }

    li:nth-of-type(2) {
      transform: rotateY(60deg) translateZ(420px);
    }
    li:nth-of-type(3) {
      transform: rotateY(120deg) translateZ(420px);
    }
    li:nth-of-type(4) {
      transform: rotateY(180deg) translateZ(420px);
    }
    li:nth-of-type(5) {
      transform: rotateY(240deg) translateZ(420px);
    }
    li:nth-of-type(6) {
      transform: rotateY(300deg) translateZ(420px);
    }
  }
`;
