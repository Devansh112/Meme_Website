import React, { useEffect, useState } from "react";
import { download } from "../utils";
import styles from "../Styles/mainpage.module.scss";
import { useDark, useMeme } from "../redux/hooks";

export const MemePage = () => {
  const [Dark, setDark] = useState(false);
  const [About, setAbout] = useState(false);

  const { toggleDarkMode, getDark } = useDark();
  const { fetchMeme, memeTitle, memeUrl } = useMeme();

  useEffect(() => {
    setDark(getDark);
  }, [getDark]);

  return (
    <div className={`${styles.MainPage} ${Dark ? styles.MainPage_dark : " "}`}>
      <button
        onClick={() => {
          toggleDarkMode();
        }}
        className={`${Dark ? styles.darkMode : styles.lightMode}`}
      >
        {Dark ? "Light Mode" : "Dark Mode"}
      </button>
      <img key={Date.now()} className={styles.meme} src={memeUrl}></img>
      <div className={`${Dark ? styles.title_dark : styles.title_light}`}>
        {About ? `${memeTitle}` : null}
      </div>
      <div className={styles.bottom_buttons}>
        <button
          className={`${Dark ? styles.darkMode_meme : styles.lightMode_meme}`}
          onClick={() => {
            fetchMeme();
          }}
        >
          Meme
        </button>

        <a
          className={`${
            Dark ? styles.darkMode_meme_link : styles.lightMode_meme_link
          }`}
          href={memeUrl}
          download
          onClick={(e) => download(e)}
        >
          Save Meme
        </a>
      </div>

      <button
        onClick={() => {
          setAbout(!About);
        }}
        className={`${
          Dark ? styles.darkMode_meme_about : styles.lightMode_meme_about
        }`}
      >
        {About ? "Hide" : "About?"}
      </button>
    </div>
  );
};
