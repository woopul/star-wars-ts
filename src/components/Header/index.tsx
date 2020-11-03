import React from "react";
import './header.scss';
import logo from "../../assets/icons/LOGO.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
    </div>
  );
};

export default Header;