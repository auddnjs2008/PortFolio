import styled from "@emotion/styled";

export const Container = styled.div`
  width: 536px;
  height: 100%;
  align-self: unset;
  @media (max-width: 900px) {
    align-self: unset;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;
`;

export const SliderUl = styled.ul`
  width: 100%;
  height: 80%;
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    img {
      width: 536px;
      height: 240px;
      object-fit: cover;
      @media (max-width: 500px) {
        width: 300px;
        height: auto;
      }
    }
  }
`;

export const Controller = styled.div`
  width: 80px;
  margin: 20px auto;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
`;
