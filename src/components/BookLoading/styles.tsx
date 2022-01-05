import styled from "@emotion/styled";

export const Container = styled.div<{ loadingColor: string }>`
  width: 100vw;
  height: 100vh;
  padding: 25px;
  background-color: ${(props) => props.loadingColor};
  display: flex;
  overflow: hidden;
  .left,
  .right {
    width: 50%;
    height: 100%;
  }
  @keyframes rotateAnimation {
    0% {
      transform: perspective(200px) rotateY(0);
      border-radius: 20px;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: perspective(200px) rotateY(-180deg);
      opacity: 0;
      display: none;
      border-radius: 10px;
    }
  }

  .right {
    position: relative;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      transform-origin: 0 50%;
      border: 1px solid black;
      border-left: 3px solid rgba(15, 15, 15, 0.6);
    }
    div:nth-of-type(1) {
      animation: rotateAnimation 2s linear forwards;
    }
    div:nth-of-type(2) {
      animation: rotateAnimation 1.7s linear forwards;
    }

    div:nth-of-type(3) {
      animation: rotateAnimation 1.4s linear forwards;
    }
    div:nth-of-type(4) {
      animation: rotateAnimation 1.1s linear forwards;
    }
    div:nth-of-type(5) {
      animation: rotateAnimation 0.8s linear forwards;
    }
    div:nth-of-type(6) {
      animation: rotateAnimation 0.5s linear forwards;
    }
  }
`;
