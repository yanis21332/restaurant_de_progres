import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import styled from "styled-components";
import "./style/App.css";
import OurStory from "./components/OurStory";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MenuPage from "./MenuPage";


function App() {
  const Pstyle = styled.p`
    padding: 0;
    margin: 0;
  `;
  const Hstyle = styled.h1`
    color: #f3d382;
    font-size: 3em;
    letter-spacing: 2px;
    margin-top: 5px;
    margin-bottom: 21px;

    @media (max-width: 645px) {
      font-size: 2.3em;
    }
  `;
  const DefStyle = styled.p`
    font-family: "Open Sans";
    width: 67%;
    margin-bottom: 30px;
    margin-top: 0;
    opacity: 0.85;
    letter-spacing: 1.5px;
    padding: 0;

    @media (max-width: 645px) {
      font-size: 0.7em;
    }
  `;

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const element = entry.target;

        if (entry.isIntersecting) {
          element.classList.add("showScaleAnimation"); // Ajout de la classe pour lancer l'animation
          element.classList.remove("hiddenScale"); // Retrait de la classe `hidden`
          observer.unobserve(element); // Déconnecter l'élément une fois qu'il est visible
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1, // L'élément doit être visible à 10% pour déclencher l'animation
    });

    // Observer tous les éléments ayant la classe `hidden`
    const hiddenElements = document.querySelectorAll(".hiddenScaleAnimation");

    hiddenElements.forEach((element) => {
      observer.observe(element); // Commence à observer chaque élément
    });

    // Nettoyage : déconnexion de l'observateur à la fin
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element); // Déconnecte l'observateur
      });
    };
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              
              <Header />
              <About DefStyle={DefStyle} Hstyle={Hstyle} Pstyle={Pstyle} />
              <Menu DefStyle={DefStyle} Hstyle={Hstyle} Pstyle={Pstyle} />
              <OurStory DefStyle={DefStyle} Hstyle={Hstyle} Pstyle={Pstyle} />
              <Contact DefStyle={DefStyle} Hstyle={Hstyle} Pstyle={Pstyle} />
            </div>
          }
        />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
