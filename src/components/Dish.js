import styled from "styled-components";

const Dish = ({ img, title, text, price, Hstyle, DefStyle, isToLeft,hiddenElementRef }) => {
  const ImageStyle = styled.img`
    width: 45%;
  `;
  const DishStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${isToLeft ? "row-reverse" : "row"};

    @media (max-width: 455px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 43px;
      .textSurface {
        align-items: center;
        padding-left: 0;
        padding-right: 0;
      }
      img {
        width: 70%;
        border-radius: 12px;
      }
      p {
        text-align: center !important;
        margin-bottom: 0;
      }
    }
  `;
  const TextSurface = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: ${!isToLeft ? "66px" : "0"};
    padding-right: ${isToLeft ? "66px" : "0"};
  `;
  return (
    <DishStyle className="dishStyle">
      <ImageStyle className="imageSurface hiddenScale hiddenScaleAnimation" alt="le_plat" src={img}></ImageStyle>
      <TextSurface className="textSurface ">
        <Hstyle className="hiddenScale  hiddenScaleAnimation" style={{ fontSize: "2em" }}>{title}</Hstyle>
        <DefStyle className="hiddenScale  hiddenScaleAnimation" style={{ width: "100%", textAlign: "left" }}>{text}</DefStyle>
        <Hstyle className= "hiddenScale  hiddenScaleAnimation" style={{ fontSize: "2em" }}>{price} DA</Hstyle>
      </TextSurface>
    </DishStyle>
  );
};

export default Dish;
