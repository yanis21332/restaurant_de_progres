import styled from "styled-components";
import leaf from "./import/leaf.png";
import darkBackground from "./import/dark_background.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import audio from "./import/music.mp3";

const PStyle = styled.div`
  background-image: url("${(p) => p.darkBackground}");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;

  p,
  h1,
  h2,
  h3,
  label {
    font-family: Open sans;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .containerOfContainerMDR {
    width: 100%;
    max-width: 1920px;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.4); /* pour assombrir en plus */
  }
  .middlePart {
    padding: 15px 33px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    position: relative;

    @keyframes unshowing {
      0% {
        opacity: 1;
        transform: translateX(-50%);
      }
      100% {
        opacity: 0;
        transform: translateX(-40%);
      }
    }
    @keyframes showing {
      0% {
        opacity: 0;
        transform: translateX(-60%);
      }
      100% {
        opacity: 1;
        transform: translateX(-50%);
      }
    }
    .unshow {
      transition: 0.2s;
      animation: unshowing 1s forwards;
    }
    .show {
      transition: 0.2s;
      animation: showing 1s forwards;
    }

    .entresEtDesserts {
      display: flex;
      flex-direction: column;
      width: 40%;
      justify-content: space-between;
      padding-bottom: 30px;

      .oneDish h3 {
        margin: 0;
        margin-bottom: 10px;
      }

      .entres,
      .desserts {
        width: 100%;
      }
    }

    .meat {
      position: absolute;
      left: 50%;
      top: 0;
      padding-bottom: 20px !important;

      width: 97% !important;
      .mDishes {
        .oneDish {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
      }
    }
    .garnAndEntrAndDessContainer {
      position: absolute;
      left: 50%;
      top: 0;
      width: 100%;
      display: flex;
      gap: 100px;
      .gDishes {
        grid-template-columns: repeat(2, 0fr);
        width: max-content !important;
        margin: 0 auto;
      }
    }
    .meat,
    .garnitures {
      .mDishes,
      .gDishes {
        width: 100% !important;
        display: flex;
        flex-wrap: wrap;
        gap: 20px 63px;

        .oneDish {
          border: 1px solid white;
          border-radius: 32px;
          padding: 0px 34px;
          background: #00851d1f;
          box-shadow: 0 4px 12px rgb(255 255 255 / 9%);
        }
      }
    }

    .meat,
    .garnAndEntrAndDessContainer {
      width: 97%;
      background: #0a1212cc;
      padding: 0px 16px;
      border-radius: 20px;
      box-shadow: 0 4px 12px rgb(255 255 255 / 9%);
      .oneDish {
        h3 {
          font-size: 30px;
          letter-spacing: 5px;
          opacity: 0.95;
        }
        p {
          color: #feb300;
          font-weight: bold;
          letter-spacing: 1px;
          font-size: 25px;
        }
      }
    }
    .disheTitle {
      text-align: center;
      h3 {
        color: #feb300;
        font-weight: bold;
        font-size: 36px;
        letter-spacing: 3px;
      }
    }
  }
  .topPart {
    padding: 15px 33px;
    display: flex;
    z-index: 2;
    justify-content: space-between;
    .title {
      font-size: 50px;
      z-index: 2;
      display: inline-block;
      margin-left: 100px;
      margin-top: 100px;
      h1:nth-child(2) {
        display: inline-block;
        position: relative;
      }
      h1 {
        color: #feb300;
        margin: 0;
        font-family: fantasy;
        letter-spacing: 3px;
        font-weight: 100;
      }
      img {
        transform: translateY(50%);
        position: absolute;
        bottom: 50%;
      }
      .whity {
        color: white;
      }
    }
    .bigBImage {
      display: flex;
      align-items: center;
      gap: 30px;
      .bImage {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;

        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transition: 1s ease-in-out;

        &:hover {
          cursor: pointer;
        }
      }
      .bImageOne {
        background-image: url("/photos/${(p) => p.foodOne}");
        background-size: cover;
        background-position: center center;
        width: 190px;
        border: 4px solid #feb300;
        height: 190px;
        animation-duration: 10s;
      }
      .bImageTwo {
        background-image: url("/photos/${(p) => p.foodTwo}");
        background-size: cover;
        background-position: center center;
        width: 240px;
        height: 240px;
        right: 580px;
        animation-duration: 28s;

        border: 8px solid #feb300;
      }
      .bImageThree {
        width: 310px;
        height: 310px;
        background-image: url("/photos/${(p) => p.foodThree}");
        background-size: cover;
        background-position: center center;
        position: relative;
        border: 15px solid white;

        animation-duration: 40s;
      }
    }
  }
  .bottomPart {
    position: absolute;

    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 0;
    h1 {
      color: rgb(252, 233, 189);
      font-weight: bold;
      letter-spacing: 3px;
      font-size: 72px;
      margin: 0;
      margin-bottom: 5px;
      border-radius: 15px;
    }
  }
`;

