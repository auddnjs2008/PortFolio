import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div<{ nightmode: string }>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.nightmode === "true" ? "#0D1117" : "#F9FAFB"};
  .wrapper {
    perspective: 500px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    will-change: transform;
    white-space: nowrap;
    transform: scale(0.98);

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .active {
    background: rgba(255, 255, 255, 0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;

export const Book = styled.div<{ imgsrc: string | null }>`
  width: 400px;
  height: calc(100% - 40px);

  background-image: ${(props) => (props.imgsrc ? `url(${props.imgsrc})` : "")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: pink;
  border: 1px solid black;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  vertical-align: top;
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 450px) {
    width: 200px;
    h2 {
      font-size: 14px;
      padding: 10px;
      white-space: normal;
    }
    p {
      font-size: 13px;
      line-height: 1.3;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    font-family: sans-serif;
  }
  p {
    width: 80%;
    line-height: 1.5;
    white-space: normal;
  }
  &:nth-of-type(even) {
    transform: scaleX(1.082) rotateY(-20deg);
  }
  &:nth-of-type(odd) {
    transform: scaleX(1.082) rotateY(20deg);
  }
  &:nth-of-type(1) {
    background-color: dodgerblue;
  }
  &:nth-of-type(2) {
    background-color: goldenrod;
  }
  &:nth-of-type(3) {
    background-color: #f7941e;
  }
  &:nth-of-type(4) {
    background-color: #f7941e;
  }
  &:nth-of-type(5) {
    background-color: #008d62;
  }
  &:nth-of-type(6) {
    background-color: #008d62;
  }
  &:nth-of-type(7) {
    background-color: dodgerblue;
  }
  &:nth-of-type(8) {
    background-color: dodgerblue;
  }
  &:nth-of-type(9) {
    background-color: lightcoral;
  }
  &:nth-of-type(10) {
    background-color: lightcoral;
  }
`;

export const HomeBtn = styled(Link)`
  position: absolute;
  bottom: 0;
`;
