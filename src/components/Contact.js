import styled from "styled-components";
import locationLogo from "../import/location-pin.png";
import callLogo from "../import/call.png";
import footerBackground from "../import/footer_background.webp";
import logo from '../import/logo.png';

const Contact = ({ Hstyle }) => {
  const ParagrapheStyle = styled.p`
    font-size: 0.9em;
    font-family: "Open Sans";
    opacity: 0.85;
    letter-spacing: 1.5px;
    padding: 0;
    margin-left: 8px;
  `;
  const ContactPartStyle = styled.div`
    padding: 100px 0px;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${footerBackground});
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: overlay;
    overflow: hidden;
    margin-top: 30px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle,
        rgba(30, 30, 30, 0) 42%,
        rgba(30, 30, 30, 1) 91%
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
  const FirstFooterPartStyle = styled.div`
    width: 64%;
    display: flex;
    flex-direction: column;
    .toFindUs {
      display: flex;
      align-items: center;
      justify-content: center;

      .adresse {
        display: flex;
        align-items: center;
        width: 45%;
        margin-right: 21px;
      }
    }
    .callUs {
      display: flex;
      align-items: center;
    }
  `;
  const SecondFooterPartStyle = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <ContactPartStyle className="ContactPart">
      <FirstFooterPartStyle className="firstFooterPart">
        <Hstyle className="big hiddenScale hiddenScaleAnimation">
          nous sommes prêts à vous offrir la meilleure expérience culinaire
        </Hstyle>
        <div className="toFindUs">
          <div className="adresse">
            <img className=" hiddenScaleAnimation" alt="map" src={locationLogo} />
            <ParagrapheStyle className=" hiddenScaleAnimation">
              Rue d'en haut la poste, larbaa nath irathen, tizi ouzou, Algerie
            </ParagrapheStyle>
          </div>
          <div className="callUs">
            <img className="hiddenScale hiddenScaleAnimation" alt="call" src={callLogo} />
            <ParagrapheStyle className="hiddenScale hiddenScaleAnimation">Pour Reservation <br/>appelez sur nous sur :+ 0793381064</ParagrapheStyle>
          </div>
        </div>
      </FirstFooterPartStyle>
      <SecondFooterPartStyle className="secondFooterPart">
        <img
          style={{ width: "53px" }}
          className="logoSpacement hiddenScale hiddenScaleAnimation"
          alt="restaurant du progrés"
          src={logo}
        ></img>
        <div style={{ marginTop: "12px" }} className="social hiddenScale hiddenScaleAnimation">
          <a href="https://www.facebook.com/profile.php?id=61571332206180" rel="noreferrer" target="_blank">Facebook</a>
        </div>
      </SecondFooterPartStyle>
    </ContactPartStyle>
  );
};

export default Contact;
