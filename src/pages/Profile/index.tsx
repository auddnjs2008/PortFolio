import BookLoading from "@components/BookLoading";
import BookProfileHeader from "@components/BookProfileHeader";
import BookProfileMyInfo from "@components/BookProfileMyInfo";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller } from "./styles";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ProfileContainer } from "./styles";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState<string>("");
  const header = useRef<HTMLDivElement>(null);
  const myInfo = useRef<HTMLDivElement>(null);

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
    if (header.current && myInfo.current) {
      if (page === 2 && direction === "right") {
        header.current.style.height = "80%";
        header.current.style.transform = "rotateY(180deg)";
      } else if (page === 3 && direction === "right") {
        myInfo.current.style.height = "80%";
        myInfo.current.style.transform = "rotateY(180deg)";
      } else if (page === 2 && direction === "left") {
        myInfo.current.style.transform = "";
      } else if (page === 1 && direction === "left") {
        header.current.style.transform = "";
      }
    }
  }, [page]);

  return loading ? (
    <BookLoading loadingColor="white" />
  ) : (
    <ProfileContainer>
      <BookProfileHeader header={header}></BookProfileHeader>
      <BookProfileMyInfo myinfo={myInfo}></BookProfileMyInfo>
      <Controller>
        <span onClick={onLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <span onClick={onRightClick}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </span>
      </Controller>
    </ProfileContainer>
  );
};

export default Profile;
