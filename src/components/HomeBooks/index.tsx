import React, { useCallback, useState } from "react";
import {
  Book,
  BookContainer,
  Books,
  Container,
  LeftPillar,
  Marbles,
  Ornaments,
  RightPillar,
  Wrapper,
} from "./styles";
import bookCss from "@utils/json/bookCss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const HomeBooks = () => {
  const navigator = useNavigate();
  const [nightMode, setNightMode] = useState(
    localStorage.getItem("nightmode") === "true" ? "true" : "false"
  );
  const onBookClick = useCallback(
    (key: number) => (e: any) => {
      switch (key) {
        case 0:
          navigator("/profile");
          break;
        case 3:
          navigator("/projects");
          break;
        case 6:
          navigator("/books");
          break;
        case 8:
          navigator("/concept");
          break;
        default:
          return;
      }
    },
    []
  );

  const onNigtModeClick = useCallback(() => {
    setNightMode((prev) => (prev === "true" ? "fase" : "true"));
    if (nightMode === "false") {
      // nightmode를 클릭했다는 이야기
      localStorage.setItem("nightmode", "true");
    } else if (nightMode === "true") {
      // nightmode를 껏다는 이야기
      localStorage.setItem("nightmode", "false");
    }
  }, [nightMode]);

  return (
    <Wrapper mode={nightMode}>
      <Container>
        <Books>
          <BookContainer>
            {bookCss.map((item, key) => (
              <Book
                key={key}
                color={item.color}
                borderColor={item.borderColor}
                width={item.width}
                height={item.height}
                animation={item.animation ? item.animation : false}
                onClick={onBookClick(key)}
              >
                <span>{item.title}</span>
              </Book>
            ))}
          </BookContainer>
          <div className="bookSelf"></div>
        </Books>
        <Ornaments>
          <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%9E%90%EB%8F%99%EC%B0%A8.png" />
          <div className="bookSelf"></div>
        </Ornaments>
        <Marbles>
          <img src="https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%84%A0%EC%9D%B8%EC%9E%A5.png" />
          <div className="marbles">
            {nightMode === "true" ? (
              <div className="nightMode marble" onClick={onNigtModeClick}>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              </div>
            ) : (
              <div className="morningMode marble" onClick={onNigtModeClick}>
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
              </div>
            )}
            <a
              className="github marble"
              target="_blank"
              href="https://github.com/auddnjs2008"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a
              className="velog marble"
              target="_blank"
              href="https://velog.io/@auddnjs2008"
            >
              Velog
            </a>
          </div>
          <div className="bookSelf"></div>
        </Marbles>
        <LeftPillar></LeftPillar>
        <RightPillar></RightPillar>
      </Container>
    </Wrapper>
  );
};

export default HomeBooks;
