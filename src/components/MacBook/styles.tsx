import styled from "@emotion/styled";

export const MacBookContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background: url("https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%99%94%EB%A9%B42.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
