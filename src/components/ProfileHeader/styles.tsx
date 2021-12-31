import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  /* background: linear-gradient(#002a5c, #89b5e1); */
  background: linear-gradient(#252323, #89b5e1);

  @keyframes blank {
    to {
      opacity: 0;
    }
  }

  span.text {
    font-size: 2.5rem;
  }
  span.blank {
    animation: blank 0.5s infinite;
    font-size: 2.5rem;
  }
`;
