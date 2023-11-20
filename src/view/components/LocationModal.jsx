import React, { useState } from "react";
import Location from "../../assets/icons/location.png";
import { Button } from "antd";

const LocationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="location-modal">
      <Button className="location-btn" onClick={showModal}>
        <img src={Location} alt="" />
        <b>Ангрен Улица Профессора Чикрызова 49</b>
      </Button>
      <div
        className="modal-loc"
        style={{
          display: isModalOpen ? "flex" : "none",
        }}
      >
        <div className="left-loc">
          <h3>Выберите способ доставки</h3>
          <div className="loc-button">
            <button>Пункт выдачи</button>
            <button>Курьером</button>
          </div>
        </div>
        <div className="right-loc">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12042.969145396088!2d70.0750158!3d41.0090136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9d3e9aca661%3A0x897e93ab2064569c!2sAngren!5e0!3m2!1sen!2s!4v1700298169837!5m2!1sen!2s"
            width="1059"
            height="703"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="exit" onClick={showModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
