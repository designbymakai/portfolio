import { Nav, Banner } from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Skills from './components/Skills';
import Butterfly from "./components/Butterfly";
import FeaturedProjects from "./components/FeaturedProjects";
import { useState, useEffect } from 'react';


function App() {
  const projects = [
    {
      id: 1,
      title: 'Butterfly Productivity',
      description: 'Productivity dashboard designed for clarity and focus',
      image: '/src/assets/showcase/ux/banner-butterfly.png'
    },
    {
      id: 2,
      title: 'Ripe Visuals',
      description: 'Branding, 3D modeling, and aesthetic design for Ripe',
      image: '/src/assets/showcase/thumbnails/ripe.png'
    },
    {
      id: 3,
      title: 'Hourglass Recycling',
      description: 'Circular recycling platform with lifecycle tracking and intuitive user flows.',
      image: '/src/assets/showcase/thumbnails/hourglass-thumbnail.png'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const projectCount = projects.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectCount);
    }, 5000);

    return () => clearInterval(timer);
  }, [projectCount]);

  const handlePrevious = () => setCurrentSlide((s) => (s - 1 + projectCount) % projectCount);
  const handleNext = () => setCurrentSlide((s) => (s + 1) % projectCount);

  return (
    <>
      {/* Top split: left Banner (portrait + scrolling text), right FeaturedProjects */}
      <div className="w-full flex flex-col md:flex-row md:h-[90vh] h-auto">
        <div className="w-full md:w-2/5 h-full">
          <Banner projects={projects} currentSlide={currentSlide} />
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center">
          <FeaturedProjects
            projects={projects}
            currentSlide={currentSlide}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSelect={setCurrentSlide}
          />
        </div>
      </div>

      <Nav />
      <Butterfly />
      <Skills />
      <About />
      <Footer />
    </>
  );
}

export default App;