import BookChain from "@components/BookChain";
import {
  faCalendar,
  faMapMarkedAlt,
  faMapMarker,
  faPencilAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import { AboutMe, Container, Skills } from "./styles";

interface IBookProfileMyInfo {
  myinfo: React.RefObject<HTMLDivElement>;
}

const BookProfileMyInfo: FC<IBookProfileMyInfo> = ({ myinfo }) => {
  const [nightmode] = useState(
    localStorage.getItem("nightmode")
      ? localStorage.getItem("nightmode")
      : "false"
  );

  return (
    <Container ref={myinfo} nightmode={nightmode as string}>
      <BookChain></BookChain>

      <AboutMe>
        <h1>About me</h1>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon size={"2x"} icon={faUser}></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>저자</h2>
              <div>김명원</div>
            </div>
          </li>

          <li>
            <span>
              <FontAwesomeIcon size={"2x"} icon={faCalendar}></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>생년원일</h2>
              <div>96.01.29</div>
            </div>
          </li>

          <li>
            <span>
              <FontAwesomeIcon
                size={"2x"}
                icon={faMapMarkedAlt}
              ></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>주소지</h2>
              <div>경기도 안산시</div>
            </div>
          </li>

          <li>
            <span>
              <FontAwesomeIcon size={"2x"} icon={faPencilAlt}></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>학력</h2>
              <div>
                숭실대학교
                <br />
                (IT 융합과)
              </div>
            </div>
          </li>
        </ul>
      </AboutMe>
      <Skills>
        <h1>Skills</h1>
        <div className="frontend">
          <h2>Frontend</h2>
          <div>
            <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
            <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" />
            <img src="https://img.shields.io/badge/Redux-Saga-999999?style=flat-square&logo=Redux-Saga&logoColor=white" />
          </div>
        </div>
        <div className="backend">
          <h2>Backend</h2>
          <div>
            <img src="https://img.shields.io/badge/NodeJs-339933?style=flat-square&logo=Node.js&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/SocketIo-010101?style=flat-square&logo=Socket.io&logoColor=white" />
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=Amazon DynamoDB&logoColor=white" />
          </div>
        </div>
        <div className="etc">
          <h2>Etc</h2>
          <div>
            <img src="https://img.shields.io/badge/AWS-3766AB?style=flat-square&logo=Amazon AWS&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white" />
          </div>
        </div>
      </Skills>
    </Container>
  );
};

export default BookProfileMyInfo;
