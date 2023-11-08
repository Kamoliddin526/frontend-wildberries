import React, { useState } from "react";
import Location from "../../assets/icons/location.png";
import { Button, Modal } from "antd";
const LocationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="location-modal">
      <Button className="location-btn" onClick={showModal}>
        <img src={Location} alt="" />
        <b>Ангрен Улица Профессора Чикрызова 49</b>
      </Button>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
export default LocationModal;
