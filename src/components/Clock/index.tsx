import useInterval from "@hooks/useInterval";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ClockContainer,
  Hourhand,
  InnerContainer,
  Minhand,
  Secondhand,
} from "./styles";

const Clock = () => {
  const hour = useRef<HTMLDivElement>(null);
  const min = useRef<HTMLDivElement>(null);
  const sec = useRef<HTMLDivElement>(null);

  const setDate = () => {
    if (hour && min && sec) {
      const date = new Date();
      const nowSec = date.getSeconds();
      const secDegree = nowSec * 6 + 90;
      sec.current!.style.transform = `rotate(${secDegree}deg)`;

      const nowMin = date.getMinutes();
      const minDegree = nowMin * 6 + (nowSec / 60) * 6 + 90;
      min.current!.style.transform = `rotate(${minDegree}deg)`;

      const nowHour = date.getHours();
      const hourDegree = nowHour * 30 + (nowMin / 60) * 30 + 90;
      hour.current!.style.transform = `rotate(${hourDegree}deg)`;
    }
  };

  useInterval(setDate, 1000);

  return (
    <ClockContainer>
      <InnerContainer>
        <Hourhand className="hand" ref={hour}></Hourhand>
        <Minhand className="hand" ref={min}></Minhand>
        <Secondhand className="hand" ref={sec}></Secondhand>
      </InnerContainer>
    </ClockContainer>
  );
};

export default Clock;
