import React, { useEffect, useRef } from "react";
import { Container } from "./styles";

const ProfileHeader = () => {
  const textBox = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const content =
      "I Love Making \n So I decieded to be Developer \n HI, My name is Myeoung Won";

    let i = 0;
    function typing() {
      let txt = content[i++];
      if (textBox && textBox.current) {
        textBox.current.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
          textBox.current.textContent = "";
          i = 0;
        }
      }
    }

    setInterval(typing, 200);
  }, []);

  return (
    <Container>
      <span ref={textBox} className="text"></span>
      <span className="blank">|</span>
    </Container>
  );
};

export default ProfileHeader;
