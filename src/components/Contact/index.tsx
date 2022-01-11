import { faBloggerB, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ContactInfo, Container } from "./styles";

const Contact = () => {
  return (
    <Container>
      <ContactInfo>
        <h1>Contact</h1>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </span>
            <div>
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
            <div>
              <h2>Email</h2>
              <div>auddnjs2008@gmail.com</div>
            </div>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBloggerB}></FontAwesomeIcon>
            </span>
            <div>
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
