import styled from "@emotion/styled";

export const Container = styled.div<{ nightmode: string }>`
  width: 60vw;
  height: 90vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "#F9FAFB"};
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
    background-color: ${(props) =>
      props.nightmode === "true" ? "#0D1117" : "white"};
    border: ${(props) =>
      props.nightmode === "true" ? `1px solid #C9D1D9` : ""};
    color: ${(props) => (props.nightmode === "true" ? "#C9D1D9" : "")};

    a {
      color: #1f6feb;
    }
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
    justify-content: flex-start;
    height: 150vh;
    section {
      margin-top: 50px;
      min-width: 350px;
    }
  }
  @media (max-width: 520px) {
    height: 200vh;
    justify-content: flex-start;

    section {
      margin-top: 50px;
      height: auto;
      margin-bottom: 10px;
    }
  }
`;

export const ContactInfo = styled.section`
  background-color: white;

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
