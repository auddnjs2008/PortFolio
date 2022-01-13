import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 60px;
  font-weight: 600;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  transform-origin: 0;
  transform: perspective(500px);
  z-index: 2;
  padding: 20px;
  text-align: center;
  transition: transform 1s ease-in-out;

  &.viewScroll {
    position: static;
    top: unset;
  }

  @keyframes smoke {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes smokeAll {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  div {
    span {
      opacity: 0;
    }
  }
`;
