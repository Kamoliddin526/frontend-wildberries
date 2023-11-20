import React from "react";
import Dong from "../../../assets/images/dong.png";
import Dong2 from "../../../assets/images/dong2.png";
import AppStore from "../../../assets/images/AppStore.png";
import Google from "../../../assets/images/GooglePlay.png";
import Start1 from "../../../assets/images/start1.svg";
import Start2 from "../../../assets/images/start2.svg";
import Start3 from "../../../assets/images/start3.svg";
import Start4 from "../../../assets/images/start4.svg";
import Start5 from "../../../assets/images/start5.svg";
import Start6 from "../../../assets/images/start6.svg";
import Delivery from "../../../assets/images/delivery.jpg";
import Delivery2 from "../../../assets/images/delivery2.jpg";
import Delivery3 from "../../../assets/images/delivery3.jpg";

const Work = () => {
  return (
    <div className="work">
      <div className="work-bg">
        <h1>Приглашаем на работу сотрудников</h1>
        <div className="work-buttons">
          <button>В пункт выдачи</button>
          <button>Водителей со своим авто</button>
          <button>В складской комплекс</button>
        </div>
        <img src={Dong} alt="" />
      </div>
      <h1>Работа в пункте выдачи</h1>
      <div className="what-to-do">
        <h2>Что нужно делать</h2>
        <div>
          <li>Выдача товара курьерам и клиентам</li>
          <li>Прием и распределение товаров на пункте выдачи заказов</li>
          <li>Ведение базы во внутренней системе</li>
        </div>
        <img src={Dong2} alt="" />
      </div>
      <div className="two-work">
        <div className="expect">
          <h3>Что мы ожидаем</h3>
          <div>
            <li>Знание ПК на уровне пользователя</li>
            <li>
              Приветствуется опыт работы на складе, либо продавцом-консультантом
            </li>
            <li>Аккуратность‚ ответственность, исполнительность</li>
          </div>
        </div>
        <div className="advice">
          <h3>Что мы предлагаем</h3>
          <div>
            <li>Оформление по договору</li>
            <li>Высокий уровень дохода</li>
            <li>Перспектива профессионального и карьерного роста</li>
          </div>
        </div>
      </div>
      <div className="download-work">
        <h2>
          Скачайте приложение для работы <br /> в пункте выдачи заказов
        </h2>
        <div className="down-buttons">
          <img src={AppStore} alt="" />
          <img src={Google} alt="" />
        </div>
      </div>
      <div className="start-work">
        <h1>Как начать работать водителем</h1>
        <div className="start-cards">
          <div className="start-card">
            <img src={Start4} alt="" />
            <h4>Гибкий, свободный график</h4>
            <p>Мы есть в Google Play</p>
          </div>
          <div className="start-card">
            <img src={Start5} alt="" />
            <h4>Бесплатный транспорт до склада</h4>
            <p>Регистрация доступна через Тинькофф банк</p>
          </div>
          <div className="start-card">
            <img src={Start6} alt="" />
            <h4>8 000 ₽ / сутки в среднем</h4>
            <p>Рассмотрение заявки занимает до 1 дня</p>
          </div>
        </div>
      </div>
      <div className="yuridik">
        Обязательным условием сотрудничества является наличие юридического лица
        или статуса самозанятого
      </div>
      <div className="delivery-cards">
        <div className="delivery-card">
          <img src={Delivery} alt="" />
          <h4>1000 складов</h4>
          <p>Склады по всей России. Выбирайте самый удобный</p>
        </div>
        <div className="delivery-card">
          <img src={Delivery2} alt="" />
          <h4>Удобные заказы</h4>
          <p>Выбирайте заказы, подходящие по маршруту и стоимости</p>
        </div>
        <div className="delivery-card">
          <img src={Delivery3} alt="" />
          <h4>Заработок</h4>
          <p>Получайте выплаты на баланс сразу после выполнения заказа</p>
        </div>
      </div>
      <div className="download-work">
        <h2>Скачайте приложение WB Go</h2>
        <div className="down-buttons">
          <img src={AppStore} alt="" />
          <img src={Google} alt="" />
        </div>
      </div>
      <div className="complex-work">
        <h1>Работа в складском комплексе</h1>
        <div className="complex-cards">
          <div className="complex-card">
            <img src={Start4} alt="" />
            <h4>Гибкий, свободный график</h4>
          </div>
          <div className="complex-card">
            <img src={Start5} alt="" />
            <h4>Бесплатный транспорт до склада</h4>
          </div>
          <div className="complex-card">
            <img src={Start6} alt="" />
            <h4>8 000 ₽ / сутки в среднем</h4>
          </div>
        </div>
      </div>
      <div className="fast-work">
        <h2>Просто и быстро!</h2>
        <div className="fast-cards">
          <div className="fast-card">
            <div>1</div>
            <h4>Скачать приложение</h4>
            <p>
              Скачайте приложение в App Store или Google Play по ссылке ниже и
              запустите его
            </p>
          </div>
          <div className="fast-card">
            <div>2</div>
            <h4>Заполнить анкету</h4>
            <p>
              Введите свой номер и подтвердите его с помощью смс. Заполните
              анкету
            </p>
          </div>
          <div className="fast-card">
            <div>3</div>
            <h4>Получить приглашение</h4>
            <p>Получите приглашение и приступайте к выполнению работ</p>
          </div>
        </div>
      </div>
      <div className="download-work">
        <h2>Скачайте приложение для работы в складском комплексе</h2>
        <div className="down-buttons">
          <img src={AppStore} alt="" />
          <img src={Google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
