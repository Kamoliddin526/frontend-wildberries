import React, { useState } from "react";
import Uzb from "../../assets/icons/uzb.png";
import Rus from "../../assets/icons/rus.webp";
import Kir from "../../assets/icons/kir.webp";
import Kaz from "../../assets/icons/kaz.webp";
import Far from "../../assets/icons/far.webp";
import Bel from "../../assets/icons/bel.webp";
import { Button, Modal } from "antd";

const CurrencyModal = () => {
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
    <div className="currency-modal">
      <Button className="currency-btn" onClick={showModal}>
        <img src={Uzb} alt="" />
        <b>UZB</b>
      </Button>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="modal-cur"
      >
        <h2>Выберите валюту</h2>
        <div className="d-flex">
          <img src={Rus} alt="" />
          <b>Rus</b>
        </div>
        <div className="d-flex">
          <img src={Kir} alt="" />
          <b>Kir</b>
        </div>
        <div className="d-flex">
          <img src={Kaz} alt="" />
          <b>Kaz</b>
        </div>
        <div className="d-flex">
          <img src={Far} alt="" />
          <b>Far</b>
        </div>
        <div className="d-flex">
          <img src={Bel} alt="" />
          <b>Bel</b>
        </div>
      </Modal>
    </div>
  );
};

export default CurrencyModal;
