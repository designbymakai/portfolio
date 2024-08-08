import React, { useState } from 'react';

export default function Digital() {
  const Images = [
    "https://i.ibb.co/QMQjPjR/IMG-1774.jpg", 
    "https://i.ibb.co/YfZWytg/IMG-1775.jpg", 
    "https://i.ibb.co/p1nKqR7/IMG-1776.jpg", 
    "https://i.ibb.co/KL9zC8B/IMG-1777.jpg", 
    "https://i.ibb.co/MZs1fjM/IMG-1773.jpg", 
    "https://i.ibb.co/KWsygZf/IMG-1771.jpg", 
    "https://i.ibb.co/kctzdsG/IMG-1772.jpg", 
    "https://i.ibb.co/XFCWLKJ/IMG-1770.jpg", 
    "https://i.ibb.co/FxVXzHc/IMG-1769.jpg", 
    "https://i.ibb.co/QDWRzZh/IMG-1768.jpg", 
    "https://i.ibb.co/3W5X4Yf/IMG-1767.jpg", 
    "https://i.ibb.co/SnfnhR5/IMG-1766.jpg", 
    "https://i.ibb.co/GThTTD3/IMG-1764.jpg",
    "https://i.ibb.co/mz8nSjJ/IMG-1765.jpg",
    "https://i.ibb.co/FYnr2T4/IMG-1763.jpg",
    "https://i.ibb.co/vxvcvtb/IMG-1762.jpg",
    "https://i.ibb.co/CvZtKY6/IMG-1761.jpg",
    "https://s12.gifyu.com/images/SQjxn.gif",
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

  return (
    <section className="">
      <div className="container px-5 py-6 mx-auto rounded-t">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A small collection of some of the digital art I've done. A majority of the works were completed on Procreate on my iPad. Though I don't value myself too much as a artist when it comes to drawing and sketching, it is something I love to do as a creative outlet.  
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
                <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md hover:scale-125" src={image} loading='lazy'/>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
