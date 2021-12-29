import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252323;
  padding: 10px;
  ul {
    width: 100%;
    height: 85vh;
    overflow: auto;
    background-color: #474646;

    border: 1px solid black;
    li {
      width: 100%;
      margin: 0 auto;
      background-color: #474646;
    }
  }
`;

export const Section = styled.section`
  padding: 10px;
  margin-bottom: 50px;
  color: #dfe6e9;
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
    img {
      width: 50%;
      height: 50%;
      object-fit: cover;
    }
    .main__content {
      margin-left: 50px;
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
      }
    }
  }
`;

export const Navigator = styled.div``;
