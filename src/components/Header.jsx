import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-scroll';
import Portrait from '@/assets/portraits/portrait.jpeg';

export function Banner() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const textElements = document.querySelectorAll('.scrolling-text');
      textElements.forEach((element, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        // Subtle translation (30% of original effect)
        const translateAmount = scrollPosition * direction * 0.3;
        // Gentle fade as user scrolls down
        const opacity = Math.max(0.6, 1 - scrollPosition / 1000);
        element.style.transform = `translateX(${translateAmount}px)`;
        element.style.opacity = opacity;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="w-full h-full bg-dbm-db-100">
      <div className="flex h-full">
        {/* Left: portrait with original scrolling intro overlay (card) */}
        <div className="w-full h-full p-4 sm:py-6 sm:pl-6 flex items-center">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg bg-dbm-db-200">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Portrait})` }} />
            <div className="absolute inset-0 bg-dbm-db-100/60 backdrop-blur-[0.5px]" />
            <div className="relative z-10 h-full flex items-center px-4 sm:px-6 py-6 sm:py-0 overflow-hidden">
            <div className="scrolling-text-container w-full overflow-hidden">
              <p className="text-lg md:text-[1.8rem] text-dbm-w-200" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)' }}>
                Hello, I'm <span className='text-dbm-lb-200 head-span text-xl md:text-[2rem]'>Makai</span>.
              </p>
              <p className="text-base md:text-[1.6rem] mb-2 md:mb-4 text-wrap text-dbm-w-200" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)' }}>
                I'm a UX-focused designer who creates accessible, human-centered digital experiences that are clear, intuitive, and impactful.
              </p>
              <p className="scrolling-text text-sm md:text-base mb-1.5 md:mb-3 text-wrap">
                My work is grounded in <span className='head-span'>Human-Centered Design</span> principles, with a strong emphasis on <span className='head-span'>accessibility</span>, <span className='head-span'>usability</span>, and thoughtful interaction. I design with <span className='head-span'>real people</span> in mind—considering diverse needs, abilities, and contexts from the very beginning.
              </p>
              <p className="scrolling-text text-sm md:text-base mb-1.5 md:mb-3 text-wrap">
                With a <span className='head-span'>multidisciplinary background</span> spanning UX/UI, web design, visual design, and 3D, I bring a <span className='head-span'>systems-level perspective</span> to problem solving—using the right tools to support inclusive, scalable solutions rather than designing for design's sake.
              </p>
              <p className="scrolling-text text-sm md:text-base mb-1.5 md:mb-3 text-wrap">
                I'm motivated by projects that <span className='head-span'>push boundaries responsibly</span>, <span className='head-span'>improve everyday experiences</span>, and <span className='head-span'>turn complexity into clarity</span>.
              </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Become sticky after scrolling past the banner (about 90% of viewport height)
      const trigger = window.innerHeight * 0.9;
      const isTop = window.scrollY < trigger;
      setIsSticky(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // run once to set initial state
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 inset-x-0 z-40 ${isSticky ? 'bg-gray-900/95 shadow-lg' : 'bg-dbm-db-100'} transition-colors duration-500 ease-in-out transform transition-transform`}>
      <div className={`${isSticky ? 'max-w-full px-4 justify-center h-12 -translate-y-0' : 'container px-4 justify-start h-16 translate-y-0'} mx-auto flex items-center transition-all duration-500 ease-in-out`}>
        
        <ul className={`list-reset flex items-center space-x-4 transition-all duration-500 ${isSticky ? 'pl-0' : 'pl-4'}`}>
          <li>
            <Tippy content="My latest projects" placement="bottom">
              <span className="inline-block">
                <Link
                  to="home"
                  spy={true}
                  activeClass="text-dbm-lb-100"
                  smooth={true}
                  duration={500}
                  className="text-dbm-w-400 hover:text-dbm-lb-200 cursor-pointer text-lg"
                >
                  Home
                </Link>
              </span>
            </Tippy>
          </li>
          <li>
            <Tippy content="My latest projects" placement="bottom">
              <span className="inline-block">
                <Link
                  to="spotlight"
                  spy={true}
                  activeClass="text-dbm-lb-100"
                  smooth={true}
                  duration={500}
                  className="text-dbm-w-400 hover:text-dbm-lb-200 cursor-pointer text-lg"
                >
                  Spotlight
                </Link>
              </span>
            </Tippy>
          </li>
          
          
          <li>
            <Tippy content="Contact me" placement="bottom">
              <span className="inline-block">
                <Link
                  to="skills"
                  spy={true}
                  activeClass="text-dbm-lb-100"
                  smooth={true}
                  duration={500}
                  className="text-dbm-w-400 hover:text-dbm-lb-200 cursor-pointer text-lg"
                >
                  Skills
                </Link>
              </span>
            </Tippy>
          </li>
          <li>
            <Tippy content="About me" placement="bottom">
              <span className="inline-block">
                <Link
                  to="about"
                  spy={true}
                  activeClass="text-dbm-lb-100"
                  smooth={true}
                  duration={500}
                  className="text-dbm-w-400 hover:text-dbm-lb-200 cursor-pointer text-lg"
                >
                  About
                </Link>
              </span>
            </Tippy>
          </li>
        </ul>
      </div>
    </nav>
  );
}





