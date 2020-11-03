import { stringify } from 'querystring';
import React, { useState } from 'react';
import ExpandableItem from "../ExpandableItem/ExpandableItem";

import styles from './AddMovie.module.scss';

const AddMovie = () => {

  return (
    <>
      <div className={styles.AddMovieContainer}>
        <ExpandableItem text='Add Movie' />
      </div>
    </>
  )
}

export default AddMovie;