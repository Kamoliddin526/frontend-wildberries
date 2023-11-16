import React, { useState } from "react";
import { useCart } from "../../CartContext";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AddedCarts() {
  const [hoveredItem, setHoveredItem] = useState("none");
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    addToFavorites,
    deleteFromFavorites,
  } = useCart();

  const handlePlusClick = (item) => {
    addToCart(item);
  };

  const handleMinusClick = (item) => {
    removeFromCart(item);
  };

  const handleFavoriteClick = (item) => {
    addToFavorites(item);
    navigate("/login");
  };

  const handleDeleteClick = (item) => {
    deleteFromFavorites(item);
  };

  // Function to format price for display
  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString("en-US", {
      style: "currency",
      currency: "UZS",
    });
    return formattedPrice.replace(/\.\d\d$/, ""); // Remove cents
  };

  return (
    <div
      className="addedCarts"
      onMouseEnter={() => setHoveredItem("flex")}
      onMouseLeave={() => setHoveredItem("none")}
    >
      <div className="added-wrapper">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>В корзине пока пусто</h2>
            <p>
              Загляните на главную, чтобы выбрать товары или найдите нужное в
              поиске
            </p>
            <button className="go-back" onClick={() => navigate("/")}>
              Перейти на главную
            </button>
          </div>
        ) : (
          <>
            <ul className="left-cart">
              <h2>Корзина</h2>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img className="added-img" src={item.img} alt="" />
                  <b>{item.name}</b>
                  <div className="inc-dec">
                    <button onClick={() => handleMinusClick(item)}>-</button>
                    <button onClick={() => handlePlusClick(item)}>+</button>
                  </div>
                  <span className="item-price">{formatPrice(146100)} сум</span>
                  <div className="price-item">
                    <HeartOutlined
                      style={{ display: hoveredItem }}
                      className="cart-icon"
                      onClick={() => handleFavoriteClick(item)}
                    />
                    <DeleteOutlined
                      style={{ display: hoveredItem }}
                      className="cart-icon"
                      onClick={() => handleDeleteClick(item)}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <ul className="right-cart">
              <button>Выбрать адрес доставки</button>
              <div className="product">
                <b>Товары, 1 шт.</b>
                <b>{formatPrice(146100)} сум</b>
              </div>
              <div className="final">
                <span>Итого</span>
                <b>{formatPrice(146100)} сум</b>
              </div>
              <button> Заказать </button>
              <p>
                <span>Соглашаюсь</span> с правилами пользования торговой
                площадкой <span>и </span>
                возврата
              </p>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AddedCarts;
