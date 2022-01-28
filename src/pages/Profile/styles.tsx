import styled from "@emotion/styled";

export const Wrapper = styled.div`
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #161b22;
  transform: rotateX(30deg);
  &.viewScroll {
    position: static;
    overflow: auto;
  }
`;

export const Controller = styled.div`
  width: 200px;

  position: fixed;

  bottom: 50px;
  /* top: 200px; */
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  user-select: none;

  div:not(.viewToggle) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #343942;
    color: white;
    font-size: 1.5rem;
    &:active {
      transform: scale(0.98);
    }
  }

  div.viewToggle {
    cursor: pointer;
  }
`;
