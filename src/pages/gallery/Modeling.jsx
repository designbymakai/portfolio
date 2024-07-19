import React, { useState } from 'react';

export default function Modeling() {
    const Images = [
        "https://i.ibb.co/RTS8Nrb/beauty-rend-side.png",
        "https://i.ibb.co/GJFz48p/beauty-rend-monitor.png",
        "https://i.ibb.co/Tm3CQT6/beauty-rend-frontangle.png",
        "https://i.ibb.co/kJ8zHkz/beauty-rend-coverpage.png",
        "https://i.ibb.co/34BxDH5/basic-render.png",
        "https://i.ibb.co/tm8RB3Q/beauty-rend-top.png",
        "https://i.ibb.co/2jZWpXc/beauty-rend-upside.png",
        "https://i.ibb.co/Gxsbfdk/beauty-rend-longlegs.png",
       "https://i.ibb.co/B24QddB/Screen-Shot-2023-03-26-at-2-04-11-PM.png",
        "https://i.ibb.co/x8Kg1bX/Screen-Shot-2023-03-26-at-2-05-35-PM.png",
        "https://i.ibb.co/T22Jqrf/Screen-Shot-2023-03-26-at-2-05-48-PM.png",
        "https://i.ibb.co/4471RL6/Screen-Shot-2023-03-26-at-2-06-18-PM.png",
        "https://i.ibb.co/F7cF7ss/Screen-Shot-2023-03-26-at-2-07-26-PM.png",
        "https://i.ibb.co/cvt93DF/Screen-Shot-2023-03-23-at-1-59-50-PM.png",
        "https://i.ibb.co/2dPr4Pp/Good-Render-EVE-1.png",
        "https://i.ibb.co/SRNzMyB/render-white-lcd.png",
        "https://i.ibb.co/QPYfR47/render-lighting-no-lcd.png",
        "https://i.ibb.co/Fzjwmxb/render-lighting-no-lcd.jpg",
        "https://i.ibb.co/gPMGhjk/lego-poster-final.jpg",
        "https://i.ibb.co/ThLyLZV/cutting-board-use3.png",
        "https://i.ibb.co/Pz90mJH/cutting-board-use2.png",
        "https://i.ibb.co/tMxF1PB/cutting-board-use.png",
        "https://i.ibb.co/Y8hxkmT/back-cycle.png",
        "https://i.ibb.co/xXJDgTp/front-view.png",
        "https://i.ibb.co/MBVX3Xk/front-view-cycle.png",
        "https://i.ibb.co/KbmnHSm/compare.png",
        
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
  <section className="body-font">
    <div className="container px-5 py-6 mx-auto rounded-t">
      <div className="flex flex-col text-center w-full mb-20">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        
        </p>
        <div className="flex justify-center mt-4">
            <button onClick={goToPreviousPage} disabled={currentPage === 0} className='bg-dbm-pr-200 mr-1 focus:ring text-dmb-w'>Previous</button>
            <button onClick={goToNextPage} disabled={currentPage === totalPages - 1} className='bg-dbm-pr-200 ml-1 focus:ring text-dbm-w'>Next</button>
          </div>
      </div>
      <div className="container mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {currentImages.map((image, index) => (
            <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
              <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md hover:scale-125" src={image}/>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </section>
      )
  }
  