import Tippy from '@tippyjs/react';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { Tab } from '@headlessui/react'
import { FaMapMarkerAlt, FaPhoneAlt, FaPenAlt, FaUser, FaTools, FaBook } from 'react-icons/fa';
import { PaginationNav1Presentation } from './Pagination';



export default function AboutMe() {

return ( 

<div className="flex flex-wrap justify-center bg-gray-200 rounded-t overflow-auto">
    <div className="w-full flex justify-center">
        <div className="flex justify-center">
            <img    
            src="https://i.ibb.co/cQ95fK9/profile.png"
            className="shadow-xl rounded-full align-middle border-2 border-gray-300 absolute max-w-[150px] hover:scale-110 -m-16"
        />
        </div>
    </div>
    <div className="flex flex-col text-center pt-20">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 border-b-2 m-auto border-gray-300">
            Makai Ingalls
        </h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
            Auckland, New Zealand
        </div>
    </div>
</div>

)

}