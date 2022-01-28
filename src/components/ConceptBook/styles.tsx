import styled from "@emotion/styled";

export const Container = styled.div<{ nightmode: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "white"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConceptBookContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  perspective: 1000px;
`;

export const ConceptSection = styled.section<{ nightmode: string }>`
  transform-origin: 50% 0%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "#f9fafb"};
  border: ${(props) => (props.nightmode === "true" ? `1px solid #C9D1D9` : "")};

  color: ${(props) => (props.nightmode === "true" ? "#C9D1D9" : "")};
  .image {
    width: 40%;
    height: 100%;
    border: 1px solid black;
    background-color: black;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .content {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${(props) => (props.nightmode === "true" ? "#1f6feb" : "")};
    }
    p {
      line-height: 2;
    }
  }

  @media (max-width: 319px) {
    flex-direction: column;
    .image {
      width: 100%;
      height: 40%;
    }
    .content {
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 13px;
        line-height: 1.3;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 550px) {
    flex-direction: column;
    .image {
      width: 100%;
      height: 40%;
    }
    .content {
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
`;

export const Controller = styled.div`
  position: absolute;
  bottom: 0px;
  right: -35px;
  display: flex;
  flex-direction: column;
  span {
    width: 35px;
    height: 35px;
    font-size: 20px;
    margin-bottom: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #343942;
    color: white;
  }
  a {
    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      user-select: none;
    }
  }
  @media (max-width: 320px) {
    right: -27px;
    span {
      font-size: 20px;
    }
    a {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
