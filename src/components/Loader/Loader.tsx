import React from "react";
import Load from "../../assets/icons/loading.svg";

import styles from './Loader.module.scss'

interface LoaderProps {
  size?: number
}

const Loader = ({size = 50} : LoaderProps) => {
  const loaderStyle = {
    width: `${size}px`,
    height: `${size}px`
  }

  return (
    <>
      <img style={loaderStyle} className={styles.Loader} src={Load} alt="" />
    </>
  );
}

export default Loader;
