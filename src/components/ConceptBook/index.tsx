import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ConceptBookContainer,
  ConceptSection,
  Container,
  Controller,
} from "./styles";

const ConceptBook = () => {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState("");
  const [nightmode] = useState(
    localStorage.getItem("nightmode")
      ? localStorage.getItem("nightmode")
      : "false"
  );
  const pageOne = useRef<HTMLElement>(null);
  const pageTwo = useRef<HTMLElement>(null);

  const onUpClick = useCallback(() => {
    setDirection("up");
    if (page !== 3) setPage((prev) => prev + 1);
  }, [page]);
  const onDownClick = useCallback(() => {
    setDirection("down");
    if (page !== 1) setPage((prev) => prev - 1);
  }, [page]);

  useEffect(() => {
    if (page === 2 && direction === "up") {
      if (pageOne.current) {
        pageOne.current.style.transform = "rotateX(180deg)";
      }
    } else if (page === 3 && direction === "up") {
      if (pageTwo.current) {
        pageTwo.current.style.transform = "rotateX(180deg)";
        pageTwo.current.style.zIndex = "1";
      }
    } else if (page === 2 && direction === "down") {
      if (pageTwo.current) {
        pageTwo.current.style.transform = "";
        pageTwo.current.style.zIndex = "";
      }
    } else if (page === 1 && direction === "down") {
      if (pageOne.current) {
        pageOne.current.style.transform = "";
      }
    }
  }, [page, direction]);

  return (
    <Container nightmode={nightmode as string}>
      <ConceptBookContainer>
        <ConceptSection nightmode={nightmode as string}>
          <div className="image">
            <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/content3.png" />
          </div>
          <div className="content">
            <h2>Flip 효과</h2>
            <p>
              책을 하면 생각나는 건 당연히 책장을 넘기는 동작을 대표적으로
              생각하게 됩니다. 책을 읽는 듯한 느낌을 주기 위해 이런 flip 효과를
              곳곳에 넣었습니다.
            </p>
          </div>
        </ConceptSection>
        <ConceptSection nightmode={nightmode as string} ref={pageTwo}>
          <div className="image">
            <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/concept2.PNG" />
          </div>
          <div className="content">
            <h2>3D 캐러셀</h2>
            <p>
              책의 입체감을 주기 위해 만들게 되었습니다. 회전 책꽂이에서
              아이디어를 얻어 책꽂이를 돌리면서 원하는 책을 선택한다는 느낌을
              위해 3d 캐러셀을 제작하게 되었습니다. css의 perspective 와 rotate
              를 이용해 제작을 하였습니다.
            </p>
          </div>
        </ConceptSection>
        <ConceptSection nightmode={nightmode as string} ref={pageOne}>
          <div className="image">
            <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/concept1.PNG" />
          </div>
          <div className="content">
            <h2>Book</h2>
            <p>
              책장으로 디자인을 하였습니다. 한 사람의 이야기는 여러 주제의
              책들로 이루어진 모음집이라 생각을 하였습니다. 총 4권의 책으로
              구성이 되어있습니다.
            </p>
          </div>
        </ConceptSection>
        <Controller>
          <span onClick={onUpClick}>
            <FontAwesomeIcon icon={faChevronCircleUp}></FontAwesomeIcon>
          </span>
          <span onClick={onDownClick}>
            <FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon>
          </span>
          <Link to="/">
            <img
              src={
                "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/homeIcon.png"
              }
            />
          </Link>
        </Controller>
      </ConceptBookContainer>
    </Container>
  );
};

export default ConceptBook;
