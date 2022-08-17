import React from "react";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import ProfileSmall from "./ProfileSmall";

const Follow = () => {
  return (
    <Modal
      show={true}
      backdrop={false}
      keyboard={false}
      className="overflow-auto pt-0 pb-0 mt-0 mb-0 bg-primary p-1"
      animation={false}
      centered
      style={{ width: "auto", left: "35%", top: "10%", height: "fit-content" }}
    >
      <Stack gap={1} className="bg-primary" style={{ width: "auto" }}>
        <ProfileSmall />
        <ProfileSmall />
      </Stack>
    </Modal>
  );
};

export default Follow;
