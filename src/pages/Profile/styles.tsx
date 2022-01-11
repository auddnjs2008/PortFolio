import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Controller = styled.div`
  width: 200px;

  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(15, 15, 15, 0.8);
    color: white;
    font-size: 1.5rem;
    &:active {
      transform: scale(0.98);
    }
  }
`;