const MenuPage = () => {
  const [dishes, setDishes] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [elementToShow, setElementToShow] = useState("garnitures");
  const elements = ["meat", "garnitures"];


  useEffect(() => {
    fetch("/photos.json")
      .then((res) => res.json())
      .then((images) => {
        setImgs(images);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://menu-resto-back.onrender.com/api")
      .then((res) => {
        setDishes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElementToShow((prev) => {
        const currentIndex = elements.indexOf(prev);
        const nextIndex =
          currentIndex + 1 === elements.length ? 0 : currentIndex + 1;
        return elements[nextIndex];
      });
    }, 15000);

    return () => clearInterval(interval); // Nettoyage à la destruction
  }, []);

  const getUniqueRandomImage = (usedImages) => {
    let available = imgs.filter((img) => !usedImages.includes(img));

    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  };
  const changeImage = (circle, circlePos) => {
    if (circle !== undefined) {
      const used = [];
      const randomImage = getUniqueRandomImage(used);
      circle.style.backgroundImage = "white";
      setTimeout(() => {
        circle.style.backgroundImage = `url(/photos/${randomImage})`;
        if (used.length < 4) {
          used.push(randomImage);
        } else {
          used[circlePos] = randomImage;
        }
      }, 7000);
    }
  };

  const circles = document.querySelectorAll(".bImage");

  setInterval(() => {
    changeImage(circles[0], 1);
  }, 150000);
  setInterval(() => {
    changeImage(circles[1], 2);
  }, 380000);
  setInterval(() => {
    changeImage(circles[2], 3);
  }, 643000);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Erreur de lecture : ", err);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mp3" />
      </audio>
      {!isPlaying && (
        <button
          onClick={playMusic}
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 9999,
            padding: "10px 20px",
            fontSize: "1em",
            backgroundColor: "#222",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Activer la musique 🎵
        </button>
      )}
      <PStyle
        darkBackground={darkBackground}
        foodOne={imgs[Math.floor(Math.random() * imgs.length)]}
        foodTwo={imgs[Math.floor(Math.random() * imgs.length)]}
        foodThree={imgs[Math.floor(Math.random() * imgs.length)]}
        className="prinicpaleContainer"
      >
        <div className="overlay"></div>
        <div className="containerOfContainerMDR">
          <div className="topPart">
            <div className="title">
              <h1>LES PLATS</h1>
              <h1>
                DU <img alt="leaf" src={leaf} />{" "}
                <span style={{ color: "white", marginLeft: "8vh" }}>JOUR</span>
              </h1>
            </div>
            <div className="bigBImage">
              <div onClick={playMusic} className="bImage bImageOne"></div>
              <div
                onClick={() => playMusic()}
                className="bImage bImageTwo"
              ></div>
              <div
                onClick={() => playMusic()}
                className="bImage bImageThree"
              ></div>
            </div>
          </div>
          <div className="middlePart">
            <div
              className={`meat ${elementToShow === "meat" ? "show" : "unshow"}`}
            >
              <div className="mTitle disheTitle">
                <h3>Viandes</h3>
              </div>
              <div className="mDishes">
                {dishes.map((dishe, i) => {
                  if (dishe.type === "Viande") {
                    return (
                      <div key={i} className="oneDish">
                        <h3>{dishe.name}</h3>
                        <p>{dishe.price} DA</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
            <div
              className={`garnAndEntrAndDessContainer ${
                elementToShow === "garnitures" ? "show" : "unshow"
              }`}
            >
              <div className={`garnitures`}>
                <div className="gTitle disheTitle">
                  <h3>Garnitures</h3>
                </div>
                <div className="gDishes">
                  {dishes.map((dishe, i) => {
                    if (dishe.type === "Garniture") {
                      return (
                        <div key={i} className="oneDish">
                          <h3>{dishe.name}</h3>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
              <div className={`entresEtDesserts`}>
                <div className="entres">
                  <div className="eTitle disheTitle">
                    <h3>Entrées (250DA)</h3>
                  </div>
                  <div className="eDishes">
                    {dishes.map((dishe, i) => {
                      if (dishe.type === "Entré") {
                        return (
                          <div key={i} className="oneDish">
                            <h3>{dishe.name}</h3>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
                <div className="desserts">
                  <div className="dTitle disheTitle">
                    <h3>Desserts (200DA)</h3>
                  </div>
                  <div className="dDishes">
                    {dishes.map((dishe, i) => {
                      if (dishe.type === "Dessert") {
                        return (
                          <div key={i} className="oneDish">
                            <h3>{dishe.name}</h3>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomPart">
            <h1 className="niceQuote">
              Le restaurant du progrès vous souhaite la bienvenue.
            </h1>
          </div>
        </div>
      </PStyle>
    </>
  );
};

export default MenuPage;
