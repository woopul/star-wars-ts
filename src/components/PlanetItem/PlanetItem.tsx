import React from 'react';

import styles from './PlanetItem.module.scss';

interface IPlanetItem {
  name: string,
  handleRemove: (name: string) => void
}

const PlanetItem = ({name, handleRemove}: IPlanetItem) => {

  return(
    <div className={styles.PlanetItem}>
      {name} <span onClick={() => handleRemove(name)}className={styles.remove}></span>
    </div>
  )
}

export default PlanetItem;