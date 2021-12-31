import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  width: 98%;
  height: 98%;
  display: flex;
  @keyframes window {
    0% {
      opacity: 0;
      transform: scale(0.98);
    }
    50% {
      opacity: 0;
      transform: scale(0.98);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes windowClose {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(0.98);
    }
    100% {
      opacity: 0;
      transform: scale(0.98);
    }
  }

  animation: window 0.8s ease-in-out;

  &.closeFolder {
    animation: windowClose 0.8s ease-in-out;
  }
`;

export const Navigator = styled.div`
  width: 15%;
  height: 100%;
  background-color: #474646;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  header {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 70px;

    div {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
    div:nth-of-type(1) {
      background-color: #ff575d;
      margin-right: 10px;
    }
    div:nth-of-type(2) {
      background-color: #fbc128;
      margin-right: 10px;
    }
    div:nth-of-type(3) {
      background-color: #297c40;
    }
  }
`;

export const ProjectsWrapper = styled.div`
  flex: 1;
  height: 100%;
  background-color: #252323;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
    padding: 20px;
    ul {
      padding: 5px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #a4a2a2;
      font-size: 1.5rem;
      li .nameBox {
        display: flex;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  main {
    flex: 1;
  }
`;
