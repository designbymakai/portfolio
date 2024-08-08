import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';


export default function Spotlight() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [modalContent1, setModalContent1] = useState('');
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [modalContent2, setModalContent2] = useState('');
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [modalContent3, setModalContent3] = useState('');

  const openModal1 = (content) => {
    setModalContent1(content);
    setIsModalOpen1(true);
  };
  
  const closeModal1 = () => {
    setIsModalOpen1(false);
    setModalContent1('');
  };
  
  const openModal2 = (content) => {
    setModalContent2(content);
    setIsModalOpen2(true);
  };
  
  const closeModal2 = () => {
    setIsModalOpen2(false);
    setModalContent2('');
  };

  const openModal3 = (content) => {
    setModalContent3(content);
    setIsModalOpen3(true);
  };
  
  const closeModal3 = () => {
    setIsModalOpen3(false);
    setModalContent3('');
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
              onClick={() => openModal1('Understanding Users, Prototyping, and Usability Testing')}
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
              onClick={() => openModal2('Web Development and Design')}
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
              I have experience in developing and designing websites using various technologies such as HTML, CSS, JavaScript, and React. I focus on creating responsive, aesthetic, and user-friendly interfaces.
              </p>
            </div>
          </div>
          
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div
              onClick={() => openModal3('Graphic Design and Branding')}
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

        {/* Modal 1 */}
        {isModalOpen1 && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-2/3">
              <h2 className="text-2xl font-bold text-dbm-db">Understanding Users, Prototyping, and Usability Testing</h2>
              <p>{modalContent1}</p>
              <p className=' text-dbm-db'>
              Through my design degree at the University of Auckland, I've developed a robust understanding of user-centered design principles, which has become foundational in my approach to creating meaningful user experiences. I have honed my ability to conduct thorough market research and employ various design methodologies to gain insights into user behavior. By crafting detailed personas and empathy maps, I ensure that each design decision is informed by a deep understanding of the user's needs, motivations, and pain points. <br/> <br/>

I am adept at utilizing a wide range of tools and techniques to visualize ideas and test their feasibility. My proficiency in prototyping spans from wireframes and mockups to high-fidelity prototypes, enabling me to create interactive designs that simulate real-world usage. This approach allows me to conduct rigorous usability testing, gathering valuable feedback that informs iterative development and leads to continuous improvement in the design process.  <br/> <br/>

By integrating user insights with creative problem-solving, I strive to develop solutions that are not only aesthetically pleasing but also intuitive and functional. My commitment to understanding users' perspectives and enhancing their experiences drives my work and ensures that my designs are both innovative and user-centric. <br/>
              </p>
              <button
                onClick={closeModal1}
                className="mt-4 bg-dbm-pr-200 hover:bg-dbm-pr-100 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal 2 */}
        {isModalOpen2 && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-2/3">
              <h2 className="text-2xl font-bold text-dbm-db">Web Development and Design</h2>
              <p>{modalContent2}</p>
              <p className=' text-dbm-db'>
              I have extensive experience in developing and designing websites using a variety of technologies, including HTML, CSS, JavaScript, and React. My approach focuses on creating responsive, aesthetic, and user-friendly interfaces that enhance the overall user experience. With a keen eye for detail and a passion for clean design, I ensure that every project meets the highest standards of quality and functionality. <br/> <br/>

In addition to these core technologies, I have experience working with Tailwind CSS for efficient styling and Vite for fast and optimized build processes. I am also learning to use Electron to create desktop applications with web technologies, bridging the gap between web and desktop platforms. My capstone project for design involves building productivity software using Electron, React, and TypeScript, showcasing my ability to leverage modern frameworks and libraries to develop robust, cross-platform applications. <br/> <br/>

I am committed to staying up-to-date with the latest web development trends and best practices, ensuring that my skills remain relevant and competitive in a rapidly evolving industry. Whether working independently or as part of a team, I thrive on solving complex problems and delivering solutions that exceed client expectations. <br/>
              </p>
              <button
                onClick={closeModal2}
                className="mt-4 bg-dbm-pr-200 hover:bg-dbm-pr-100 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Modal 3 */}
        {isModalOpen3 && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-2/3">
              <h2 className="text-2xl font-bold text-dbm-db">Graphic Design and Branding</h2>
              <p>{modalContent3}</p>
              <p className=' text-dbm-db'>
              I have a strong background in graphic design and branding, with a passion for creating visually compelling designs that effectively communicate a brand's message. My skills encompass a wide range of design elements, including logo design, typography, and color theory, allowing me to craft cohesive and memorable brand identities. I understand the power of visual storytelling and strive to develop designs that resonate with target audiences and leave a lasting impression. <br/> <br/>

One of my key strengths is the ability to create inclusive layouts that appeal to diverse audiences, including the elderly and neurodivergent populations. By applying principles of universal design, I ensure that my work is accessible and engaging for all users, considering factors such as readability, contrast, and intuitive navigation. This approach not only broadens the reach of the brand but also fosters a sense of inclusivity and connection with its audience. <br/> <br/>

My design process is rooted in research and collaboration, ensuring that each project is tailored to meet the unique needs and goals of the brand. I am adept at translating complex ideas into visually stunning graphics, using a combination of creativity and strategic thinking to deliver designs that are both aesthetically pleasing and functional. <br/> <br/>

Whether developing a brand from the ground up or refreshing an existing identity, I am committed to creating designs that capture the essence of the brand and convey its values and vision. <br/>
              </p>
              <button
                onClick={closeModal3}
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