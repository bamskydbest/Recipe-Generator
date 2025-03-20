import React from "react";
import chefclaude from "../assets/images/Chef Claude Icon.png";

const Header = () => {
  return (
    <div>
      <div className="header-section">
        <div className="header">
          <div className="header-image">
            <img src={chefclaude} alt="" />
          </div>
          <div className="header-text">
            <p>Chef Claude</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
