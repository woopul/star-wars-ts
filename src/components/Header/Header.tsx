import React from "react";
import styles from './Header.module.scss';
import logo from "../../assets/icons/LOGO.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" className={styles.header__logo} />
    </div>
  );
};

export default Header;