import React from "react";
import Free from "../../../../../assets/icons/free.png";
import Box from "../../../../../assets/icons/box.png";
import Refresh from "../../../../../assets/icons/refresh.png";
import Dron from "../../../../../assets/images/delivery-dron.png";

const Delivery = () => {
  return (
    <div className="delivery">
      <h2>Доставка</h2>
      <div className="fast-shipping">
        <h1>Быстро доставим любой Ваш заказ по всей России</h1>
        <div className="left-shipping">
          <div className="free">
            <img src={Free} alt="" />
            <p>Бесплатная доставка. В большинстве населенных пунктов</p>
          </div>
          <div className="refresh">
            <img src={Refresh} alt="" />
            <p>Доставка круглый год по всей России</p>
          </div>
          <div className="box">
            <img src={Box} alt="" />
            <p>Возврат товара при примерке</p>
          </div>
        </div>
        <img className="dron" src={Dron} alt="" />
        <button>Узнать условия</button>
      </div>
      <h1>30 123</h1>
      <p>пункта выдачи</p>
        <h1>Информация о доставке и пунктах выдачи</h1>
      <div className="information-delivery">
        <div className="address-map">
          <div className="section">
            <button>Пункт выдачи</button>
            <button>Курьером</button>
          </div>
          <div className="input-button">
            <input type="text" placeholder="Введите адрес" />
            <button>Найти</button>
          </div>
        </div>
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1CoAHAaXYCcHudjLXQBR0Nm1Gjkg&hl=en_US&ehbc=2E312F"
              width="865.6"
              height="688"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default Delivery;
