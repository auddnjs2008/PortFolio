import BookChain from "@components/BookChain";
import useInterval from "@hooks/useInterval";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { HeaderContainer } from "./styles";

interface IBookProfileHeader {
  header: React.RefObject<HTMLDivElement>;
}

const BookProfileHeader: FC<IBookProfileHeader> = ({ header }) => {
  const textBox = useRef<HTMLDivElement>(null);
  const speed = useRef(200);
  const [nightMode] = useState(
    localStorage.getItem("nightmode")
      ? localStorage.getItem("nightmode")
      : "false"
  );
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
    const content =
      "안녕하세요./꾸준히 만드는 걸 좋아하는/프론트엔드 개발자입니다.";
    const contentArray = content.split("/");
    let accumulater = 0;

    contentArray.forEach((item, index) => {
      if (textBox.current) {
        accumulater +=
          index === 0
            ? 0
            : contentArray[index - 1].length * speed.current + 1200;
        setTimeout(() => {
          if (textBox.current) {
            textBox.current.style.opacity = "1";
            textBox.current.innerHTML = "";
          }
          for (let i = 0; i < item.length; i++) {
            makeSpan(item[i], i);
          }

          if (textBox.current) {
            textBox.current.style.animation =
              "smoke 1s linear reverse forwards";

            textBox.current.style.animationDelay = `${
              item.length * speed.current
            }ms`;
          }

          setTimeout(() => {
            if (textBox.current) {
              textBox.current.style.opacity = "0";
              textBox.current.style.animation = "";
              textBox.current.style.animationDelay = "";
            }
          }, item.length * speed.current + 1000);
        }, accumulater);
      }
    });
  }, []);

  useEffect(() => {
    makeTextEffect();
    const repeater = setInterval(() => {
      makeTextEffect();
    }, 11000);

    return () => clearInterval(repeater);
  }, []);

  return (
    <HeaderContainer ref={header} nightmode={nightMode as string}>
      <BookChain></BookChain>
      <div className="header" ref={textBox}></div>
    </HeaderContainer>
  );
};

export default BookProfileHeader;
