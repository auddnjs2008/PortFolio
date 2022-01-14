import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .wrapper {
    display: flex;

    align-items: center;
  }

  .chainFrame {
    width: 15px;
    height: 8px;
    background-color: #616161;
    border-radius: 0 8px 8px 0;
    z-index: 1;
  }
  .chainCircle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    transform: translateX(-10px);
    box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.4) inset;
    @media (max-width: 500px) {
      width: 20px;
      height: 20px;
    }
  }
`;
