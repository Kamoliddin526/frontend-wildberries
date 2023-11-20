import React, { useState } from "react";
import { useCart } from "../../CartContext";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AddedCarts() {
  const [hoveredItem, setHoveredItem] = useState("none");
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    addToFavorites,
    addToCart,
    decreaseQuantity,
  } = useCart();

  const handlePlusClick = (item) => {
    const updatedItem = { ...item, price: item.price + 1 }; // Assuming you want to increase the price by 1
    addToCart(updatedItem);
  };

  const handleMinusClick = (item) => {
    decreaseQuantity(item);
  };

  const handleFavoriteClick = (item) => {
    addToFavorites(item);
    navigate("/login");
  };

  const handleDeleteClick = (item) => {
    removeFromCart(item); // Use removeFromCart instead of deleteFromFavorites
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
                  <span className="item-price">
                    {formatPrice(item.price)} сум
                  </span>
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
                <b>Товары, {cartItems.length} шт.</b>
                <b>
                  {formatPrice(
                    cartItems.reduce((sum, item) => sum + item.price, 0)
                  )}{" "}
                  сум
                </b>
              </div>
              <div className="final">
                <span>Итого</span>
                <b>
                  {formatPrice(
                    cartItems.reduce((sum, item) => sum + item.price, 0)
                  )}{" "}
                  сум
                </b>
              </div>
              <button onClick={() => navigate('/login')} className="order-btn"> Заказать </button>
              <p>
                <span>Соглашаюсь</span> с правилами пользования торговой
                площадкой <span>и </span>
                возврата
              </p>
            </ul>
            <div className="method">
              <div className="way-delivery">
                <h2>Способ доставки</h2>
                <p>Выбрать адрес доставки</p>
              </div>
              <div className="wrp-two">
                <div className="way-pay">
                  <h2>Способ оплаты</h2>
                  <p>
                    Войти или зарегистрироваться, <span>чтобы выбрать способ оплаты</span>
                  </p>
                </div>
                <div className="private">
                  <h2>Мои данные</h2>
                  <p>
                    Войти или зарегистрироваться, <span>чтобы оформить заказ</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AddedCarts;
