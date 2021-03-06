import BookLoading from "@components/BookLoading";
import BookProfileHeader from "@components/BookProfileHeader";
import BookProfileMyInfo from "@components/BookProfileMyInfo";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Wrapper } from "./styles";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ProfileContainer } from "./styles";
import Contact from "@components/Contact";
import { Link } from "react-router-dom";
import { HomeBtn } from "@components/LifeBooks/styles";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState<string>("");
  const header = useRef<HTMLDivElement>(null);
  const myInfo = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const onLeftClick = useCallback(() => {
    if (page !== 1) {
      setPage((prev) => prev - 1);
      setDirection("left");
    }
  }, [page]);

  const onRightClick = useCallback(() => {
    if (page !== 3) {
      setPage((prev) => prev + 1);
      setDirection("right");
    }
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (header.current && myInfo.current && wrapper.current) {
      //z-index: 2 1 0

      if (page === 2 && direction === "right") {
        header.current.style.transform = "rotateY(180deg)";
        wrapper.current.style.overflow = "auto";
        setTimeout(() => {
          if (header.current) {
            header.current.style.zIndex = "0";
          }
        }, 200); // 0 1 0
      } else if (page === 3 && direction === "right") {
        myInfo.current.style.transform = "rotateY(180deg)";
        wrapper.current.style.overflow = "hidden";
      } else if (page === 2 && direction === "left") {
        myInfo.current.style.transform = "";
        myInfo.current.style.display = "flex";
        wrapper.current.style.overflow = "auto";
      } else if (page === 1 && direction === "left") {
        header.current.style.transform = "";
        wrapper.current.style.overflow = "hidden";
        setTimeout(() => {
          if (header.current) {
            header.current.style.zIndex = "2";
          }
        }, 200);
      }
      setTimeout(() => {
        if (wrapper.current) wrapper.current.scrollTop = 0;
      }, 200);
    }
  }, [page]);

  return loading ? (
    <BookLoading loadingColor="white" />
  ) : (
    <>
      <Wrapper>
        <ProfileContainer ref={wrapper}>
          <BookProfileHeader header={header}></BookProfileHeader>
          <BookProfileMyInfo myinfo={myInfo}></BookProfileMyInfo>
          <Contact contact={contact}></Contact>
        </ProfileContainer>
      </Wrapper>
      <Controller>
        <div onClick={onLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </div>
        <div onClick={onRightClick}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </div>
        <Link to="/">
          <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/homeIcon.png"></img>
        </Link>
      </Controller>
    </>
  );
};

export default Profile;
