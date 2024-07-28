import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';


export default function Spotlight() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };
  
    return (
<>
<div>
      {/* Posts Container */}
      <div className="relative flex h-full flex-wrap overflow-hidden justify-between  -mx-6">

        {/* Card 1 */}
        <div className="w-full md:w-full flex flex-col flex-grow flex-shrink px-6">
          <div className="flex-1 flex-row bg-white rounded-b-none overflow-hidden shadow-lg">
            <div
              onClick={() => openModal('Understanding Users, Prototyping, and Usability Testing')}
              className="flex flex-wrap no-underline hover:no-underline cursor-pointer"
            >
              <img
                src="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2017/04/featured-tools.png"
                className="h-full w-full pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">UI/UX Design</p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Understanding Users, Prototyping, and Usability Testing
              </div>
              <p className="text-gray-800 px-6 mb-5">
                I have plenty of experience through my degree of learning how to understand the user better. This includes market research, creating personas and empathy maps, and any other tools I can incorporate to understand the user's needs. I also am well versed in prototyping and using wireframes, mockups, and high fidelity prototypes to test usability and use this feedback to improve the design.
              </p>
            </div>
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div
              onClick={() => openModal('Web Development and Design')}
              className="flex flex-wrap no-underline hover:no-underline cursor-pointer"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnorthpeak.io%2Fwp-content%2Fuploads%2F2020%2F05%2Fimage-1.jpg&f=1&nofb=1&ipt=fbe9c075d8f81c89f582a60678111cf05dc9b59b7a91aeb06180da47d3c18aca&ipo=images"
                className="h-full w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Web Development</p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Web Development and Design
              </div>
              <p className="text-gray-800  px-6 mb-5">
                I have experience in developing and designing websites using various technologies such as HTML, CSS, JavaScript, and React. I focus on creating responsive and user-friendly interfaces.
              </p>
            </div>
          </div>
          
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div
              onClick={() => openModal('Graphic Design and Branding')}
              className="flex flex-wrap no-underline hover:no-underline cursor-pointer"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fworldbranddesign.com%2Fwp-content%2Fuploads%2F2019%2F11%2F5-Logo-Design-Harrow-Menswear-London-Freelance-Graphic-Designer-Margate-Thanet-Kent-Branding-5.jpg&f=1&nofb=1&ipt=75f1e8d8adb5610fb2639d7c856c78af77657eba2e8b8dc594327820950da6bc&ipo=images"
                className="h-full w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Graphic Design</p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Graphic Design and Branding
              </div>
              <p className="text-gray-800  px-6 mb-5">
                I have a strong background in graphic design and branding, creating visually appealing designs that effectively communicate the brand's message. My skills include logo design, typography, and color theory.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-dbm-db">Modal Title</h2>
            <p>{modalContent}</p>
            <p className=' text-dbm-db'>Enim sint nulla ut minim cupidatat consectetur duis nulla laboris nulla velit. Labore pariatur excepteur voluptate in aliquip est laborum incididunt sit aute anim irure qui laborum. Consequat quis sunt nisi nisi excepteur incididunt adipisicing aliquip esse incididunt anim velit ea culpa. Nostrud do ut deserunt proident amet non incididunt nostrud nulla officia nulla eiusmod sint proident. Fugiat commodo sunt Lorem commodo minim sint. Et sit occaecat proident irure proident est nostrud laboris Lorem nostrud laborum. Lorem sint duis dolore minim adipisicing est eu.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-dbm-pr-200 hover:bg-dbm-pr-100 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    
</>


    )
}