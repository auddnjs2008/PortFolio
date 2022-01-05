import styled from "@emotion/styled";

export const Container = styled.li<{ backgroundColor: string }>`
  width: 95%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background: url("https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%85%ED%91%9C%EC%A7%80%ED%8C%90.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;

  h1 {
    width: 60%;
    font-weight: 600;
    margin-top: 50px;
    margin-left: 30px;
    text-align: center;
  }
  h2 {
    width: 60%;
    text-align: center;
    margin-top: 20px;
    margin-left: 30px;
    font-size: 0.5rem;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    border: 1px solid black;
  }
`;
