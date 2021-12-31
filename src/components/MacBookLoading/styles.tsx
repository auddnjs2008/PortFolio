import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-bottom: 100px;
  }
`;

export const LoadingBar = styled.div`
  width: 40%;
  height: 5px;
  border-radius: 20px;
  background-color: white;

  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  div {
    width: 0;
    height: 100%;
    border-radius: 20px;
    background-color: black;
    animation: loading 3s ease-in forwards;
  }
`;
