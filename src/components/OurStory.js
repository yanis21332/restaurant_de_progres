import styled from "styled-components";
import Button from "./Button";
import gridImgOne from "../import/refined_image1.jpg";
import gridImgTwo from "../import/refined_image2.jpg";
import gridImgThree from "../import/refined_image3.jpg";

const OurStory = ({ DefStyle, Pstyle, Hstyle }) => {
  const OurStory = styled.div`
    margin-top: 110px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const HeaderPartStory = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const MainPArtStory = styled.div`
    display: flex;
    align-items: center;
    width: 92%;
    justify-content: space-between;
    margin-top: 45px;

    @media (max-width: 800px) {
      width: 100%;
      flex-direction: column;

      .imageSurface {
        opacity: 0.8;
      }
      .storySurfaceContainer {
        width: 71%;
        margin: 29px 26px 29px 26px;
        align-items: center;
        .theStorySurface {
          text-align: center;
        }
      }
    }
    @media (max-width: 645px) {
      .imagesSurface {
        width: 70%;
        height: 100%;
        > img:nth-child(1) {
          height: 370px;
        }
        > img:nth-child(2) {
          height: 185px;
        }
        > img:nth-child(3) {
          height: 185px;
        }
      }
    }
  `;
  const ParagrapheStyle = styled.p`
    font-size: 0.9em;
    font-family: "Open Sans";
    opacity: 0.85;
    letter-spacing: 1.5px;
    padding: 0;
    margin-bottom: 40px;
  `;
  const StorySurfaceContainer = styled.p`
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: center;
    text-align: start;
    width: 41%;
    margin: 0px 105px 0px 26px;
  `;
  const GridImage = styled.div`
    width: 580px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    > img:nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
      width: 100%;
      height: 500px;
    }
    > img:nth-child(2) {
      width: 100%;
      height: 250px;
      grid-area: 1 / 2 / 2 / 3;
    }
    > img:nth-child(3) {
      width: 100%;
      height: 250px;
      grid-area: 2 / 2 / 3 / 3;
    }
  `;
  return (
    <OurStory className="ourStory">
      <HeaderPartStory className="headerPartStory">
        <Pstyle className="niceQuote hiddenScale hiddenScaleAnimation">Art Culinaire</Pstyle>
        <Hstyle className="big hiddenScale hiddenScaleAnimation">Notre Histoire</Hstyle>
        <DefStyle className="hiddenScale hiddenScaleAnimation">
          Un voyage pour créer un restaurant de luxe à succès avec les meilleurs
          services.
        </DefStyle>
      </HeaderPartStory>
      <MainPArtStory className="mainPartStory">
        <GridImage className="imagesSurface hiddenScale hiddenScaleAnimation">
          <img alt="chef" src={gridImgOne} />
          <img alt="cuisine" src={gridImgTwo} />
          <img alt="cuisine" src={gridImgThree} />
        </GridImage>
        <StorySurfaceContainer className="storySurfaceContainer">
          <ParagrapheStyle className="theStorySurface hiddenScale hiddenScaleAnimation">
            Depuis plus de 100 ans, notre restaurant est un témoin intemporel de
            saveurs et de traditions, transmis avec amour à travers quatre
            générations. Après des années de silence, nous avons décidé de
            redonner vie à ce précieux héritage familial.
            <br />
            <br />
            Animés par notre passion pour la gastronomie et forts de notre
            expérience dans l’art culinaire, nous avons réinventé ce lieu
            emblématique. Modernité et authenticité se rencontrent ici, où
            chaque détail a été pensé pour offrir une expérience unique, mêlant
            respect des traditions et innovations culinaires.
            <br />
            <br />
            Notre mission ? Faire revivre l'âme de ce restaurant historique tout
            en écrivant un nouveau chapitre, fait de créativité et de délices.
            Bienvenue dans l’histoire revisitée de notre maison !
          </ParagrapheStyle>
          <Button cont="More About us" toFb = {true} activeAnim={true} />
        </StorySurfaceContainer>
      </MainPArtStory>
    </OurStory>
  );
};

export default OurStory;
