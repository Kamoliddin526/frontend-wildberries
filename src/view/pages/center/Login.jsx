import { Card } from "antd";
import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <Card
        className="login-card"
        size="small"
        style={{
          width: 450,
        }}
      >
        <h4>Войти или создать профиль</h4>
        <input
          class="input-item"
          type="text"
          placeholder="+998 00 000 00 00"
        ></input>
        <button>Получить код</button>
        <p>
          <span>Соглашаюсь</span> с правилами пользования торговой площадкой{" "}
          <span>и </span>
          возврата
        </p>
      </Card>
    </div>
  );
};

export default Login;
