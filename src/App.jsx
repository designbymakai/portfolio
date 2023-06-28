import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ScrollToTop from './components/ScrollTop';
import { Nav, Banner, SmallNav, BannerAbout, BannerWorks } from "./components/Header";
import { Author } from "./components/Footer";
import { Footer } from "./components/Footer";

import Spotlight from "./pages/home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import FloodCheck from "./pages/posts/FloodCheck";
import Progress from "./components/Progress";
import StressFree from "./pages/posts/StressFree";

import Happy from "./pages/posts/Happy";
import Hourglass from "./pages/posts/Hourglass";
import Att from "./pages/posts/Att";
import Illuvion from "./pages/posts/Illuvion";
import Ripe from "./pages/posts/Ripe";
import Digital from './pages/gallery/digital';
import Photography from './pages/gallery/Photography';
import Midjourney from './pages/gallery/Midjourney';
import Modeling from './pages/gallery/Modeling';



function Home() {
  
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <Banner />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Spotlight />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function Works() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <BannerWorks />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Gallery />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function DigitalPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <BannerWorks />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Digital />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function PhotoPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <BannerWorks />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Photography />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function MidPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <BannerWorks />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Midjourney />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function ModelPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <BannerWorks />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Modeling />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function AboutPage() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <BannerAbout />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <About />
          </div>
        <Author />
        </div>
      <Footer />
    </div>
  )
}

function FloodPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <FloodCheck />
        <Author />
      <Footer />
    </div>
  )
}
function StressPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <StressFree />
        <Author />
      <Footer />
    </div>
  )
}
function HappyPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <Happy />
        <Author />
      <Footer />
    </div>
  )
}
function HourglassPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <Hourglass />
        <Author />
      <Footer />
    </div>
  )
}
function AttPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <Att />
        <Author />
      <Footer />
    </div>
  )
}

function IlluvionPost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <Illuvion />
        <Author />
      <Footer />
    </div>
  )
}
function RipePost() {
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
        <SmallNav />
        <Progress />
          <Ripe />
        <Author />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <ScrollToTop>
      <Routes>
        <Route path="/floodcheck" element={<FloodPost />} />
        <Route path="/stressfree" element={<StressPost />} />
        <Route path="/hhc" element={<HappyPost />} />
        <Route path="/hourglass" element={<HourglassPost />} />
        <Route path="/at-tamariki" element={<AttPost />} />
        <Route path="/illuvion" element={<IlluvionPost />} />
        <Route path="/ripe" element={<RipePost />} />
        <Route path="/digital-art" element={<DigitalPost />} />
        <Route path="/photography" element={<PhotoPost />} />
        <Route path="/ai-art" element={<MidPost />} />
        <Route path="/modeling" element={<ModelPost />} />

      </Routes>
      </ScrollToTop>
    </Router>
    )
    }

export default App;