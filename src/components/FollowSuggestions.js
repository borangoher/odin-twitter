import React from "react";
import ProfileSmall from "./ProfileSmall";
import Stack from "react-bootstrap/Stack";

const FollowSuggestions = () => {
  return (
    <Stack
      direction="vertical"
      className="border border-dark bg-dark"
      gap={0}
      style={{ width: "24.1rem" }}
    >
      <ProfileSmall />
      <ProfileSmall />
      <ProfileSmall />
      <ProfileSmall />
    </Stack>
  );
};

export default FollowSuggestions;
