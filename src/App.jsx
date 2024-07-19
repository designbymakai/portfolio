import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollTop';
import { Nav, Banner, SmallNav, BannerAbout, BannerBlog } from "./components/Header";
import { Author } from "./components/Footer";
import { Footer } from "./components/Footer";

import Spotlight from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import FloodCheck from "./pages/posts/FloodCheck";
import Progress from "./components/Progress";
import StressFree from "./pages/posts/StressFree";

import Happy from "./pages/posts/Happy";
import Hourglass from "./pages/posts/Hourglass";
import Att from "./pages/posts/Att";
import Illuvion from "./pages/posts/Illuvion";
import Ripe from "./pages/posts/Ripe";

import { CardPop } from './components/CardPops';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

import Post1 from './pages/blog/Post-1';
import Post2 from './pages/blog/Post-2';
import Post3 from './pages/blog/Post-3';
import Post4 from './pages/blog/Post-4';
import Post5 from './pages/blog/Post-5';

function Home() {
  
  return (
    <div className= " bg-gray-200 font-sans leading-normal tracking-normal">
      <Banner />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <Nav />
          <Spotlight />
          </div> </div>
          <CardPop />
          <Skills />
          <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 mt-10">
        <Author />
        </div>
      <Footer />
    </div>
  )
}
function BlogPage() {
  return (
    <div className= " bg-dbm-db font-sans leading-normal tracking-normal">
      <BannerBlog />
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
          <SmallNav />
          <Blog />
          </div>
        </div>
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
          <SmallNav />
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
        <Route index path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
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
      <ScrollToTop>
      <Routes>
        <Route path="/post-1" element={<Post1 />} />
        <Route path="/post-2" element={<Post2 />} />
        <Route path="/post-3" element={<Post3 />} />
        <Route path="/post-4" element={<Post4 />} />
        <Route path="/post-5" element={<Post5 />} />




      </Routes>
      </ScrollToTop>
    </Router>
    )
    }

export default App;