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
      <button className="bg-transparent border border-dbm-db-100 hover:border-dbm-lb-200 text-xs text-dbm-db-100 hover:text-dbm-lb-200 font-bold py-2 px-4 rounded-full">
        Read More
      </button>
    </Link>
  </div>
</div>

    )
}

export function Footer() {
    return(
<footer className="bg-dbm-db-100">
  <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center">
      <div className="drop-shadow-2xl">
              <img src="/dbm-logo.png" alt="logo" className="h-10 w-10"/>
        </div>
      <p>Home</p>
      
    </div>
</footer>

    )
}
