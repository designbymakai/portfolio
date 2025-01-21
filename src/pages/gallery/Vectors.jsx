import React, { useState } from 'react';

export default function Vectors() {
    const Images = [
      "https://i.ibb.co/VJbnpww/Asset-1.png",
        "https://i.ibb.co/nbXdRxY/bottles.png",
        "https://i.ibb.co/M89Fmv2/bus.png",
        "https://i.ibb.co/L0rkGjV/game-controller.png",
        "https://i.ibb.co/Sf1pwHL/gear.png",
        "https://i.ibb.co/q1KbKcr/group.png",
        "https://i.ibb.co/v1Tp8k3/home.png",
        "https://i.ibb.co/wydRbh6/hourglass.png",
        "https://i.ibb.co/RBT660H/phone-map.png",
        "https://i.ibb.co/1XRm441/suit-dog.png",
        "https://i.ibb.co/82n4ycD/waka-side.png",
        "https://i.ibb.co/P4bJ3LX/paintbrush.png",
        "https://i.ibb.co/g9fc06p/longsword-sheath.png",
        "https://i.ibb.co/kDxdsSQ/round-shield.png",
        "https://i.ibb.co/RSZFCD0/Asset-1-3x-copy.png",
        "https://i.ibb.co/LrYLH38/AT-Tamaraki-copy.png",
        "https://i.ibb.co/2NXh4HX/compass-blueprint.png",
        "https://i.ibb.co/Bzw2sgv/construction-cone.png",
        "https://i.ibb.co/cb44RNx/dbm-w-100hite-copy.png",
        "https://i.ibb.co/h8994Lg/dumpster-alt.png",
        "https://i.ibb.co/fSpKR1F/dumpster-fire-copy.png",
        "https://i.ibb.co/Wp5bb2b/fish-story-backdrop.png",
        "https://i.ibb.co/5vZn1gy/Flowers.png",
        "https://i.ibb.co/0FQ0pb1/Guitar.png",
        "https://i.ibb.co/pjKs1L4/hammer.png",
        "https://i.ibb.co/zW38RnZ/holding-hands-copy.png",
        "https://i.ibb.co/8KHV2Hf/icon-pad.png",
        "https://i.ibb.co/gSQF9Dv/Untitled-1-copy.png",
        "https://i.ibb.co/2P8msW7/planet-nbg.png",
        "https://i.ibb.co/KNx7NsJ/mountain-background.jpg",
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 8;
    const totalPages = Math.ceil(Images.length / imagesPerPage);
  
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = Images.slice(startIndex, endIndex);
  
    const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };
  
    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
      return(
  <section className="">
    <div className="container px-5 py-6 mx-auto rounded-t">
      <div className="flex flex-col text-center w-full mb-20">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        </p>
        <div className="flex justify-center mt-4">
            <button onClick={goToPreviousPage} disabled={currentPage === 0} className='bg-dbm-pr-200 mr-1 focus:ring text-dmb-w'>Previous</button>
            <button onClick={goToNextPage} disabled={currentPage === totalPages - 1} className='bg-dbm-pr-200 ml-1 focus:ring text-dbm-w-100'>Next</button>
          </div>
      </div>
      <div className="container mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {currentImages.map((image, index) => (
            <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
              <img className="mx-auto object-contain" src={image} alt={`Vector ${index}`} loading='lazy'/>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
  </section>
      )
  }
  