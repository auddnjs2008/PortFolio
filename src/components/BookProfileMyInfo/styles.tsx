import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: green;
  transform-origin: 0;
  transform: perspective(500px);
  transition: transform 1s ease-in-out;
`;
