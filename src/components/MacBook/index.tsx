import MacBookLoading from "@components/MacBookLoading";
import React, { useCallback, useState } from "react";
import { MacBookContainer } from "./styles";

const MacBook = () => {
  const [online, setOnline] = useState(false);
  const onClick = useCallback(() => {
    setOnline((state) => !state);
  }, []);

  return online ? (
    <MacBookLoading state="open"></MacBookLoading>
  ) : (
    <MacBookContainer onClick={onClick}></MacBookContainer>
  );
};

export default MacBook;
