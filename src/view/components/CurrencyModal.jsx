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
  const [show, setShow] = useState(false);

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
      <Button
        className="currency-btn"
        onClick={showModal}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img src={Uzb} alt="" />
        <b>UZB</b>
      </Button>
      <div style={{ display: show ? "block" : "none" }} className="modal-cur">
        <h4>Выберите валюту</h4>
        <div className="d-flex align-items-center gap-3 my-2 ">
          <img src={Rus} alt="" />
          <b>Rus</b>
          <span>Узбекский сум</span>
        </div>
        <div className="d-flex align-items-center gap-3 my-2 ">
          <img src={Kir} alt="" />
          <b>Kir</b>
          <span>Узбекский сум</span>
        </div>
        <div className="d-flex align-items-center gap-3 my-2 ">
          <img src={Kaz} alt="" />
          <b>Kaz</b>
          <span>Узбекский сум</span>
        </div>
        <div className="d-flex align-items-center gap-3 my-2 ">
          <img src={Far} alt="" />
          <b>Far</b>
          <span>Узбекский сум</span>
        </div>
        <div className="d-flex align-items-center gap-3 my-2 ">
          <img src={Bel} alt="" />
          <b>Bel</b>
          <span>Узбекский сум</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyModal;
