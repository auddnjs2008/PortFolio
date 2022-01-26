import LifeSayings from "@utils/json/LifeSayings";
import React, { useCallback, useRef, useState } from "react";
import { Book, Container, HomeBtn } from "./styles";

const LifeBooks = () => {
  const slider = useRef<HTMLDivElement>(null);
  const startPointer = useRef(1);
  const scrollLeft = useRef(1);
  const isDown = useRef(false);
  const [nightmode] = useState(
    localStorage.getItem("nightmode")
      ? localStorage.getItem("nightmode")
      : "false"
  );

  const onMouseDown = useCallback(
    (e) => {
      if (slider.current && startPointer.current) {
        slider.current.classList.add("active");
        startPointer.current = e.pageX - slider.current.offsetLeft;
        scrollLeft.current = slider.current.scrollLeft;
        isDown.current = true;
      }
    },
    [slider.current, startPointer.current]
  );

  const onMouseUp = useCallback(() => {
    if (slider.current) {
      slider.current.classList.remove("active");
      isDown.current = false;
    }
  }, [slider.current]);

  const onMouseLeave = useCallback(() => {
    if (slider.current) {
      slider.current.classList.remove("active");
      isDown.current = false;
    }
  }, [slider.current]);

  const onMouseMove = useCallback(
    (e) => {
      if (!isDown.current) return;

      e.preventDefault();
      if (slider.current) {
        const x = e.pageX - slider.current.offsetLeft;

        const walk = (x - startPointer.current) * 3;
        slider.current.scrollLeft = scrollLeft.current - walk;
      }
    },
    [slider.current, startPointer.current, scrollLeft.current]
  );

  return (
    <Container nightmode={nightmode!}>
      <div
        className="wrapper"
        ref={slider}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <Book imgsrc=""></Book>
        <Book imgsrc="">
          <p>
            인생은 한 권의 책과 같다. 어리석은 사람은 대충 책장을 넘기지만,
            현명한 사람은 공들여서 읽는다. 그들은 단 한 번밖에 읽지 못하는 것을
            알기 때문이다.{" "}
          </p>
          <h2>-장 파울-</h2>
        </Book>
        {LifeSayings.map((item) => (
          <>
            <Book imgsrc={item.imgsrc}></Book>
            <Book imgsrc="">
              <p>{item.content}</p>
              <h2>{item.title}</h2>
            </Book>
          </>
        ))}
        <Book imgsrc=""></Book>
      </div>
      <HomeBtn to="/">
        <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/homeIcon.png"></img>
      </HomeBtn>
    </Container>
  );
};

export default LifeBooks;
