import styled from "styled-components";
import Button from "./Button";
import logo from "../import/logo.png";
import Menu from "../import/menu.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuBarIsClicked, setMenuBarIsClicked] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    // Écouteur pour le redimensionnement
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur lors du démontage
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HeaderPage = styled.header`
    background: #1e1e1e9e;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 25px 0px;
    .headerPageFirstChild {
      display: flex;
      align-items: center;
      justify-content: ${windowWidth <= 800 ? "flex-end" : "space-around"};
    }
  `;
  const UlStyle = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    align-items: ${menuBarIsClicked === true ? "self-start" : "center"};
    flex-direction: ${menuBarIsClicked === true ? "column" : "row"};
  `;
  const LiStyle = styled.li`
    color: white;
    font-size: ${menuBarIsClicked === true ? "1.8em" : "1.24em"};
    margin-right: 25px;
    user-select: none;

    ${menuBarIsClicked === true
      ? `
    width: 100%;
    text-align: left;
    padding: 10px 0px 30px 21px;
    background: #00000057;
    transition: ease 0.2s;
    &:hover {
      background-color: #00000085;
    }
    `
      : ""}
    &:hover {
      cursor: pointer;
    }
  `;
  const MenuImg = styled.img`
    cursor: pointer;
    margin-right: 39px;
    transform: scale(1.38);
  `;
  const NavBarStyle = styled.div`
    width: 56%;
    border-radius: 10px;
    background: #3b3939;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -2%);
    padding: 20px 0px;

    @media (max-width: 550px) {
      width: 77%;
    }
  `;
  const HidderStyle = styled.div`
    width: 100%;
    height: 100%;
    background: #0000009c;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  `;

  const onClickInLiButton = (target) => {
    console.log("hi there");
    const trg = document.querySelector(target);
    trg.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuBarIsClicked(false);
  };
  return (
    <div className="header">
      {menuBarIsClicked === true ? (
        <HidderStyle
          onClick={() => {
            setMenuBarIsClicked(false);
          }}
          className="hidder"
        ></HidderStyle>
      ) : (
        ""
      )}
      <HeaderPage className="headerPage">
        {windowWidth > 800 ? (
          <div className="headerPageFirstChild">
            <div className="leftPart">
              <img
                style={{ width: "53px", marginTop: "20px" }}
                className="logoSpacement"
                alt="restaurant du progrés"
                src={logo}
              ></img>
            </div>
            <div className="middlePart">
              <UlStyle className="menu">
                <LiStyle onClick={() => onClickInLiButton(".AboutPage")}>
                  A propos de nous
                </LiStyle>
                <LiStyle onClick={() => navigate("/menu")}>
                  Nos menus
                </LiStyle>
                <LiStyle onClick={() => onClickInLiButton(".ourStory")}>
                  Notre histoire
                </LiStyle>
                <LiStyle onClick={() => onClickInLiButton(".ContactPart")}>
                  Nous contacter
                </LiStyle>
              </UlStyle>
            </div>
            <div className="rightPart">
              <Button
                onClickInLiButton={onClickInLiButton}
                ClassName="goldenButton"
                cont="Reservation"
              />
            </div>
          </div>
        ) : (
          <div className="headerPageFirstChild">
            <MenuImg
              onClick={() => setMenuBarIsClicked(!menuBarIsClicked)}
              alt="navbar"
              src={Menu}
            />
            {menuBarIsClicked === true && (
              <NavBarStyle className="navBar">
                <div className="navBarContent">
                  <img
                    style={{ width: "53px" }}
                    className="logoSpacement"
                    alt="restaurant du progrés"
                    src={logo}
                  ></img>
                  <div className="navBarButtons">
                    <UlStyle className="menu">
                      <LiStyle onClick={() => onClickInLiButton(".AboutPage")}>
                        A propos de nous
                      </LiStyle>
                      <LiStyle onClick={() => onClickInLiButton(".menuPage")}>
                        Nos menus
                      </LiStyle>
                      <LiStyle onClick={() => onClickInLiButton(".ourStory")}>
                        Notre histoire
                      </LiStyle>
                      <LiStyle
                        onClick={() => onClickInLiButton(".ContactPart")}
                      >
                        Nous contacter
                      </LiStyle>
                    </UlStyle>
                  </div>
                  <Button
                    onClickInLiButton={onClickInLiButton}
                    ClassName="goldenButton"
                    cont="Reservation"
                  />
                </div>
              </NavBarStyle>
            )}
          </div>
        )}
      </HeaderPage>
    </div>
  );
};

export default Header;
