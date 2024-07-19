import Tippy from '@tippyjs/react';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { Tab } from '@headlessui/react'
import { FaMapMarkerAlt, FaPhoneAlt, FaPenAlt, FaUser, FaTools, FaBook } from 'react-icons/fa';
import Digital from '../pages/gallery/Digital';
import Photography from '../pages/gallery/Photography';
import Modeling from '../pages/gallery/Modeling';
import Vectors from '../pages/gallery/Vectors';


export default function Skills() {
const [showAdobe, setShowAdobe] = useState(false);
const [showDigital, setShowDigital] = useState(false);
const [showPhoto, setShowPhoto] = useState(false);
const [showVideo, setShowVideo] = useState(false);
const [showModel, setShowModel] = useState(false);
const [showGraphic, setShowGraphic] = useState(false);
const [showApp, setShowApp] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState('');

    const openModal = (url) => {
        setSelectedPdfUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPdfUrl('');
    };




const clearState = () => {
setShowAdobe(false)
setShowDigital(false)
setShowPhoto(false)
setShowVideo(false)
setShowModel(false)
setShowGraphic(false)
setShowApp(false)
}


function btnAdobe() {
return(
clearState(),
setShowAdobe(!showAdobe)
)
}
function btnDigital() {
return(
clearState(),
setShowDigital(!showDigital)
)
}
function btnPhoto() {
return(
clearState(),
setShowPhoto(!showPhoto)
)
}
function btnVideo() {
return(
clearState(),
setShowVideo(!showVideo)
)
}
function btnModel() {
return(
clearState(),
setShowModel(!showModel)
)
}
function btnApp() {
return(
clearState(),
setShowApp(!showApp)
)
}
function btnGraphic() {
return(
clearState(),
setShowGraphic(!showGraphic)
)

}

return ( 
<div className="w-full text-center mt-8">
    <h1 className="font-extrabold block tracking-wide text-dbm-db uppercase">
        Technical Skills &amp; Experience
    </h1>
    <div className="flex justify-center flex-col lg:pt-4 pt-8 pb-0">

        <div className="flex flex-row flex-wrap gap-3 border-x-4 justify-center ">
            <div className="flex flex-col gap-2 border-x-4 ">
                <button 
                type='button' 
                onClick={() => btnVideo()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 ring-dbm-pr-100 focus:outline-none focus:ring active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showVideo === true ? <span className="text-dbm-pr-100">Video Editing</span> : <span>Video Editing</span>}
                </button>
            </div>
            <div className="flex flex-col gap-2 border-x-4">
                <button 
                type='button' 
                onClick={() => btnModel()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 ring-dbm-pr-100 focus:outline-none focus:ring active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showModel === true ? <span className="text-dbm-pr-100">3D Modeling</span> : <span>3D Modeling</span>}
                </button>
            </div>
            <div className="flex flex-col gap-2 border-x-4">
                <button 
                type='button' 
                onClick={() => btnDigital()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 ring-dbm-pr-100 focus:outline-none focus:ring active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showDigital === true ? <span className="text-dbm-pr-100">Digital Art</span> : <span>Digital Art</span>}
                </button>
            </div>
            <div className="flex flex-col gap-2 border-x-4">
                <button 
                type='button' 
                onClick={() => btnPhoto()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 ring-dbm-pr-100 focus:outline-none focus:ring active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showPhoto === true ? <span className="text-dbm-pr-100">Photography</span> : <span>Photography</span>}
                </button>
            </div>
        </div>
        {
        showVideo &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
        <p className="text-xl font-bold pt-2 text-dbm-pr-100">Video Editing</p>
            <div className='flex mt-4 mb-4'>
                <div className='aspect-video w-1/2 m-auto'>
                    <iframe 
                        className=' h-full w-full rounded-lg'
                        src="https://www.youtube.com/embed/bEyUUaTIy4k" 
                        width="50%" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                    </iframe>
                </div> 
                <div className='aspect-video w-1/2 m-auto'>
                    <iframe 
                        className=' h-full w-full rounded-lg'
                        src="https://www.youtube.com/embed/FfK7PKn2jlM" 
                        width="50%" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; encrypted-media;" allowfullscreen> 
                    </iframe>
                </div> 
            </div>
        </div>
        }
        {
        showModel &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
        <p className="text-xl font-bold pt-2 text-dbm-pr-100">3D Modeling</p>
        <div className='flex mt-4'>
            <div className='aspect-video w-1/3 m-auto'>
                <iframe 
                    className=' h-full w-full rounded-lg'
                    src="https://www.youtube.com/embed/bSCUjIK-hk0" 
                    width="50%" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                </iframe>
            </div> 
            <div className='aspect-video w-1/3 m-auto'>
                <iframe 
                    className=' h-full w-full rounded-lg'
                    src="https://www.youtube.com/embed/xUQRgtwwl7A" 
                    width="50%" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; encrypted-media;" allowfullscreen> 
                </iframe>
            </div> 
            <div className='aspect-video w-1/3 m-auto'>
                <iframe 
                    className=' h-full w-full rounded-lg'
                    src="https://www.youtube.com/embed/_7hXxqemQ8A" 
                    width="50%" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                </iframe>
            </div> 
        </div>
        <Modeling  />
        </div>
        }
        {
        showDigital &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
        <p className="text-xl font-bold pt-2 text-dbm-pr-100">Digital Art</p>
        <Digital />
        </div>
        }
        {
        showPhoto &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
        <p className="text-xl font-bold pt-2 text-dbm-pr-100">Photography</p>
        <Photography />
        </div>
        }

<div className="flex flex-row flex-wrap md:border-x-4 justify-center gap-3 pt-3">
            
            <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                <button 
                type='button' 
                onClick={() => btnAdobe()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 focus:outline-none focus:ring ring-dbm-pr-100 active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showAdobe === true ? <span className="text-dbm-pr-100">Vector Design</span> : <span>Vector Design</span>}
                </button>
            </div>  
            <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                <button 
                type='button' 
                onClick={() => btnGraphic()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 focus:outline-none focus:ring ring-dbm-pr-100 active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showGraphic === true ? <span className="text-dbm-pr-100">Graphic Design</span> : <span>Graphic Design</span>}
                </button>
            </div>
            <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                <button 
                type='button' 
                onClick={() => btnApp()} 
                className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-dbm-db px-5 py-3 text-lg text-gray-200 hover:text-dbm-pr-100 hover:bg-dbm-pr-400 focus:outline-none focus:ring ring-dbm-pr-100 active:bg-dbm-pr-200 active:text-white">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-dbm-pr-100 transition-all duration-400 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-dbm-pr-100 transition-all duration-400 group-hover:h-full"></span>
                {showApp === true ? <span className="text-dbm-pr-100">App Design</span> : <span>App Design</span>}
                </button>
            </div>  
        </div>
        
                                    
        {
        showAdobe &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
        <p className="text-xl font-bold pt-2 text-dbm-pr-100">Vector Design</p>
        <Vectors />
        
        </div>
        }
        {
        showGraphic &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
            <p className="text-xl font-bold pt-2 text-dbm-pr-100">Graphic Design</p>
            <div className='flex mt-4 mb-4'>
                        <img
                            src="src/assets/floodCheckCover.jpg"
                            alt="Flood Check PDF"
                            className="w-1/4 h-3/4 m-auto cursor-pointer"
                            onClick={() => openModal("https://drive.google.com/file/d/1T1aR9H7OO_HBoithFjBW9UmPeIPcfILK/preview?usp=embed_googleplus")}
                        />
                        <img
                            src="src/assets/researchPropCover.jpg"
                            alt="Research Proposal PDF"
                            className="w-1/4 h-3/4 m-auto cursor-pointer"
                            onClick={() => openModal("https://drive.google.com/file/d/1RvZkL-dD_Dg_25okltwl3S7A-gLCmkFU/preview?usp=embed_googleplus")}
                        />
                        <img
                            src="src/assets/whitepaperCover.jpg"
                            alt="Whitepaper PDF"
                            className="w-1/4 h-3/4 m-auto cursor-pointer fill"
                            onClick={() => openModal("https://drive.google.com/file/d/1f0hpY8ORIESaGMIC28cEAfrZTHUmNRWl/preview?usp=embed_googleplus")}
                        />
            </div>
        </div>
        }
        {
        showApp &&
        <div className="bg-dbm-db  w-full self-center rounded-b-lg shadow-xl">
        <p className="text-xl font-bold pt-2 text-dbm-pr-100">App Design</p>
            <div className='w-full m-auto'>
                <iframe className='w-3/4 h-[800px] rounded-lg mx-auto'
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJOkThCJMBslgNakh9TuZt3%2FDES200-A2-Draft_1%3Fnode-id%3D123-138%26starting-point-node-id%3D73%253A30%26t%3DJobYUYuXrJmTHxSw-1%26scaling%3Dscale-down%26starting-point-node-id%3D0%253A3%26mode%3Ddesign"
                allowFullScreen=""
                />
            </div>
        </div>
        }
        
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className=" bg-dbm-pr-300 rounded-lg p-4 w-3/4 h-4/5 relative">
                        <button
                            className="absolute top-5 right-5 text-black bg-dbm-pr-200"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <iframe
                            src={selectedPdfUrl}
                            className="w-full h-full"
                            title="PDF Viewer"
                        />
                    </div>
                </div>
        )}
    </div>

</div>
)

}