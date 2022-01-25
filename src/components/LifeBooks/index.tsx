import LifeSayings from "@utils/json/LifeSayings";
import React, { useCallback, useRef } from "react";
import { Book, Container, RepresentBook } from "./styles";

const LifeBooks = () => {
  const slider = useRef<HTMLDivElement>(null);
  const startPointer = useRef(1);
  const scrollLeft = useRef(1);
  const isDown = useRef(false);

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
    <Container>
      <div
        className="wrapper"
        ref={slider}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <RepresentBook></RepresentBook>
        {LifeSayings.map((item) => (
          <>
            <Book></Book>
            <Book>
              <p>{item.content}</p>
            </Book>
          </>
        ))}
      </div>
    </Container>
  );
};

export default LifeBooks;
