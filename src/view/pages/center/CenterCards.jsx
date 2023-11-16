import React, { useState } from "react";
import CardImg from "../../../assets/images/card.webp";
import { StarFilled } from "@ant-design/icons";
import { notification } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../../CartContext";

const CenterCards = () => {
  const [cartButton, setCartButton] = useState("none");
  const [background, setBackground] = useState("#cb11ab");
  const [color, setColor] = useState("#fff");
  const [border, setBorder] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const { addToCart } = useCart();

  const handleMouseEnter = () => {
    setCartButton("block");
  };

  const handleMouseLeave = () => {
    setCartButton("none");
  };

  const openNotification = (placement) => {
    api.info({
      message: `Товар добавлен в корзину`,
      placement,
    });
  };

  const handleAddToCart = () => {
    openNotification("top");
    setBackground("#fff");
    setColor("#cb11ab");
    setBorder("2px solid #cb11ab");

    const newItem = {
      id: uuidv4(),
      img: CardImg,
      name: "Raygood / Капучинатор электрический и вспениватель молока Raygood",
      price: "19 300 so'm",
    };
    addToCart(newItem);
  };

  return (
    <div className="wrapper">
      {contextHolder}
      <div
        className="center-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-wrp">
          <img src={CardImg} alt="card" />
        </div>
        <span className="price">146 100 so'm</span>
        <br />
        <b className="product-name">
          <span>Raygood /</span> Капучинатор электрический и вспениватель молока
          Raygood
        </b>
        <div className="rate">
          <div className="star-rate">
            <img src="" alt="" />
            <span>
              <StarFilled className="star" /> 4.6 *
            </span>
          </div>
          <div className="number-rate">
            <span>77 845 </span>
          </div>
        </div>
        <p className="delivery">
          <span>Доставка</span> 19 ноября
        </p>
        <button
          className="to-cart"
          onClick={handleAddToCart}
          style={{
            display: cartButton,
            backgroundColor: background,
            color: color,
            border: border,
          }}
        >
          {" "}
          В корзину{" "}
        </button>
      </div>
    </div>
  );
};
export default CenterCards;
