import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252323;
  padding: 10px;
  border-bottom-right-radius: 10px;
`;

export const PortFolioUl = styled.ul`
  width: 100%;
  height: 85vh;
  overflow: auto;
  background-color: #474646;
`;
export const PortFolioLi = styled.li`
  width: 80%;
  margin: 0 auto;
  background-color: #474646;
  margin-bottom: 50px;
  height: 800px;
`;

export const Section = styled.section`
  padding: 10px;
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

export const Navigator = styled.div`
  padding: 10px;
  .navigator__title {
    color: #a4a2a2;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  ul {
    /* color: #247cd8; */

    color: white;
    padding-left: 5px;
    li {
      margin-bottom: 20px;

      cursor: pointer;
    }
  }
`;
