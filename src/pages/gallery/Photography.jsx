import React, { useState } from 'react';

const Images = [
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/90f955ef-0e1d-4e0b-a915-4932730daf5f_rw_1920.jpg?h=b7f622e23e19bca8003af7207bc95645",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/acbf2f7f-16e2-41e1-bd06-0927c7b5dced_rw_1920.jpg?h=dfacd51f24f0836a11a97d809ce56f76",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6e7cc6d3-de7a-41e5-b61b-d59ca9af5efa_rw_1920.jpg?h=7ec51b8c0231df8984b4223d2df56311",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/8dbcbc83-272d-4112-90e6-329f0e81cc1d_rw_1920.jpg?h=8ac024b6c23b860971dc6fbb12f38867",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/63e6ad7f-3ef3-4623-8aed-e6d6c0fd62d5_rw_1920.jpg?h=e89193280a5715a3ecba502955eb3841",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/1c6ccafa-fe16-4b7a-8ab8-1000906883cc_rw_1920.jpg?h=b2ff7ed276a4e03a964e17b1d659fb70",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/7f2344a6-afc5-4f0c-8828-c127f3134919_rw_1920.jpg?h=f9c34019f3223901779cc5cf612266af",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/ed449c61-5d35-4c81-b33c-cc32cbe78bca_rw_1920.jpg?h=3e953753e93ee7fe1cc7f86487fe4f2e",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/75c5eaf6-90f5-43a9-ab15-dffb099a48a5_rw_1920.jpg?h=1c0d6ebe6c3e3d243e5f206f1afd8624",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/455f8820-39f4-4407-9c56-a63288a2031b_rw_1920.jpg?h=af93c616cad4c29aaab350b6fe440bf4",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b765bcbe-9337-4211-9956-43e7cd9ed03e_rw_1920.jpg?h=197482e81a5b312007d19f69ea711ca7",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/fe97fe71-bb3a-48b8-9859-6e33703faff8_rw_1920.jpg?h=890f4e5390174aa01c38a4ac86333934",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/fd5cac0c-7de5-41c4-af8c-6c411c6b6c53_rw_1920.jpg?h=fac037adfa8b2068540fd1dc4cf7b2e0",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/a24f4227-7a27-4ffb-9d0b-9490f16f5091_rw_1920.jpg?h=898eeab88f98cf9baaa70c8852aef3c9",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6861a6d1-96b6-4b28-a633-3d89b37e3b07_rw_1920.jpg?h=0baa9646c1732fa45cde4efa5132f2d7",
  "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/098f3633-00b1-4501-be68-f027ecbbcda6_rw_1920.jpg?h=98412dad3ffe8485532ecc92d3186134",
];

const Photography = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 4;
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
            I have always been a fan of photography and it is my favourite hobby. Here are some of my favourite shots.
          </p>
          <div className="flex justify-center mt-4">
            <button onClick={goToPreviousPage} disabled={currentPage === 0} className='bg-dbm-pr-200 mr-1 focus:ring text-dmb-w'>Previous</button>
            <button onClick={goToNextPage} disabled={currentPage === totalPages - 1} className='bg-dbm-pr-200 ml-1 focus:ring text-dbm-w'>Next</button>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {currentImages.map((image, index) => (
              <div key={index} className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt={`Gallery image ${index + 1}`}
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src={image}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;