import React from "react";
import { Collapse } from "antd";

const RuleTrading = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label: "Термины",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Общие положения",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Регистрация на сайте",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Оформление заказа",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "Оплата заказа",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "Доставка заказа",
      children: <p>{text}</p>,
    },
    {
      key: "7",
      label: "Отмена и возврат заказа",
      children: <p>{text}</p>,
    },
    {
      key: "8",
      label: "Права, обязанности и гарантии",
      children: <p>{text}</p>,
    },
    {
      key: "9",
      label: "Обращения и претензии",
      children: <p>{text}</p>,
    },
    {
      key: "10",
      label: "Прочие условия",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="payout">
      <h2>Способы оплаты</h2>
      <p>Правила пользования торговой площадкой «Wildberries»</p>
      <Collapse
        style={{ margin: "25px 0 65px 0", fontSize: "20px" }}
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
};

export default RuleTrading;
