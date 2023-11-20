import React from "react";

const Questions = () => {
  return (
    <div className="questions">
      <ul className="questions-bar">
        <li>Вопросы и ответы</li>
        <li>Частые вопросы</li>
        <h4>Работа с сайтом</h4>
        <div>
          <li>Поиск и выбор товара</li>
          <li>Регистрация</li>
          <li>Оформление заказа</li>
          <li>Управление личным кабинетом</li>
        </div>
        <h4>Работа с заказом</h4>
        <div>
          <li>Скидки и Акции</li>
          <li>Оплата заказа</li>
          <li>Отказ от заказа</li>
          <li>Доставка товаров</li>
        </div>
        <div>
          <li>Возврат товара</li>
          <li></li>
        </div>
      </ul>
    </div>
  );
};

export default Questions;
