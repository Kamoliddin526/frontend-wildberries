import React from "react";
import CurrencyModal from "../../components/CurrencyModal";
import LocationModal from "../../components/LocationModal";
import Logo from "../../../assets/icons/logo.png";
import Location from "../../../assets/icons/location2.png";
import User from "../../../assets/icons/user.png";
import Cart from "../../../assets/icons/cart.png";
import { useNavigate } from "react-router-dom";
import { SearchOutlined, CameraOutlined } from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="upper-nav">
        <CurrencyModal />
        <LocationModal />
        <button className="sell-wildberries">
          {" "}
          <a href="https://seller.wildberries.ru/" target="blank">
            {" "}
            Продавайте на Wildberries
          </a>
        </button>
        <button className="work-wildberries" onClick={() => navigate("/work")}>
          Работа в Wildberries
        </button>
      </div>
      <div className="lower-nav">
        <div className="menu-nav">
          <div className="menu-dots">
            <div className="menu-dot1"></div>
            <div className="menu-dot2"></div>
            <div className="menu-dot3"></div>
          </div>
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="input-nav">
          <SearchOutlined className="search" />
          <input type="text" placeholder="Я ищу..." />
          <CameraOutlined className="camera" />
        </div>
        <div className="three-menu">
          <div onClick={() => navigate("/address/delivery")} className="loc">
            <img src={Location} alt="" />
            <p> Адреса </p>
          </div>
          <div onClick={() => navigate("/login")} className="user">
            <img src={User} alt="" />
            <p> Войти </p>
          </div>
          <div onClick={() => navigate("/cart")} className="cart">
            <img src={Cart} alt="" />
            <p> Корзина </p>
          </div>
        </div>
      </div>
      <div className="res-main-nav">
        <div className="res-logo">
          <img src={Logo} alt="" />
        </div>
        <CurrencyModal />
        <div className="nav-search">
          <img src={Location} alt="" />
          <SearchOutlined className="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
