import useInterval from "@hooks/useInterval";
import React, { useCallback, useEffect, useRef } from "react";
import { HeaderContainer } from "./styles";

const BookProfileHeader = () => {
  const textBox = useRef<HTMLDivElement>(null);

  const makeSpan = useCallback((text, index) => {
    const span = document.createElement("span");
    span.innerText = text;
    span.style.animation = "smoke 0.5s linear forwards";
    span.style.animationDelay = `${500 * index}ms`;

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
      }, 500 * 3);
    }
  }, []);

  useEffect(() => {
    makeTextEffect();
    const repeater = setInterval(() => {
      makeTextEffect();
    }, 14000);

    return () => clearInterval(repeater);
  }, []);

  return (
    <HeaderContainer>
      <div ref={textBox}></div>
    </HeaderContainer>
  );
};

export default BookProfileHeader;
