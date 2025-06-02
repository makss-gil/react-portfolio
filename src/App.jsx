import { Header, Footer, Home, Aboutme, Nav, SkillsInfo, Services, Portfolio, GetInTouch, OurClients, Contact} from "./components/index"

function App() {

  return (
    <>
    <Header />
        <main>
          <Nav />
          <Home />
          <Aboutme />
          <SkillsInfo />
          <Services />
          <Portfolio />
          <GetInTouch />
          <OurClients />
          <Contact />
        </main>
        <Footer />
    </>
  )
}

export default App
