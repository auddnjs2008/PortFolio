import React, { useCallback, useEffect, useRef } from "react";
import { Container } from "./styles";

const BookChain = () => {
  const container = useRef<HTMLDivElement>(null);

  const makeFactors = useCallback(() => {
    if (container.current) {
      const wrapper = document.createElement("div");
      wrapper.className = "wrapper";
      const chain = document.createElement("div");
      chain.className = "chainFrame";

      const chainFrame = document.createElement("div");
      chainFrame.className = "chainCircle";

      wrapper.append(chain, chainFrame);
      container.current.appendChild(wrapper);
    }
  }, []);

  const makeChain = useCallback(() => {
    for (let i = 0; i < 5; i++) {
      makeFactors();
    }
  }, []);

  useEffect(() => {
    makeChain();
  }, []);
  return <Container ref={container}></Container>;
};

export default BookChain;
