import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Outlet, useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  return (
    <div className="address">
      <nav className="address-nav">
        <ul>
          <li onClick={() => navigate("/address/orderhow")}>
            Как сделать заказ
          </li>
          <li onClick={() => navigate("/address/payout")}>Способы оплаты</li>
          <li onClick={() => navigate("/address/delivery")}>Доставка</li>
          <li onClick={() => navigate("/address/return")}>Возврат товара</li>
          <li onClick={() => navigate("/address/clothesreturn")}>
            Возврат денежных средств
          </li>
          <li onClick={() => navigate("/address/rulesell")}>Правила продажи</li>
          <li onClick={() => navigate("/address/ruletrading")}>
            Правила пользования торговой площадкой
          </li>
          <li onClick={() => navigate("/address/questions")}>
            Вопросы и ответы
          </li>
        </ul>
      </nav>
      <Carousel className="carousel-display" showThumbs={false}>
        <div>
          <li onClick={() => navigate("/address/orderhow")}>
            Как сделать заказ
          </li>
        </div>
        <div>
          <li onClick={() => navigate("/address/payout")}>Способы оплаты</li>
        </div>
        <div>
          {" "}
          <li onClick={() => navigate("/address/delivery")}>Доставка</li>
        </div>
        <div>
          <li onClick={() => navigate("/address/return")}>Возврат товара</li>
        </div>
        <div>
          {" "}
          <li onClick={() => navigate("/address/clothesreturn")}>
            Возврат денежных средств
          </li>
        </div>
        <div>
          <li onClick={() => navigate("/address/rulesell")}>Правила продажи</li>
        </div>
        <div>
          <li onClick={() => navigate("/address/ruletrading")}>
            Правила пользования торговой площадкой
          </li>
        </div>
        <div>
          <li onClick={() => navigate("/address/questions")}>
            Вопросы и ответы
          </li>
        </div>
      </Carousel>
      <Outlet />
    </div>
  );
};

export default Address;
