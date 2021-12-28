import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    if (savedCallback) savedCallback.current = callback;
  }, [savedCallback]);

  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
