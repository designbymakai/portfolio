import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-scroll';


export function Banner() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const textElements = document.querySelectorAll('.scrolling-text');
      textElements.forEach((element, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        element.style.transform = `translateX(${scrollPosition * direction}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div id="home" className="w-full m-0 p-0 h-screen overflow-hidden border-b-8 border-dbm-gr-300 bg-dbm-db-100 flex">
    <div className="w-full md:w-1/2 bg-dbm-db-100 flex flex-col justify-center mx-0 md:mr-10 md:ml-6 md:pl-0 overflow-none">
      <div className="container max-w-4xl mx-auto text-left break-normal overflow-none">
        <div className="scrolling-text-container overflow-none">
          <p className="text-lg md:text-[1.8rem]">
            Hello, I'm <span className='text-dbm-lb-200 head-span text-xl md:text-[2rem]'>Makai</span>
          </p>
          <p className="text-base md:text-[1.6rem] mb-4 text-wrap">
            Innovative Designer Crafting Solutions That Inspire and Perform
          </p>
          <p className="scrolling-text text-sm md:text-base mb-3 text-wrap">
            <span className='head-span'>Versatile</span> and <span className='head-span'>passionate</span> designer, specializing in <span className='head-span'>Innovative</span> solutions that merge <span className='head-span'>creativity </span> with <span className='head-span'>functionality</span>. 
          </p>
         
          <p className="scrolling-text text-sm md:text-base mb-3 text-wrap">
            <span className='head-span'>Multidisciplinary</span> skill set spanning UX/UI, graphic design, web design, 3D modeling, and brand development
          </p>
          <p className="scrolling-text text-sm md:text-base mb-3 text-wrap">
            Design practice based in <span className='head-span'>human-centered design</span> principles, honed through <span className='head-span'>real-world projects</span>
          </p>
          <p className="scrolling-text text-sm md:text-base mb-3 text-wrap">
            Eager to participate on projects that <span className='head-span'>push boundaries</span> and create <span className='head-span'>meaningful impact</span>
          </p>
          <p className="scrolling-text text-sm md:text-base mb-3 text-wrap">
            With a <span className='head-span'>global perspective</span> as an <span className='head-span'>American-Kiwi dual citizen</span>
          </p>
          </div>
        </div>
      </div>
      <div
        className="md:w-4/12 bg-cover bg-center relative top-0 h-screen right-10"
        style={{ backgroundImage: 'url("/portrait.jpeg")' }}
      >
        <div className="md:w-1/12 bg-dbm-db-100"></div>
      </div>
    </div>
  );
}

export function BannerBlog() {
  return (
      <div
className="w-full m-0 p-0 bg-dbm-db-100 bg-center h-[200px] md:h-[250px]"
>
<div className="container max-w-4xl mx-auto pt-4 md:pt-8 text-center break-normal">
  {/*Title*/}
  <p className="text-white font-extrabold text-3xl md:text-5xl">
    Showcase
  </p>
  </div>
  </div>
  )
}
export function BannerAbout() {
  return (
      <div
className="w-full m-0 p-0 bg-dbm-db-100 h-[300px] md:h-[460px]"
>
<div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
  {/*Title*/}
  <p className="text-white font-extrabold text-3xl md:text-5xl">
    Design by Makai
  </p>
  <p className="text-xl md:text-2xl text-gray-200">About Me</p>
  </div>
  </div>
  )
}



export function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYTrigger = 100;
      const isTop = window.scrollY < scrollYTrigger;
      setIsSticky(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isSticky ? 'fixed top-0 inset-x-0 bg-gray-900' : 'absolute top-0 inset-x-0'} z-40 transition-all duration-700 ease-in-out`}>
      <div className={`${isSticky ? 'max-w-full px-4 justify-center' : 'container justify-start'} mx-auto flex items-center h-14 transition-all duration-700 ease-in-out`}>
        <div className="flex items-center drop-shadow-2xl">
          <img src="/dbm-logo.png" alt="logo" className="h-10 w-10"/>
        </div>
        <ul className="list-reset flex items-center space-x-4 ml-4">
          <li>
            <Tippy content="My latest projects" placement="bottom">
              <span className="inline-block">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-dbm-lb-200 cursor-pointer"
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
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-dbm-lb-200 cursor-pointer"
                >
                  Spotlight
                </Link>
              </span>
            </Tippy>
          </li>
          
          <li>
            <Tippy content="My portfolio" placement="bottom">
              <span className="inline-block">
                <Link
                  to="cardpop"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-dbm-lb-200 cursor-pointer"
                >
                  Skills
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
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-dbm-lb-200 cursor-pointer"
                >
                  Showcase
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
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-dbm-lb-200 cursor-pointer"
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





