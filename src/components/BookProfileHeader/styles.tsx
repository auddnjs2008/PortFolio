import styled from "@emotion/styled";

export const HeaderContainer = styled.div<{ nightmode: string }>`
  width: 90vw;
  height: 100vh;
  font-size: 60px;
  font-weight: 600;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "#F9FAFB"};
  color: ${(props) => (props.nightmode === "true" ? "#C9D1D9" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 0 50%;
  transform: perspective(500px);
  z-index: 2;
  padding: 20px;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  @media (max-width: 1000px) {
    height: 150vh;
    align-items: flex-start;
    .header {
      margin-top: 100px;
    }
  }
  @media (max-width: 520px) {
    height: 200vh;
    align-items: flex-start;
    .header {
      margin-top: 100px;
    }
  }
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
