import { Header, Footer, Home, Aboutme, Nav} from "./components/index"

function App() {

  return (
    <>
    <Header />
        <main>
          <Home />
          <div className="container">
            <h1>React Portfolijo</h1>
          </div>
          <Aboutme />
        </main>
        <Footer />
    </>
  )
}

export default App
