// імпортуємо useState, useEffect
import { useState, useEffect } from "react";
// імпортуємо RemoveScroll для блокування прокрутки
import { RemoveScroll } from 'react-remove-scroll';

import {
  Header,
  Footer,
  Home,
  Aboutme,
  Nav,
  SkillsInfo,
  Services,
  Portfolio,
  GetInTouch,
  OurClients,
  Contact,
  ScrollToTop,
  ThemeToggle
} from "./components/index"

function App() {
  // Стан для блокування скролу
  const [isMenuOpen, setIsMenuOpen] = useState(false);     // для Nav
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false); // для ServiceModal
  // додай аналогічно для Portfolio, якщо потрібно

  return (
    // RemoveScroll охоплює весь застосунок і блокує scroll, коли треба
    <RemoveScroll enabled={isMenuOpen || isServiceModalOpen}>
      <>
        <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <Home />
        <Aboutme />
        <SkillsInfo />
        <Services setIsServiceModalOpen={setIsServiceModalOpen} />
        <Portfolio />
        <GetInTouch />
        <OurClients />
        <Contact />
        <ScrollToTop />
        <ThemeToggle />
        <Footer />
      </>
    </RemoveScroll>
  )
}

export default App;
