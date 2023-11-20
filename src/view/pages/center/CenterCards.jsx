import React, { useEffect, useState } from "react";
import CardImg from "../../../assets/images/card.webp";
import { StarFilled } from "@ant-design/icons";
import { notification } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../../CartContext";
import axios from "axios";

const CenterCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [background, setBackground] = useState("#cb11ab");
  const [color, setColor] = useState("#fff");
  const [border, setBorder] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const { addToCart, cartItems } = useCart(); // Assuming cartItems is the state that holds added items
  const [products, setProducts] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    axios({
      url: "https://f-07-backend.vercel.app/api/v1/product",
      method: "get",
      headers: {
        apiKey: "4BpxLiCkQ6lKYBzQYLVu",
      },
    }).then((res) => setProducts(res.data));
  }, []);

  const openNotification = (placement) => {
    api.info({
      message: `Товар добавлен в корзину`,
      placement,
    });
  };

  const handleAddToCart = (description, price) => {
    openNotification("top");
    setBackground("#fff");
    setColor("#cb11ab");
    setBorder("2px solid #cb11ab");

    const newItem = {
      id: uuidv4(),
      img: CardImg,
      name: description,
      price: price,
    };
    addToCart(newItem);
  };

  return (
    <div className="wrapper">
      {contextHolder}
      {products.map((item, index) => (
        <div
          className="center-card"
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="img-wrp">
            <img src={CardImg} alt="card" />
            <button
              className="w-100 fast-look"
              style={{
                display: hoveredCard === index ? "block" : "none",
              }}
            >
              Быстрый просмотр
            </button>
          </div>
          <span>{item.price} sum</span>
          <br />
          <b className="product-name">
            <span>{item.productName} /</span> {item.description}
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
          </p>{" "}
          <button
            className="to-cart"
            onClick={() => handleAddToCart(item.description, item.price)}
            style={{
              display: hoveredCard === index ? "block" : "none",
              backgroundColor: background,
              color: color,
              border: border,
            }}
          >
            {" "}
            В корзину{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CenterCards;
