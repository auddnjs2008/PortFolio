import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

const style = css`
  ${emotionReset};
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      all: unset;
      background-color: black;
      opacity: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3d3d3d;
      border-radius: 100px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    /* overflow-x: hidden; */
  }
`;

export default style;
