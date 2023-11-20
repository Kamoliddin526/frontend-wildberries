import React, { useState } from "react";
import CurrencyModal from "../../components/CurrencyModal";
import Logo from "../../../assets/icons/logo.png";
import Location from "../../../assets/icons/location2.png";
import User from "../../../assets/icons/user.png";
import Cart from "../../../assets/icons/cart.png";
import { useNavigate } from "react-router-dom";
import { SearchOutlined, CameraOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import LocationModal from "../../components/LocationModal";
import Nav1 from "../../../assets/images/nav1.svg";
import Nav2 from "../../../assets/images/nav2.svg";
import Nav3 from "../../../assets/images/nav3.svg";
import Nav4 from "../../../assets/images/nav4.svg";
import Nav5 from "../../../assets/images/nav5.svg";
import Nav6 from "../../../assets/images/nav6.svg";
import Nav7 from "../../../assets/images/nav7.svg";
import Nav8 from "../../../assets/images/nav8.svg";
import Nav9 from "../../../assets/images/nav9.svg";
import Nav10 from "../../../assets/images/nav10.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [hoveredDrawer, setHoveredDrawer] = useState(null);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const handleMouseEnter = (drawerId) => {
    setHoveredDrawer(drawerId);
  };

  const handleMouseLeave = () => {
    setHoveredDrawer(null);
  };

  const drawers = [
    { id: 1, title: "Чёрная пятница", image: Nav1 },
    { id: 2, title: "Женщинам", image: Nav2 },
    { id: 3, title: "Обувь", image: Nav3 },
    { id: 4, title: "Детям", image: Nav4 },
    { id: 5, title: "Мужчинам", image: Nav5 },
    { id: 6, title: "Новый год", image: Nav6 },
    { id: 7, title: "Красота", image: Nav7 },
    { id: 8, title: "Аксессуары", image: Nav8 },
    { id: 9, title: "Электроника", image: Nav9 },
    { id: 10, title: "Игрушки", image: Nav10 },
  ];

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
        <div className="menu-nav" onClick={showDrawer}>
          <div className="menu-dots">
            <div className="menu-dot1"></div>
            <div className="menu-dot2"></div>
            <div className="menu-dot3"></div>
          </div>
        </div>
        <Drawer
          width={300}
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          className="drawer"
          style={{
            backgroundColor: "gray",
          }}
        >
          <div className="nav-drawer position-relative">
            {drawers.map((drawer) => (
              <div
                key={drawer.id}
                onClick={() => navigate('/address')}
                onMouseEnter={() => handleMouseEnter(drawer.id)}
                onMouseLeave={handleMouseLeave}
                className="d-flex align-items-center gap-2 my-3"
                style={{ cursor: "pointer" }}
              >
                <img
                  style={{
                    objectFit: "contain",
                    width: "25px",
                    height: "25px",
                  }}
                  src={drawer.image}
                  alt=""
                />
                <b className="fs-6">{drawer.title}</b>
              </div>
            ))}
          </div>
        </Drawer>

        <div className="logo">
          <img onClick={() => navigate("/")} src={Logo} alt="" />
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
