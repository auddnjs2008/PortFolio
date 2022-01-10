import useInterval from "@hooks/useInterval";
import React, { FC, useCallback, useEffect, useRef } from "react";
import { HeaderContainer } from "./styles";

interface IBookProfileHeader {
  header: React.RefObject<HTMLDivElement>;
}

const BookProfileHeader: FC<IBookProfileHeader> = ({ header }) => {
  const textBox = useRef<HTMLDivElement>(null);
  const speed = useRef(200);

  const makeSpan = useCallback((text, index) => {
    const span = document.createElement("span");
    span.innerText = text;
    span.style.animation = "smoke 0.5s linear forwards";
    span.style.animationDelay = `${speed.current * index}ms`;

    if (textBox.current) {
      textBox.current.appendChild(span);
    }
  }, []);

  const makeTextEffect = useCallback(() => {
    const oneLine = "HI";
    const twoLine = "This is a book about me";

    if (textBox.current) {
      textBox.current.innerHTML = "";
      for (let i = 0; i < oneLine.length; i++) {
        makeSpan(oneLine[i], i);
      }
      textBox.current.style.animation = "smoke 0.5s linear reverse forwards";
      textBox.current.style.animationDelay = "1s";
      setTimeout(() => {
        if (textBox.current) {
          textBox.current.innerHTML = "";
          textBox.current.style.opacity = "1";
          textBox.current.style.animation = "";
          textBox.current.style.animationDelay = "";
        }
        for (let i = 0; i < twoLine.length; i++) {
          makeSpan(twoLine[i], i);
        }
      }, speed.current * 10);
    }
  }, []);

  useEffect(() => {
    makeTextEffect();
    const repeater = setInterval(() => {
      makeTextEffect();
    }, 8000);

    return () => clearInterval(repeater);
  }, []);

  return (
    <HeaderContainer ref={header}>
      <div ref={textBox}></div>
    </HeaderContainer>
  );
};

export default BookProfileHeader;
