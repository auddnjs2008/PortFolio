import styled from "@emotion/styled";

export const Container = styled.div<{ bookColor: string }>`
  width: 100%;
  height: 200vh;
  padding: 20px;
  background-color: ${(props) => props.bookColor};
  display: flex;
  justify-content: center;
  align-items: center;
  .toastBody {
    font-family: "Atlas Grotesk Web", Arial, Helvetica, sans-serif;
    color: #10171d; /* #10171D */
    font-size: 0.875rem !important;
  }
`;

export const BookInfoWrapper = styled.div`
  width: 700px;

  margin: 0 auto;
  box-shadow: 8px 16px 16px hsl(0deg 0% 0% /0.25);
  background-color: white;
  position: absolute;

  @media (max-width: 699px) {
    width: 350px;
  }

  button.close {
    all: unset;
    background-color: rgba(226, 224, 222, 0.5);
    padding: 0;
    position: absolute;
    top: 20px;
    width: 150px;
    height: 40px;
    left: -100px;
    display: flex;

    @media (max-width: 699px) {
      transform: rotate(90deg);
      left: -150px;
    }

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
    @media (max-width: 699px) {
      h2 {
        font-size: 1.5rem;
      }
      margin-bottom: 0px;
    }
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

      @media (max-width: 699px) {
        font-size: 13px;
      }
    }
  }
`;
