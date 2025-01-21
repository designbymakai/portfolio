import React, { useState, useRef } from 'react';
import Digital from '../pages/gallery/Digital';
import Photography from '../pages/gallery/Photography';
import Modeling from '../pages/gallery/Modeling';
import Vectors from '../pages/gallery/Vectors';

const Skills = () => {
  const [activeContent, setActiveContent] = useState('default');
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainRef = useRef(null);

  const toggleContent = (content) => {
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

  return (
    <div ref={mainRef} className="w-full text-center bg-dbm-db-200 pt-16 min-h-screen">
      <div className="flex justify-center flex-col lg:pt-4 pt-8 pb-0">
        <div className="flex flex-row flex-wrap gap-3 justify-center border-dbm-db">
          <button
            type="button"
            onClick={() => toggleContent('video')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'video' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            Video Editing
          </button>
          <button
            type="button"
            onClick={() => toggleContent('model')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'model' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            3D Modeling
          </button>
          <button
            type="button"
            onClick={() => toggleContent('digital')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'digital' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            Digital Art
          </button>
          <button
            type="button"
            onClick={() => toggleContent('photo')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'photo' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            Photography
          </button>
          <button
            type="button"
            onClick={() => toggleContent('adobe')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'adobe' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            Vector Design
          </button>
          <button
            type="button"
            onClick={() => toggleContent('graphic')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'graphic' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            Graphic Design
          </button>
          <button
            type="button"
            onClick={() => toggleContent('app')}
            className={`bg-dbm-db-100 group relative inline-block overflow-hidden font-bold tracking-wide rounded-b-none rounded-t py-3 text-lg ${activeContent === 'app' ? 'text-dbm-pr-100' : 'border-transparent text-dbm-w-200 hover:text-dbm-pr-200 hover:border-dbm-pr-400'}`}
          >
            App Design
          </button>
        </div>

        <div className="bg-dbm-db-100 w-full p-4 rounded-lg shadow-xl flex-grow">
          {activeContent === 'default' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Welcome to the Gallery</p>
              <p className="text-lg text-dbm-w-200">Select a category to view the content.</p>
            </div>
          )}
          {activeContent === 'video' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Video Editing</p>
              <div className="flex mt-4 mb-4">
                
                <div className="aspect-video w-1/2 m-auto">
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
                <div className="aspect-video w-1/2 m-auto">
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
            </div>
          )}
          {activeContent === 'model' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">3D Modeling</p>
              <div className="flex mt-4">
                <div className="aspect-video w-1/3 m-auto">
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
                <div className="aspect-video w-1/3 m-auto">
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
                <div className="aspect-video w-1/3 m-auto">
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
              <Modeling />
            </div>
          )}
          {activeContent === 'digital' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Digital Art</p>
              <Digital />
            </div>
          )}
          {activeContent === 'photo' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Photography</p>
              <Photography />
            </div>
          )}
          {activeContent === 'adobe' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Vector Design</p>
              <Vectors />
            </div>
          )}
          {activeContent === 'graphic' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">Graphic Design</p>
              <div className="flex mt-4 mb-4">
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
          )}
          {activeContent === 'app' && (
            <div className="min-h-[calc(100vh-8rem)]">
              <p className="text-xl font-bold pt-2 text-dbm-pr-100">App Design</p>
              <div className="w-full m-auto">
                <iframe
                  className="w-3/4 h-[800px] rounded-lg mx-auto"
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