import styled from "@emotion/styled";

export const Wrapper = styled.div<{ mode: string }>`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.mode === "true" ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  height: 100vh;
  min-width: 400px;
  position: relative;
  @media (max-width: 400px) {
    width: 320px;
  }
`;

export const Books = styled.div`
  position: absolute;
  top: 110px;
  min-width: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media (max-width: 400px) {
    width: 300px;
  }
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

export const Ornaments = styled.div`
  position: absolute;
  top: 0;

  height: 100px;
  min-width: 400px;
  @media (max-width: 400px) {
    width: 300px;
  }
  @keyframes carMove {
    0% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-300px);
    }
    50% {
      transform: translateX(-300px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }

  img {
    width: 100px;
    height: 100px;

    position: absolute;
    bottom: 0px;
    right: 0;
    animation: carMove 20s ease-in-out infinite;
  }
  div.bookSelf {
    height: 30px;
    width: 100%;
    border: 1px solid black;
    background-color: #d28c51;
    position: absolute;
    bottom: 0;
  }
`;

export const Marbles = styled.div`
  position: absolute;
  bottom: 10px;
  min-width: 400px;
  height: 100px;
  display: flex;
  @media (max-width: 400px) {
    width: 280px;
  }
  img {
    position: absolute;
    left: 0;
    bottom: 30px;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .marbles {
    position: absolute;
    bottom: 30px;
    right: 0;
    width: 50%;
    display: flex;
    justify-content: space-around;

    @keyframes marbleMove {
      0% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(-15deg);
      }
      50% {
        transform: rotate(0);
      }
      75% {
        transform: rotate(15deg);
      }
      100% {
        transform: rotate(0);
      }
    }

    .marble {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transform-origin: 50% 100%;
      animation: marbleMove 6s ease-in-out infinite;
    }
    .nightMode {
      background-color: yellow;
    }
    .github {
      background-color: #171515;
      color: white;
      animation-delay: 2s;
    }
    .velog {
      background-color: #20c997;
      animation-delay: 5s;
    }
  }
  div.bookSelf {
    height: 30px;
    width: 100%;
    border: 1px solid black;
    background-color: #d28c51;

    position: absolute;
    bottom: 0;
  }
`;

export const LeftPillar = styled.div`
  position: absolute;
  top: 0;
  left: -30px;
  border: 1px solid black;
  width: 30px;
  height: 100vh;
  background-color: #d28c51;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const RightPillar = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  width: 30px;
  height: 100vh;
  border: 1px solid black;
  background-color: #d28c51;
  @media (max-width: 400px) {
    display: none;
  }
`;
