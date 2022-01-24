import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Container, Controller, SliderContainer, SliderUl } from "./styles";

interface IProjectSlider {
  imgSrces: string[];
}

const ProjectSlider: FC<IProjectSlider> = ({ imgSrces }) => {
  const [number, setNumber] = useState(1);
  const scroll = useRef<HTMLUListElement>(null);

  const onLeftClick = useCallback(() => {
    if (scroll.current) {
      if (
        number === 1 ||
        scroll.current.scrollLeft !== scroll.current.offsetWidth * (number - 1)
      )
        return;
      scroll.current.scrollLeft -= scroll.current.offsetWidth;
      setNumber((state) => state - 1);
    }
  }, [scroll, number]);

  const onRightClick = useCallback(() => {
    if (scroll.current) {
      if (
        number === imgSrces.length ||
        scroll.current.scrollLeft !== scroll.current.offsetWidth * (number - 1)
      ) {
        return;
      }
      scroll.current.scrollLeft += scroll.current.offsetWidth;
      setNumber((state) => state + 1);
    }
  }, [scroll, number]);

  const reSize = useCallback(() => {
    if (scroll.current) {
      scroll.current.style.scrollBehavior = "unset";
      setTimeout(() => {
        if (scroll.current) scroll.current.style.scrollBehavior = "smooth";
      }, 300);
      scroll.current.scrollLeft =
        document.body.offsetWidth > 700
          ? 536 * (number - 1)
          : 300 * (number - 1);
    }
  }, [number]);

  useEffect(() => {
    window.addEventListener("resize", reSize);

    return () => window.removeEventListener("resize", reSize);
  }, [number]);

  return (
    <Container>
      <SliderContainer>
        <SliderUl ref={scroll}>
          {imgSrces.map((item, index) => (
            <li key={index}>
              <img src={item}></img>
            </li>
          ))}
        </SliderUl>
        <Controller>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={onLeftClick}
          ></FontAwesomeIcon>
          <span>
            {number}/{imgSrces.length}
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={onRightClick}
          ></FontAwesomeIcon>
        </Controller>
      </SliderContainer>
    </Container>
  );
};

export default ProjectSlider;
