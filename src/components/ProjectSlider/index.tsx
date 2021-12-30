import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useCallback, useRef, useState } from "react";
import { Container, Controller, SliderContainer, SliderUl } from "./styles";

interface IProjectSlider {
  imgSrces: string[];
}

const ProjectSlider: FC<IProjectSlider> = ({ imgSrces }) => {
  const [number, setNumber] = useState(1);
  const scroll = useRef<HTMLUListElement>(null);

  const onLeftClick = useCallback(() => {
    if (scroll.current) {
      if (scroll.current.scrollLeft <= 5) return;
      scroll.current.scrollLeft -= scroll.current.offsetWidth;
      setNumber((state) => state - 1);
    }
  }, [scroll]);

  const onRightClick = useCallback(() => {
    if (scroll.current) {
      if (
        scroll.current.scrollLeft + scroll.current.offsetWidth >=
        scroll.current.scrollWidth
      ) {
        return;
      }
      scroll.current.scrollLeft += scroll.current.offsetWidth;
      setNumber((state) => state + 1);
    }
  }, [scroll]);

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
