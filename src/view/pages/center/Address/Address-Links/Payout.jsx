import React from "react";
import { Collapse } from "antd";

const Payout = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label: "Банковская карта",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Оплата через СБП (Систему быстрых платежей)",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Оплата в кредит",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Оплата балансом",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="payout">
      <h2>Способы оплаты</h2>
      <p>
        Понравившиеся вещи Вы можете оплатить перечисленными ниже способами.
      </p>
      <Collapse
        style={{ margin: "25px 0 65px 0", fontSize: "20px" }}
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
};

export default Payout;
