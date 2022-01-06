import BookLoading from "@components/BookLoading";
import BookProfileHeader from "@components/BookProfileHeader";

import React, { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <BookLoading loadingColor="white" />
  ) : (
    <div>
      <BookProfileHeader></BookProfileHeader>
    </div>
  );
};

export default Profile;
