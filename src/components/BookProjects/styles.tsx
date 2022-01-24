import styled from "@emotion/styled";

export const Container = styled.div<{ nightmode: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "#F9FAFB"};
  @keyframes slide {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg) translateY(165%);
    }
  }

  @keyframes up {
    from {
      transform: translateY(165%) rotateY(0deg);
    }
    to {
      transform: translateY(0%) rotateY(360deg);
    }
  }

  ul {
    min-width: 300px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s linear;
    /* animation: up 1.5s linear; */
    /* animation: slide 1.5s linear forwards; */

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

export const Controller = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  span {
    width: 50px;
    height: 50px;
    background-color: #161b22;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-right: 40px;
    &:active {
      transform: scale(0.97);
    }
  }

  div {
    width: 50px;
    height: 50px;
    background: url("https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/homeIcon.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
