import styled from "@emotion/styled";

export const Container = styled.div<{ nightmode: string }>`
  width: 90vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "#F9FAFB"};
  transform-origin: 0;
  transform: perspective(500px);
  transition: transform 0.5s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;

  &.viewScroll {
    position: static;
    top: unset;
  }
  section {
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% /0.25);
    border-radius: 5px;
    background-color: ${(props) =>
      props.nightmode === "true" ? "#0D1117" : "white"};
    border: ${(props) =>
      props.nightmode === "true" ? `1px solid #C9D1D9` : ""};

    color: ${(props) => (props.nightmode === "true" ? "#C9D1D9" : "")};
    width: 42%;
    padding: 20px;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      color: #f1c40f;
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    height: 150vh;
    section {
      width: 85%;
    }
  }
  @media (max-width: 520px) {
    height: 200vh;

    section {
      height: auto;
      margin-bottom: 10px;
    }
  }
`;

export const AboutMe = styled.section`
  height: 300px;
  h1 {
    margin-bottom: 60px;
  }
  ul {
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 20px;
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
    }
    li {
      display: grid;
      grid-template-columns: 0.2fr 1fr;

      gap: 20px;

      font-size: 1rem;
      align-items: center;
      span {
      }

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

export const Skills = styled.section`
  height: 500px;
  h1 {
    margin-bottom: 20px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .frontend,
  .backend,
  .etc {
    display: grid;
    grid-template-columns: 110px 1fr;
    padding: 10px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
      grid-template-rows: 50px 1fr;
    }
    img {
      width: 70px;
      height: 20px;
      box-shadow: rgb(0 0 0 / 6%) 0px 2px 4px 2px inset;
    }
    div {
      justify-self: center;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;

      border: 1px solid black;
      padding: 20px;
      box-shadow: rgb(0 0 0 / 6%) 0px 2px 4px 2px inset;
    }
  }

  .backend {
  }
`;
