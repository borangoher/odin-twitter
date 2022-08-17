import Modal from "react-bootstrap/Modal";
import React from "react";
import Stack from "react-bootstrap/Stack";
import Tweet from "./Tweet";

const Tweets = () => {
  return (
    <Modal
      show={true}
      backdrop={false}
      keyboard={false}
      className="overflow-auto pt-0 pb-0 mt-0 mb-0 bg-primary p-1"
      animation={false}
      centered
      style={{
        width: "auto",
        left: "33.5%",
        top: "22vh",
        height: "fit-content",
      }}
    >
      <Stack gap={1} className="bg-primary" style={{ width: "auto" }}>
        <Tweet />
        <Tweet />
      </Stack>
    </Modal>
  );
};

export default Tweets;
