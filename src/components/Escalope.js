// Escalope.js
import { useEffect, useRef } from "react";
import styled from "styled-components";


const EscalopeStyle = styled.img`
    @keyframes rotate {
        0%{
            transform: rotate(0);
        }    
        100%{
            transform: rotate(360deg);
        }
    }
    animation: rotate ease-in-out 7s infinite;

`
const Escalope = () => {
  const escalopeRef = useRef(null);
  const velocity = useRef({ x: 5.5, y: 5 }); // vitesse initiale
  const escalopeImg = "https://www.dubreton.com/sites/default/files/styles/full/public/2022-03/escalope.png?h=97a347ed&itok=3PS3lpE_"

  useEffect(() => {
    const escalope = escalopeRef.current;
    let posX = 100;
    let posY = 100;
    const size = 67;

    const move = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      posX += velocity.current.x;
      posY += velocity.current.y;

      // Rebond sur les bords
      if (posX  +size>= windowWidth || posX <= 0) {
        velocity.current.x *= -1;
      }
      if (posY +size >= windowHeight || posY <= 0) {
        velocity.current.y *= -1;
      }

      escalope.style.left = `${posX}px`;
      escalope.style.top = `${posY}px`;

      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <EscalopeStyle
      ref={escalopeRef}
      src={escalopeImg}
      alt="escalope"
      style={{
        position: "fixed",
        width: "110px",
        height: "110px",
        pointerEvents: "none",
        zIndex: 1000,

      }}
    />
  );
};

export default Escalope;
