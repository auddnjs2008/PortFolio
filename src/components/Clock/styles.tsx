import styled from "@emotion/styled";

export const ClockContainer = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 12px solid rgb(53, 59, 72);
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);

  & .hand {
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  }
`;

export const Hourhand = styled.div`
  background: rgb(53, 59, 72);
  top: 50%;
  height: 3px;
  width: 50%;
`;

export const Minhand = styled.div`
  background: rgb(53, 59, 72);
  top: 50%;
  left: -20%;
  height: 3px;
  width: 70%;
`;

export const Secondhand = styled.div`
  top: 50%;
  left: -30%;
  width: 80%;
  background: red;
  height: 2px;
`;
