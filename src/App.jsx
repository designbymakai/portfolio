import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollTop';
import { Nav, Banner, SmallNav, BannerAbout, BannerBlog } from "./components/Header";
import { Author } from "./components/Footer";
import { Footer } from "./components/Footer";

import Spotlight from "./pages/Home";
import Blog from "./pages/Blog";
import Show from './pages/Show';
import About from "./pages/About";


import { CardPop } from './components/CardPops';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';


function Home() {
  
  return (
    <div className= " bg-gray-200 dosis-font font-sans leading-normal tracking-normals">
      <Nav />
      <Banner />
        
           <Spotlight />
          <CardPop />
          <Skills />
          <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 mt-10">
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function ShowPage() {
  return (
    <div className= " bg-dbm-db-100 dosis-font font-sans leading-normal tracking-normal w-screen">
      <BannerBlog />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <SmallNav />
          <Show />
          </div>
        </div>
    </div>
  )
}


function AboutPage() {
  return (
    <div className= " bg-gray-200 font-sans dosis-font leading-normal tracking-normal w-screen">
      <BannerAbout /> 
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <SmallNav />
          <About />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}


function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        
        <Route index path="/" element={<Home />} />
        <Route path="/showcase" element={<ShowPage />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
      </ScrollToTop>
    </Router>
    )
    }

export default App;