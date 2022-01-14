import BookChain from "@components/BookChain";
import { faBloggerB, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import { ContactInfo, Container } from "./styles";

interface IContact {
  contact: React.RefObject<HTMLDivElement>;
}

const Contact: FC<IContact> = ({ contact }) => {
  const [nightmode] = useState(
    localStorage.getItem("nightmode")
      ? localStorage.getItem("nightmode")
      : "false"
  );

  return (
    <Container ref={contact} nightmode={nightmode as string}>
      <BookChain></BookChain>
      <ContactInfo>
        <h1>Contact</h1>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>github</h2>
              <a target="_blank" href="https://github.com/auddnjs2008">
                https://github.com/auddnjs2008
              </a>
            </div>
          </li>

          <li>
            <span>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>Email</h2>
              <div>auddnjs2008@gmail.com</div>
            </div>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBloggerB}></FontAwesomeIcon>
            </span>
            <div className="content">
              <h2>Blog</h2>
              <a target="_blank" href="https://velog.io/@auddnjs2008">
                https://velog.io/@auddnjs2008
              </a>
            </div>
          </li>
        </ul>
      </ContactInfo>
    </Container>
  );
};

export default Contact;
