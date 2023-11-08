import React from "react";
import { Outlet } from "react-router-dom";
import CenterCarousel from "../../components/CenterCarousel";

const Center = () => {
  return (
    <div className="center">
      <CenterCarousel/>
      <Outlet />
    </div>
  );
};

export default Center;
