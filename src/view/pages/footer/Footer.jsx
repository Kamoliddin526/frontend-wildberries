import Qr from "../../../assets/images/qr.png";
import Apple from "../../../assets/icons/apple.png";
import Play from "../../../assets/icons/play.png";
import Huawei from "../../../assets/icons/huawei.png";
import RuStore from "../../../assets/icons/ruStore.png";
import AppStore from "../../../assets/icons/store-app.png";
import GooglePlay from "../../../assets/icons/google-play.png";
import AppGallery from "../../../assets/icons/app-gallery.png";
import Storeru from "../../../assets/icons/ru-store.png";
import {
  ArrowUpOutlined,
  MessageOutlined,
  HomeOutlined,
  QrcodeOutlined,
  ShoppingCartOutlined,
  HeartFilled,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Collapse } from "antd";
import { useNavigate } from "react-router-dom";
const links = `
Как сделать заказ
Способы оплаты
Доставка
Возврат товара
Возврат денежных средств
Правила продажи
Правила пользования торговой площадкой
Вопросы и ответы
Проверка совместимости

`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="buyers">
          <h5>Покупателям</h5>
          <li>Как сделать заказ</li>
          <li>Способы оплаты</li>
          <li>Доставка</li>
          <li>Возврат товара</li>
          <li>Возврат денежных средств</li>
          <li>Правила продажи</li>
          <li>
            Правила пользования торговой <br /> площадкой
          </li>
          <li>Вопросы и ответы</li>
          <li>Проверка совместимости</li>
        </ul>
        <div className="two-ul">
          <ul className="partners">
            <h5>Партнерам</h5>
            <li>Продавайте на Wildberries</li>
            <li>Курьерам</li>
            <li>Перевозчикам</li>
            <li>Партнерский пункт выдачи</li>
            <li>Франшизный пункт выдачи</li>
          </ul>
          <ul className="projects">
            <h5>Наши проекты</h5>
            <li>WB Guru</li>
            <li>Трудоустройство</li>
            <li>Цифровые товары</li>
            <li>WB Путешествия</li>
            <li>WB Stream</li>
          </ul>
        </div>
        <ul className="company">
          <h5>Компания</h5>
          <li>О нас</li>
          <li>Реквизиты</li>
          <li>Пресс-центр</li>
          <li>Контакты</li>
          <li>Bug Bounty</li>
          <li>WB.Tech</li>
        </ul>
        <ul className="contact">
          <h5>Мы в соцсетях</h5>
          <li>ВКонтакте</li>
          <li>Одноклассники</li>
          <li>YouTube</li>
          <li>Телеграм</li>
        </ul>
        <div className="app-store">
          <h5>Приложение Wildberries</h5>
          <div className="download-app">
            <img src={Qr} alt="" />
            <p>Наведите камеру, чтобы скачать приложение</p>
            <div className="social-icons">
              <li className="social-icon">
                <img src={Apple} alt="" />
              </li>
              <li className="social-icon">
                <img src={Play} alt="" />
              </li>
              <li className="social-icon">
                <img src={Huawei} alt="" />
              </li>
              <li className="social-icon">
                <img src={RuStore} alt="" />
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <Collapse
          style={{ width: "100%", fontSize: "17px" }}
          items={[
            {
              key: "1",
              label: "Покупателям",
              children: <p>{links}</p>,
            },
          ]}
        />
        <Collapse
          style={{ width: "100%", fontSize: "17px" }}
          items={[
            {
              key: "1",
              label: "Партнерам",
              children: <p>{links}</p>,
            },
          ]}
        />
        <Collapse
          style={{ width: "100%", fontSize: "17px" }}
          items={[
            {
              key: "1",
              label: "Наши проекты",
              children: <p>{links}</p>,
            },
          ]}
        />
        <Collapse
          style={{ width: "100%", fontSize: "17px" }}
          items={[
            {
              key: "1",
              label: "Компания",
              children: <p>{links}</p>,
            },
          ]}
        />
        <Collapse
          style={{ width: "100%", fontSize: "17px" }}
          items={[
            {
              key: "1",
              label: "Мы в соцсетях",
              children: <p>{links}</p>,
            },
          ]}
        />
      </div>
      <div className="nav-social">
        <img src={AppStore} alt="" />
        <img src={GooglePlay} alt="" />
        <img src={AppGallery} alt="" />
        <img src={Storeru} alt="" />
      </div>
      <div className="footer-copyright">
        <p>
          2004-2023 © Wildberries — модный интернет-магазин одежды, обуви и
          аксессуаров. Все права защищены. Доставка по всей России. <br /> На
          Торговой площадке wildberries.ru применяются рекомендательные
          технологии. Адрес для направления юридически значимых сообщений:
          sales@wildberries.ru
        </p>
      </div>
      <div className="footer-icons">
        <a
          href="#
          "
        >
          <div className="up">
            <ArrowUpOutlined className="up-arrow" />
          </div>
        </a>
        <div className="chat">
          <MessageOutlined />
        </div>
      </div>
      <div className="footer-menu">
        <HomeOutlined onClick={() => navigate("/")} className="menu-icon" />
        <QrcodeOutlined className="menu-icon" />
        <ShoppingCartOutlined
          onClick={() => navigate("/cart")}
          className="menu-icon"
        />
        <HeartFilled onClick={() => navigate("/login")} className="menu-icon" />
        <UserOutlined
          onClick={() => navigate("/login")}
          className="menu-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
