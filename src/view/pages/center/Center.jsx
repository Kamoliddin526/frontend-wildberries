import React from "react";
import { Outlet } from "react-router-dom";

const Center = () => {
  return (
    <div className="center">
      <Outlet />
    </div>
  );
};

export default Center;
