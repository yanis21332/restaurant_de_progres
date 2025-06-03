import styled from "styled-components";

const TextHeaderC = ({ Pstyle, Hstyle, DefStyle,hadbeenAnimated,setHadbeenAnimated }) => {
  const TextHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;


  return (
    <TextHeader
      className={`textHeader`}
    >
      <Pstyle className="niceQuote hiddenScale hiddenScaleAnimation">Notre menu</Pstyle>
      <Hstyle className="big hiddenScale hiddenScaleAnimation">Nos spécialités</Hstyle>
      <DefStyle className="hiddenScale hiddenScaleAnimation">
        Découvrez une diversité de plats savoureux, alliant tradition et
        créativité, pour un voyage gustatif où chaque bouchée révèle de
        nouvelles saveurs.
      </DefStyle>
    </TextHeader>
  );
};

export default TextHeaderC;
