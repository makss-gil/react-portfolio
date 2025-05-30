import { Header, Footer, Home, Aboutme, Nav, SkillsInfo, Services, Portfolio} from "./components/index"

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
        </main>
        <Footer />
    </>
  )
}

export default App
