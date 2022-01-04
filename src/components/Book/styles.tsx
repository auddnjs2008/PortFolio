import styled from "@emotion/styled";

export const Container = styled.li<{ backgroundColor: string }>`
  width: 95%;
  height: 100%;
  border: 1px solid black;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
`;
