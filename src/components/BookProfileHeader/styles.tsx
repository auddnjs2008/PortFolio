import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  font-size: 60px;
  font-weight: 600;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @keyframes smoke {
    0% {
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
