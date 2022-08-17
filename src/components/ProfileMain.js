import React, { useState } from "react";
import Tweets from "./Tweets";
import Follow from "./Follow";

const ProfileMain = () => {
  const [currentDisplay, setCurrentDisplay] = useState("Tweets");

  const setDisplay = () => {
    switch (currentDisplay) {
      case "Tweets":
        return <Tweets></Tweets>;
      case "Followers":
        return <Follow></Follow>;
      case "Following":
        return <Follow></Follow>;
      case "Favorites":
        return <Tweets></Tweets>;
      default:
        return <Tweets></Tweets>;
    }
  };

  return <div>{setDisplay()}</div>;
};

export default ProfileMain;
