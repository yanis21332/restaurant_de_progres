import { useState } from "react";
import styled from "styled-components";
import data from "../datas/data.json";
import Dish from "./Dish";
import entre_cotes from "../import/entre_cotes.webp";
import sauté from "../import/sauté.webp";
import roti from "../import/roti.webp";
import couscous from "../import/couscous.webp";
import steak from "../import/steak.webp";
import emince_de_poulet from "../import/emincé_de_poulet.webp";
import cordons_bleus from "../import/cordons_bleu.webp";
import boulettes_de_viande from "../import/boulettes_de_viande.webp";
import croquettes_de_chou_fleur from "../import/croquettes_de_chou_fleur.webp";
import TextHeaderC from "./TextHeaderC";

const Menu = ({ Pstyle, Hstyle, DefStyle }) => {
  const MenuPage = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ButtonCulStyle = styled.button`
    margin-top: 5px;
    background: ${(props) => (props.isSelected ? "#e8c403" : "transparent")};
    padding: 5px 16px;
    ${(props) =>
      !props.isSelected
        ? `border-bottom: white 2px solid;
    border-right: 2px solid #535151;
    border-top: 2px solid #535151;
    border-left: 2px solid white;`
        : "border:none;"}
    outline: none;
    cursor: pointer;
    color: ${(props) => (props.isSelected ? "#000000d4" : "#ffffffd1")};
    font-size: 1.05em;
  `;
  const SelectCul = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    flex-wrap: wrap;

    @media (max-width: 800px) {
      width: 40%;
    }
  `;
  const [buttonsCul, setButtonsCul] = useState([
    { name: "1", isSelected: true },
    { name: "2", isSelected: false },
    { name: "3", isSelected: false },
  ]);
  const [buttonSelectedArray, setButtonSelectedArray] = useState(
    data.specialites_1
  );

  const onClickInBtnCul = (e) => {
    const index = Array.from(e.target.parentNode.children).indexOf(e.target);
    let can = true;
    buttonsCul.forEach((btn) => {
      if (btn.isSelected === true) {
        if (parseInt(btn.name) === index + 1) {
          can = false;
        }
      }
    });
    if (can) {
      setButtonsCul((btns) =>
        btns.map((btn, i) => {
          if (index === i) {
            setButtonSelectedArray(
              btn.name === "1"
                ? data.specialites_1
                : btn.name === "2"
                ? data.specialites_2
                : btn.name === "3"
                ? data.specialites_3
                : ""
            );
            setTimeout(() => {
              const elements = document.querySelectorAll(
                ".menuPage .hiddenScale"
              );
              elements.forEach((el) => {
                el.classList.remove("hiddenScale");
              });
            }, 10);
            return { ...btn, isSelected: true };
          } else {
            setTimeout(() => {
              const elements = document.querySelectorAll(
                ".menuPage .hiddenScale"
              );
              const elms = document.querySelectorAll(
                ".menuPage .specialites .hiddenScaleAnimation"
              );
              elms.forEach((el) => {
                el.classList.add("showScaleAnimation");
              });
              elements.forEach((el) => {
                el.classList.remove("hiddenScale");
              });
            }, 10);
            return { ...btn, isSelected: false };
          }
        })
      );
    }
  };

  return (
    <MenuPage className="menuPage">
      <TextHeaderC Pstyle={Pstyle} Hstyle={Hstyle} DefStyle={DefStyle} />
      <SelectCul className="selectCul">
        {buttonsCul.map((btn, i) => (
          <ButtonCulStyle
            onClick={(e) => onClickInBtnCul(e)}
            isSelected={btn.isSelected}
            key={i}
          >
            {btn.name}
          </ButtonCulStyle>
        ))}
      </SelectCul>

      <div style={{ width: "80%", marginTop: "100px" }} className="specialites">
        {buttonSelectedArray.map((spe, i) => (
          <Dish
            DefStyle={DefStyle}
            Hstyle={Hstyle}
            title={spe.plat}
            text={spe.text}
            price={spe.prix}
            img={
              spe.plat === "roti"
                ? roti
                : spe.plat === "entre cotes"
                ? entre_cotes
                : spe.plat === "sauté"
                ? sauté
                : spe.plat === "couscous"
                ? couscous
                : spe.plat === "steak"
                ? steak
                : spe.plat === "emincé de poulet"
                ? emince_de_poulet
                : spe.plat === "cordons bleus"
                ? cordons_bleus
                : spe.plat === "boulettes de viande"
                ? boulettes_de_viande
                : spe.plat === "croquettes de chou fleur"
                ? croquettes_de_chou_fleur
                : ""
            }
            isToLeft={i % 2 === 0 ? false : true}
            key={i}
          />
        ))}
      </div>
    </MenuPage>
  );
};

export default Menu;
