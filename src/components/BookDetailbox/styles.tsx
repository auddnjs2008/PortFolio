import styled from "@emotion/styled";

export const Container = styled.div<{ bookColor: string }>`
  width: 100%;
  height: 200vh;
  padding: 20px;
  background-color: ${(props) => props.bookColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfoWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  box-shadow: 8px 16px 16px hsl(0deg 0% 0% /0.25);
  background-color: white;
  position: absolute;

  //animation: initAnimation 1s linear forwards;
  @keyframes initAnimation {
    0% {
      transform-origin: 100%;
      left: 0;
      transform: rotateY(180deg);
    }
    80% {
      left: 0;
      transform: rotateY(0deg);
    }
    100% {
      /* left: 50%;
      transform: translateX(-50%); */
    }
  }

  button {
    all: unset;
    background-color: rgba(226, 224, 222, 0.5);
    padding: 0;
    position: absolute;
    top: 20px;
    width: 150px;
    height: 40px;
    left: -100px;
    display: flex;
    div {
      width: 30%;
      height: 100%;

      background-color: #ece912;
    }
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
    transform-origin: 100% 100%;
    transition: transform 0.5s linear;
    &:hover {
      transform: rotateY(40deg);
    }
  }
`;

export const Section = styled.section`
  padding: 50px;
  header {
    text-align: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    margin-bottom: 70px;
  }
  div.section__main {
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;

    .main__content {
      /* margin-left: 50px; */
      margin-top: 20px;
      line-height: 1.6;
      hr {
        border: none;
        border: 1px solid #cccccc;
        background-color: #cccccc;
      }

      .content__grid {
        div {
          display: grid;
          grid-template-columns: 120px 1fr;
          margin-bottom: 10px;
          a {
            color: #3498db;
          }
          h5 {
            font-weight: 600;
          }
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;

      .main__content {
        margin-top: 20px;
        margin-left: 0;
      }
    }
  }
`;
