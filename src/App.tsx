import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./mainpage.module.scss";

function App() {
  const [Dark, setDark] = useState<boolean>(false);
  const [About, setAbout] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [imgUrl, setUrl] = useState<string>();
  const [imgtitle, setTitle] = useState<string>();

  const fetchmeme = () => {
    try {
      let solution = axios
        .get("https://meme-api.com/gimme/dankmemes")
        .then((solution) => {
          setData(solution);
          setUrl(solution.data.url);
          setTitle(solution.data.title);
        });
    } catch (error) {
      console.log(error);
      alert("Something is wrong!");
    }
  };

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchmeme();
  }, []);

  return (
    <div className={`${styles.MainPage} ${Dark ? styles.MainPage_dark : " "}`}>
      <button
        onClick={() => {
          setDark(!Dark);
        }}
        className={`${Dark ? styles.darkMode : styles.lightMode}`}
      >
        {Dark ? "Light Mode" : "Dark Mode"}
      </button>
      <img key={Date.now()} className={styles.meme} src={imgUrl}></img>
      <div className={`${Dark ? styles.title_dark : styles.title_light}`}>
        {About ? `${imgtitle}` : null}
      </div>
      <div className={styles.bottom_buttons}>
        <button
          className={`${Dark ? styles.darkMode_meme : styles.lightMode_meme}`}
          onClick={() => {
            fetchmeme();
          }}
        >
          Meme
        </button>

        <a
          className={`${
            Dark ? styles.darkMode_meme_link : styles.lightMode_meme_link
          }`}
          href={imgUrl}
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
}

export default App;
