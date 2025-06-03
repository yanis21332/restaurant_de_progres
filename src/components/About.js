import styled from "styled-components";
import Button from "./Button";
import BackgroundImage from "../import/background.webp";

const About = ({ Pstyle, Hstyle, DefStyle }) => {

  const AboutStyle = styled.div`
    background-image: url("${BackgroundImage}");
    padding-top: 58px;
    position: relative;
    display: flex;
    background-size: cover;
    background-position: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: overlay;
    overflow: hidden;
    @media (max-width: 450px) {
      .content {
        padding: 20px 0 0;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle,
        rgba(30, 30, 30, 0) -14%,
        rgba(30, 30, 30, 1) 95%
      );
      z-index: 1;
      pointer-events: none;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, rgb(30 30 30 / 0%), rgb(30 30 30));
      pointer-events: none;
      z-index: 10;
    }
  `;

  const ContentStyle = styled.div`
    padding: 128px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 68%;
    position: relative;
    z-index: 3;
  `;

  return (
    <AboutStyle className={`AboutPage`}>
      <ContentStyle className="content">
        <Pstyle
          className={`niceQuote hiddenScale hiddenScaleAnimation`}
        >
          L'art de la gastronomie, enraciné dans l'histoire.
        </Pstyle>
        <Hstyle className={`title big hiddenScale hiddenScaleAnimation`}>
          Bienvenue au Restaurant du Progrès : Une tradition réinventée.
        </Hstyle>
        <DefStyle
          style={{ fontFamily: "Open Sans" }}
          className={`littleDefinition hiddenScale hiddenScaleAnimation`}
        >
          Fondé il y a plusieurs décennies, le Restaurant du Progrès renaît
          aujourd’hui avec un souffle nouveau. Nous combinons traditions
          culinaires locales et modernité pour offrir une expérience
          gastronomique inoubliable.
        </DefStyle>
        <Button
          toMenu = {true}
          AppMarge={true} 
          ClassName={`menuBtn`}
          cont="Voir le Menu"
          isGolden={true}
        />
      </ContentStyle>
    </AboutStyle>
  );
};

export default About;

