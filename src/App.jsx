import { Nav, Banner } from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Skills from './components/Skills';
import Butterfly from "./components/Butterfly";


function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Butterfly />
      <Skills />
      <About />
      <Footer />
    </>
    )
    }

export default App;