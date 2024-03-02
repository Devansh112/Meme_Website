import React, { useEffect, useState } from 'react';
import { download } from '../utils';
import styles from '../Styles/mainpage.module.scss';
import { useDark, useMeme, useAbout } from '../redux/hooks';
import { Image } from './Image';
import { MemeButton } from './MemeButton';

export const MemePage = () => {
  const [Dark, setDark] = useState(false);
  const [About, setAbout] = useState(false);

  const { toggleDarkMode, getDark } = useDark();
  const { fetchMeme, memeTitle, memeUrl, isLoading } = useMeme();
  const { toggleAbout, getAbout } = useAbout();

  useEffect(() => {
    setDark(getDark);
  }, [getDark]);

  useEffect(() => {
    setAbout(getAbout);
  }, [getAbout]);

  return (
    <div className={`${styles.MainPage} ${Dark ? styles.MainPage_dark : ' '}`}>
      <MemeButton
        text={Dark ? 'Light Mode' : 'Dark Mode'}
        dark={Dark}
        onClick={toggleDarkMode}
      ></MemeButton>

      <Image isLoading={isLoading} memeUrl={memeUrl}></Image>
      <div className={`${Dark ? styles.title_dark : styles.title_light}`}>
        {!isLoading && About ? `${memeTitle}` : null}
      </div>
      <div className={styles.bottom_buttons}>
        <MemeButton text={'Meme'} dark={Dark} onClick={fetchMeme}></MemeButton>
        <MemeButton
          text={'Open Source'}
          dark={Dark}
          onClick={() => download(memeUrl)}
        ></MemeButton>
      </div>
      <MemeButton
        text={About ? 'Hide' : 'About?'}
        dark={Dark}
        onClick={toggleAbout}
      ></MemeButton>
    </div>
  );
};
