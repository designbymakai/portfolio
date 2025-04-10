import React, { useState, useRef } from 'react';
import Digital from '../pages/gallery/Digital';
import Photography from '../pages/gallery/Photography';
import Modeling from '../pages/gallery/Modeling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Skills = () => {
  const [activeContent, setActiveContent] = useState('default');
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainRef = useRef(null);

  const contents = [
    { key: 'video', label: 'Video Editing' },
    { key: 'model', label: '3D Modeling' },
    { key: 'digital', label: 'Digital Art' },
    { key: 'photo', label: 'Photography' },
    { key: 'graphic', label: 'Graphic Design' },
    { key: 'app', label: 'App Design' },
  ];

  const toggleContent = (index) => {
    const content = contents[index].key;
    setActiveContent((prevContent) => (prevContent === content ? 'default' : content));
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % contents.length;
    setCurrentIndex(newIndex);
    toggleContent(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + contents.length) % contents.length;
    setCurrentIndex(newIndex);
    toggleContent(newIndex);
  };

  return (
    <div ref={mainRef} className="w-full text-center bg-dbm-db-200 min-h-screen" id='skills'>
      <div className="flex justify-center flex-col pb-0">
        <div className="flex justify-center items-center bg-dbm-db-100">
          <button onClick={handlePrev} className="p-2 bg-dbm-db-100 rounded-l-lg">
          <FaArrowLeft className='text-2xl text-dbm-pr-100' />

          </button>
          <button
            type="button"
            onClick={() => toggleContent(currentIndex)}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide py-3 text-3xl ${activeContent === contents[currentIndex].key ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            {contents[currentIndex].label}
          </button>
          <button onClick={handleNext} className="p-2 bg-dbm-db-100 rounded-r-lg"> 
          <FaArrowRight className='text-2xl text-dbm-pr-100' />
          </button>
        </div>

        <div className="bg-dbm-db-100 w-full p-4 rounded-lg shadow-xl flex-grow">
          {activeContent === 'default' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Welcome to the Gallery</p>
              <p className="text-lg text-dbm-w-200">Click on the arrows to view other content.</p>
              <hr className="border-dbm-w-200 my-4" />
              <p className="text-3xl text-dbm-w-200 pb-3">Recent Freelance Work</p>
              <p className="text-lg text-dbm-w-200 pb-4">Built website for client Relax Medical Aesthetics, unlike this portfolio which I coded using React.js, this website was built using Squarespace. View it at <a href='https://www.relaxmedicalaesthetics.com' className='text-dbm-pr-200 hover:text-dbm-pr-100'>here</a>.</p>

              <img 
              src='/relax-capture.png'
              className='w-3/4 m-auto cursor-pointer'
              />
            </div>
          )}
          {activeContent === 'video' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <div className="flex md:flex-row flex-col mt-4 mb-4">
                <div className="aspect-video md:w-1/2 w-5/6 md:pr-4 m-auto pb-2">
                  <iframe
                    className="h-full w-full rounded-lg"
                    src="https://www.youtube.com/embed/bEyUUaTIy4k"
                    width="50%"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video md:w-1/2 w-5/6 m-auto pb-2">
                  <iframe
                    className="h-full w-full rounded-lg"
                    src="https://www.youtube.com/embed/FfK7PKn2jlM"
                    width="50%"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; encrypted-media;"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:mt-4 md:mb-4">
                  <div className="aspect-video md:w-1/2 w-5/6 m-auto md:pr-4 pb-2">
                  <iframe
                      className="h-full w-full rounded-lg"
                      src="https://www.youtube.com/embed/bSCUjIK-hk0"
                      width="50%"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="aspect-video md:w-1/2 w-5/6 m-auto md:pr-4 pb-2">
                  <iframe
                      className="h-full w-full rounded-lg"
                      src="https://www.youtube.com/embed/xUQRgtwwl7A"
                      width="50%"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; encrypted-media;"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="aspect-video md:w-1/2 w-5/6 m-auto pb-2">
                  <iframe
                      className="h-full w-full rounded-lg"
                      src="https://www.youtube.com/embed/_7hXxqemQ8A"
                      width="50%"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
              </div>
            </div>
          )}
          {activeContent === 'model' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <Modeling />
            </div>
          )}
          {activeContent === 'digital' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <Digital />
            </div>
          )}
          {activeContent === 'photo' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <Photography />
            </div>
          )}
          {activeContent === 'graphic' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <div className="flex md:flex-row flex-col mt-4 mb-4">
                <img
                  src="src/assets/floodCheckCover.jpg"
                  alt="Flood Check PDF"
                  className=" md:w-1/4 pb-2 h-3/4 m-auto cursor-pointer"
                  onClick={() => openModal("https://drive.google.com/file/d/1T1aR9H7OO_HBoithFjBW9UmPeIPcfILK/preview?usp=embed_googleplus")}
                />
                <img
                  src="src/assets/researchPropCover.jpg"
                  alt="Research Proposal PDF"
                  className="md:w-1/4 pb-2 h-3/4 m-auto cursor-pointer"
                  onClick={() => openModal("https://drive.google.com/file/d/1RvZkL-dD_Dg_25okltwl3S7A-gLCmkFU/preview?usp=embed_googleplus")}
                />
                <img
                  src="src/assets/whitepaperCover.jpg"
                  alt="Whitepaper PDF"
                  className="md:w-1/4 h-3/4 m-auto cursor-pointer fill"
                  onClick={() => openModal("https://drive.google.com/file/d/1f0hpY8ORIESaGMIC28cEAfrZTHUmNRWl/preview?usp=embed_googleplus")}
                />
              </div>
            </div>
          )}
          {activeContent === 'app' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <div className="w-full m-auto">
                <iframe
                  className="md:w-3/4 w-11/12 h-[800px] rounded-lg mx-auto"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJOkThCJMBslgNakh9TuZt3%2FDES200-A2-Draft_1%3Fnode-id%3D123-138%26starting-point-node-id%3D73%253A30%26t%3DJobYUYuXrJmTHxSw-1%26scaling%3Dscale-down%26starting-point-node-id%3D0%253A3%26mode%3Ddesign"
                  allowFullScreen=""
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleModalClick}>
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 h-3/4">
            <iframe
              src={modalContent}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;