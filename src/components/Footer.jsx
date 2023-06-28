import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

export function Author() {
    return(
<div className="flex w-full items-center font-sans p-4 md:pb-4 md:pt-12">
  <img
    className="w-10 h-10 rounded-full mr-4 hover:scale-125"
    src="https://i.ibb.co/3C6dmRZ/217351-C9-D898-4-B14-8-C29-C4859501-C2-E4.jpg"
    alt="Avatar of Author"
  />
  <div className="flex-1">
    <p className="text-base font-bold md:text-xl leading-none">Makai Ingalls</p>
    <p className="text-gray-600 text-xs md:text-base">
      Designer, Photographer, Writer, Artist, Student
    </p>
  </div>
  <div className="justify-end">
    <Link to="/about">
      <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
        Read More
      </button>
    </Link>
  </div>
</div>

    )
}

export function Footer() {
    return(
<footer className="bg-gradient-to-r from-gray-900 from-10% via-gray-800 via-50% to-gray-900 to-90%">
  <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
    <div className="w-full mx-auto flex flex-wrap items-center">
      <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <span className="text-base text-gray-200">Design by Makai</span>
      </div>
      <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
          <li>
            <NavLink 
            to="/"
            className={({isActive}) => 
                isActive ? 'inline-block py-2 px-2 text-white no-underline hover:text-gray-200' : 'inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-2'
            
        }
            >
            Spotlight
          </NavLink>
          </li>
          <li>
            <NavLink 
            to="/works"
            className={({isActive}) => 
                isActive ? 'inline-block py-2 px-2 text-white no-underline hover:text-gray-200' : 'inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-2'
            
        }
            >
            Works
          </NavLink>
          </li>
          <li>
           <NavLink 
            to="/about"
            className={({isActive}) => 
                isActive ? 'inline-block py-2 px-2 text-white no-underline hover:text-gray-300' : 'inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-2'
            
        }
            >
            About Me
          </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    )
}
