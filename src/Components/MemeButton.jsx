import React from 'react';
import styles from '../Styles/button.module.scss';

export const MemeButton = ({ text, dark, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`${styles.normal_button} ${dark ? styles.dark : styles.light}`}
    >
      {text}
    </button>
  );
};
