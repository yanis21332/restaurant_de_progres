import styled from "styled-components";

const Button = ({cont,ClassName,isGolden,AppMarge,onClickInLiButton,toMenu,toFb}) => {
    const ButtonStyle = styled.button`
    background: ${isGolden?"#ffd700":"transparent"};
    overflow: hidden;
    border: 3px solid #ffd700cf;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: ${AppMarge?"50px":"0"};
    box-shadow: 1px 3px 14px #ffd700cf;
    color: ${isGolden?"black":"#ffd700"};
    font-weight: 600;
    
    &::after {
      content: "";
      height: 2px;
      width: 45px;
      display: inline-block;
      background: ${isGolden?"black":"#ffd700"};
      position: relative;
      left: 6px;
      bottom: 2px;
      transition: all 0.3s ease;
      margin-right: 7px;
    }

    &:hover {
      background-color: ${isGolden?"transparent":"#ffd700"}; /* Fond doré au survol */
      color: ${isGolden?"#ffd700":"#fff"}; /* Texte en blanc au survol */
      box-shadow: 0px 6px 12px rgba(255, 215, 0, 0.7); /* Ombre de boîte plus intense au survol */
    }

    /* Ajout d'une animation pour la ligne dorée au survol */
    &:hover::after {
      background: ${isGolden?"#ffd700":"white"};
    }
  `;
    const onClickInBut = () => {
      if(onClickInLiButton){
        onClickInLiButton(".ContactPart")
      }
      if(toMenu){
        const trg = document.querySelector(".menuPage");
        trg.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if(toFb){
        window.location.href = "https://www.facebook.com/profile.php?id=61571332206180"
      }
    }
    return(
        <ButtonStyle onClick={onClickInBut} className={`${ClassName}}`}>{cont}</ButtonStyle>
    )
}

export default Button;