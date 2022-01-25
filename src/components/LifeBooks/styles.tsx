import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    perspective: 500px;
    border: 1px solid red;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;

    cursor: pointer;
    will-change: transform;
    white-space: nowrap;
    transform: scale(0.98);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .active {
    background: rgba(255, 255, 255, 0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;

export const RepresentBook = styled.div`
  width: 200px;
  height: calc(100% - 40px);
  background-color: yellow;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transform: scaleX(1.31) rotateY(40deg);
`;

export const Book = styled.div`
  width: 200px;
  height: calc(100% - 40px);
  background-color: pink;
  border: 1px solid black;
  display: inline-block;
  /* justify-content: center;
  align-items: center; */
  p {
    width: 100px;
    border: 1px solid blue;
  }
  &:nth-of-type(even) {
    transform: scaleX(1.31) rotateY(-40deg);
  }
  &:nth-of-type(odd) {
    transform: scaleX(1.31) rotateY(40deg);
  }
`;
