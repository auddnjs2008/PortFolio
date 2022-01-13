import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 0;
  background-color: #64bdc8;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.viewScroll {
    position: static;
    top: unset;
  }

  section {
    padding: 20px;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% /0.25);
    border-radius: 5px;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 30px;
      color: #f1c40f;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
    section {
      min-width: 350px;
    }
  }
  @media (max-width: 520px) {
    height: 100vh;
    section {
      height: auto;
      margin-bottom: 10px;
    }
  }
`;

export const ContactInfo = styled.section`
  background-color: white;
  min-width: 350px;
  width: 40%;

  ul {
    margin: 0 auto;
    width: 100%;
    display: grid;

    grid-template-rows: repeat(3, 1fr);
    row-gap: 20px;

    li {
      display: grid;
      grid-template-columns: 0.2fr 1fr;

      @media (max-width: 1000px) {
        font-size: 0.9rem;
      }
      gap: 20px;

      font-size: 1.2rem;
      align-items: center;

      .content {
        h2 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }
  }
`;
