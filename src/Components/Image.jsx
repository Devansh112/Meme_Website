import React from 'react';
import styles from '../Styles/mainpage.module.scss';
import { Loader } from './Loader';

export const Image = ({ memeUrl, isLoading }) => {
  return isLoading ? (
    <div className={styles.meme}>
      <Loader></Loader>
    </div>
  ) : (
    <img key={Date.now()} className={styles.meme} src={memeUrl}></img>
  );
};
