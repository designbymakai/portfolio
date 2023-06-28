import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';


export function Banner() {
    return (
        <div
  className="w-full m-0 p-0 bg-cover bg-bottom h-[300px] md:h-[460px]"
  style={{ backgroundImage: 'url("/cover.jpg")' }}
>
  <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
    {/*Title*/}
    <p className="text-white font-extrabold text-3xl md:text-5xl">
      Design by Makai
    </p>
    <p className="text-xl md:text-2xl text-gray-200">Portfolio Showcase</p>
    </div>
    </div>
    )
}
export function BannerWorks() {
  return (
      <div
className="w-full m-0 p-0 bg-cover bg-center h-[300px] md:h-[460px]"
style={{ backgroundImage: 'url("/cover2.jpg")' }}
>
<div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
  {/*Title*/}
  <p className="text-white font-extrabold text-3xl md:text-5xl">
    Design by Makai
  </p>
  <p className="text-xl md:text-2xl text-gray-200">Artwork Showcase</p>
  </div>
  </div>
  )
}
export function BannerAbout() {
  return (
      <div
className="w-full m-0 p-0 bg-cover bg-center h-[300px] md:h-[460px]"
style={{ backgroundImage: 'url("/cover3.jpg")' }}
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
    return(
<nav className="mt-0 w-full">
  <div className="container mx-auto flex flex-initial items-center w-full">
    <div className="flex w-1/2 text-sm text-center z-10">
      <ul className="list-reset flex flex-col sm:flex-row flex-auto items-start">
        <li className="mr-2">
        <Tippy content="My latest projects">
          <NavLink 
            to="/"
            className={({isActive}) => 
                isActive ? 'inline-block py-2 px-2 text-white no-underline hover:text-gray-200' : 'inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-2'
            
        }
            >
            Spotlight
          </NavLink>
        </Tippy>
        </li>
        <li className="mr-2">
        <Tippy content="Showcase of my art">
        <NavLink 
            to="/works"
            className={({isActive}) => 
                isActive ? 'inline-block py-2 px-2 text-white no-underline hover:text-gray-200' : 'inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-2'
            
        }
            >
            Works
          </NavLink>
          </Tippy>
        </li>
        <li className="mr-2">
        <Tippy content="My story & skills">
        <NavLink 
            to="/about"
            className={({isActive}) => 
                isActive ? 'inline-block py-2 px-2 text-white no-underline hover:text-gray-300' : 'inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-2'
            
        }
            >
            About Me
          </NavLink>
          </Tippy>
        </li>
      </ul>
    </div>
    <div className="h-full w-1/2 self-end">
      <div className="flex z-0 h-full justify-end ">
          <Tippy content="Adobe Portfolio">
        <a
          className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-1 md:h-auto md:p-4 avatar"
          href="https://makaizaneingalls.myportfolio.com/"
        >
          <svg
            className="fill-current h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M79.97 0h352.05c44.13 0 79.97 35.84 79.97 79.97v352.05c0 44.13-35.84 79.97-79.97 79.97H79.97C35.84 511.99 0 476.15 0 432.02V79.97C0 35.84 35.84 0 79.97 0z" />
            <g fill="#fff" fillOpacity=".4">
              <path
                d="M249.96 275.15h0c-17 12.29-38.4 18.33-64.2 18.33h-10.85l-3.28-.2v69.43c0 1.43-.51 2.76-1.64 3.79-1.02.82-2.36 1.33-3.79 1.23h-34.3c-2.56.2-4.81-1.84-5.02-4.4v-.61V153.4c0-1.23.41-2.46 1.13-3.48.92-1.02 2.15-1.54 3.48-1.54 13.82-.41 33.38-.61 58.37-.61 28.88 0 50.69 6.66 64.82 20.58 14.03 13.21 21.71 31.64 21.3 50.89.09 24.37-8.61 43.21-26.02 55.91zm-29.39-82.54h0c-6.96-6.55-17-9.93-30.52-9.93-8.91 0-14.95.1-18.33.41v74.75c3.28.2 8.6.41 16.08.41 11.26.51 22.43-2.56 31.74-8.91 7.68-5.84 11.88-15.36 11.88-29.59.52-10.14-3.38-20.07-10.85-27.14h0z"
                fillRule="evenodd"
              />
              <path d="M373.04 171.72c-3.69 6.14-5.32 13.31-4.81 20.48v12.19h24.47c2.56-.2 4.81 1.84 5.02 4.4v.61 23.96c0 1.33-.41 2.56-1.23 3.58-.92.92-2.05 1.54-3.38 1.74h-.2-24.68v123.6c.2 2.76-1.84 5.12-4.61 5.32h-.72-34.3c-2.76.2-5.12-1.84-5.32-4.61v-.72-123.7H307.2a4.72 4.72 0 0 1-3.69-1.74c-.72-1.02-1.13-2.36-1.02-3.58v-23.96c0-1.23.41-2.46 1.13-3.48.92-1.02 2.15-1.54 3.58-1.54h16.08v-8.91c-.51-13 2.15-26.01 7.78-37.79 4.3-9.22 11.16-16.9 19.87-22.22 9.11-5.12 19.46-7.68 29.9-7.48 6.86-.31 13.72.72 20.17 3.07 1.13.41 2.15 1.23 2.76 2.25s.92 2.25.92 3.48v26.21c.1 1.54-.41 2.97-1.54 3.99-1.33 1.02-3.07 1.23-4.51.41-3.69-1.43-7.58-2.15-11.57-2.05-5.62-.16-10.74 2.19-14.02 6.49z" />
            </g>
          </svg>
        </a>
        </Tippy>
        <Tippy content="Adobe Stock">
        <a
          className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-1 md:h-auto md:p-4 avatar"
          data-tippy-content="Adobe Stock Profile"
          href="https://stock.adobe.com/contributor/211063589/Makai"
        >
          <svg
            className="fill-current h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M79.97 0h352.05c44.13 0 79.97 35.84 79.97 79.97v352.05c0 44.13-35.84 79.97-79.97 79.97H79.97C35.84 511.99 0 476.15 0 432.02V79.97C0 35.84 35.84 0 79.97 0z" />
            <path
              d="M122.78 350.72h0a7.84 7.84 0 0 1-3.38-7.07v-32.67c0-.72.1-1.54.31-2.25.61-1.95 2.66-3.07 4.61-2.56.1 0 .2.1.31.1.72.2 1.33.61 1.95 1.02 16.08 11.98 35.53 18.53 55.6 18.84 12.19 0 20.48-2.36 25.5-6.66 5.22-4.2 8.09-10.55 7.99-17.2.2-6.14-2.05-12.19-6.25-16.79v-.1c-3.99-4.61-12.08-9.83-24.68-15.56h0l-12.7-6.04c-17.92-8.5-31.13-18.02-39.32-28.47h0a60.38 60.38 0 0 1-11.88-38.71c-.31-17.61 7.07-34.41 20.28-45.98 13.52-12.39 32.67-18.43 56.83-18.43 20.17 0 36.45 3.07 48.74 9.52 2.56 1.23 3.99 3.79 3.69 6.55v30.31c0 1.33-.51 2.66-1.54 3.69l-.31.31-.41.2c-.82.41-1.74.51-2.56.31-.72-.1-1.33-.31-1.95-.72l-.1-.1-.1-.1c-13.82-8.7-29.8-13.11-46.08-12.9-11.67 0-19.56 2.66-24.27 7.48-4.4 3.99-7.07 9.63-7.17 15.67-.1 5.84 2.05 11.47 5.94 15.77 3.99 4.61 11.98 9.83 24.37 15.56l13.31 6.04c19.66 9.22 33.69 19.05 41.37 29.9 7.78 10.96 11.88 24.17 11.57 37.58.72 18.84-7.58 36.97-22.32 48.84-14.64 11.88-34.3 17.61-58.68 17.61-20.48 1.04-40.55-3.57-58.67-12.99h0zm261.02 4.2l-.2.1c-9.52 3.79-19.87 5.53-30.11 5.22-14.75 0-26.21-3.99-34-12.39-7.78-8.4-11.37-20.68-11.37-36.35v-86.73h-17-.2c-1.43-.2-2.66-.92-3.58-1.95-.82-1.13-1.23-2.46-1.13-3.79v-23.96c-.2-2.87 1.95-5.32 4.81-5.53h.72 16.9c0-12.6 1.13-25.09 3.28-37.38v-.1c.41-2.56 2.36-4.61 4.92-5.12h.1l33.59-4.3c1.33-.41 2.76-.2 3.99.51 1.33.92 2.05 2.36 2.05 3.99v.1.1c-1.02 10.85-1.64 24.88-1.64 42.19h27.75c2.66-.2 5.02 1.84 5.12 4.51v.61 24.99c.2 2.66-1.84 5.02-4.51 5.12h-.61-28.16v82.43c-.41 5.22.72 10.44 3.38 14.95 2.97 2.97 7.27 4.4 11.47 3.89 4.2-.1 8.5-.82 12.6-1.84 1.33-.51 2.97-.31 4.1.61a4.77 4.77 0 0 1 1.54 3.79v19.97c.1 2.56-1.13 4.92-3.28 6.35h-.53z"
              fill="#fff"
              fillOpacity=".4"
            />
          </svg>
        </a>
        </Tippy>
      </div>
    </div>
  </div>
</nav>
    )
}

export function SmallNav() {
  return(
  <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <p className="flex text-white text-base no-underline hover:text-green-500 hover:no-underline">
            <span className="hidden w-0 md:w-auto md:block pl-1">
              Design by Makai
            </span>
          </p>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <Link
                className="inline-block py-2 px-2 text-gray-100 no-underline hover:text-indigo-500"
                to="/"
              >
              Spotlight
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/works"
                className="inline-block text-gray-500 no-underline hover:text-indigo-500 hover:text-underline py-2 px-2"
              >
                  Works
              </Link>
            </li>
            <li className="mr-2">
              <Link
              to="/about"
              className="inline-block text-gray-500 no-underline hover:text-indigo-500 hover:text-underline py-2 px-2"
              >
                  About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
    }





