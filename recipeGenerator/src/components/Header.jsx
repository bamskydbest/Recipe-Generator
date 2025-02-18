import React from "react";
import chefclaude from "../assets/images/Chef Claude Icon.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={chefclaude} alt="" />
        <h1>Chef Claude</h1>
      </div>
    </div>
  );
};

export default Header;
