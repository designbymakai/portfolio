import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


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
<div className='flex flex-col w-full items-center justify-center bg-dbm-db-300 pb-8'>
      {/* Posts Container */}
      <div className='flex flex-col w-full items-center justify-center pb-5'>
      <div className='w-full border-y-8 border-dbm-gr-300 bg-dbm-w-100'>
            <h1 className="font-extrabold tracking-wide m-auto text-center text-dbm-cr-200 uppercase pt-7">
            Showcase
          </h1>
            <hr className="w-1/4 m-auto border-dbm-w-200 pb-4" />
            
              <p className='text-2xl pb-7 text-dbm-db-400 text-justify py-6 w-2/3 m-auto'>As my final-year design project, I created Butterfly, an AI-powered productivity app that represents the culmination of everything I’ve learned throughout my degree. Designed to address the unique challenges adults with ADHD face in staying organized and focused at work, Butterfly breaks down overwhelming tasks, prioritizes effectively, and minimizes distractions. With its neurodivergent-friendly design and smart task management, Butterfly offers a practical and empowering solution for better productivity.</p>
            </div>
          </div>

      <div className="relative flex h-full flex-wrap overflow-hidden justify-between -mx-6 w-2/3">
          

        {/* Card 1 */}
        <div className="w-full md:w-full flex flex-col flex-grow flex-shrink pt-10 px-6">
          <div className="flex-1 flex-row bg-white overflow-hidden shadow-lg rounded-3xl">
            <div
              onClick={() => openModal1('Butterfly Productivity')}
              className="flex flex-wrap no-underline hover:no-underline cursor-pointer"
            >
              
              <img
                src="src/assets/hero/butterfly-hero.png"
                className="h-full w-full pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">creating a comprehensive productivity app</p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
              Butterfly: Designing for Productivity and Neurodivergence
              </div>
              <p className="text-gray-800 px-6 mb-5">
                I have plenty of experience through my degree of learning how to understand the user better. This includes market research, creating personas and empathy maps, and any other tools I can incorporate to understand the user's needs. I also am well versed in prototyping and using wireframes, mockups, and high fidelity prototypes to test usability and use this feedback to improve the design.
              </p>
            </div>
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink ">
          <div className="flex-1 flex-row bg-white rounded-3xl overflow-hidden shadow-lg">
            <div
              onClick={() => openModal2('Web Development and Design')}
              className="flex flex-wrap no-underline hover:no-underline cursor-pointer"
            >
              <img
                src="src/assets/hero/hero2.png"
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
          <div className="flex-1 flex-row bg-white rounded-3xl overflow-hidden shadow-lg">
            <div
              onClick={() => openModal3('Graphic Design and Branding')}
              className="flex flex-wrap no-underline hover:no-underline cursor-pointer"
            >
              <img
                src="src/assets/hero/hero3.png"
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
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 shadow-lg w-2/3 rounded-3x overflow-hidden rounded-3xl">
              <h2 className="text-3xl font-bold text-dbm-lb-300 ">Butterfly Productivity</h2>
            
              <p className=' text-dbm-db-400 text-xl md:text-sm py-2 uppercase'><a href='https://redesign.ac.nz/projects/butterfly-productivity'><FontAwesomeIcon icon={faExternalLinkAlt} className="mx-2" />  University Website Showcase </a></p>
              <p className=' text-dbm-db-100 text-xl pb-6'>
              As my final-year design project I created Butterfly, an AI-powered productivity app created to address the challenges adults with ADHD face in managing tasks and maintaining focus in the workplace. 

              </p>
              <p className=' text-dbm-db-100 text-xl pb-6'>
              I combined user-centered research, thoughtful design principles, and a genuine empathy for neurodivergent experiences to craft a solution that breaks down overwhelming tasks, reduces distractions, and improves overall workflow.
              </p>
              <p className='text-dbm-lb-300 text-2xl font-bold pb-3'>
                Process
              </p>
              <div className='flex flex-row'>
                <ul className='pl-6 flex flex-col'>
                  <p className=' text-dbm-pr-300 text-xl pb-2'>	
                  Research & User Insights
                  </p>
                  <li className='text-dbm-db-100 text-lg pb-2 list-disc ml-11'>Explored ADHD-related needs through empathy maps and user scenarios.</li>
                  <li className='text-dbm-db-100 text-lg pb-3 list-disc ml-11'>Discovered key pain points like task overload and executive dysfunction.</li>
                </ul>
                <ul className='pl-6'>
                  <p className=' text-dbm-pr-300 text-xl pb-2'>	
                  Design & Prototyping
                  </p>
                  <li className='text-dbm-db-100 text-lg pb-2 list-disc ml-11'>Created low-fidelity wireframes to refine workflows and visuals.</li>
                  <li className='text-dbm-db-100 text-lg pb-3 list-disc ml-11'>Focused on accessible design, using clear icons and minimal clutter.</li>
                </ul>
                <ul className='pl-6'>
                  <p className=' text-dbm-pr-300 text-xl pb-2'>	
                  AI Integration
                  </p>
                  <li className='text-dbm-db-100 text-lg pb-2 list-disc ml-11'>Introduced an assistant to help prioritize tasks and automate routine steps.</li>
                  <li className='text-dbm-db-100 text-lg pb-3 list-disc ml-11'>Balanced advanced features with an intuitive interface, avoiding overwhelm.</li>
                </ul>
              </div>
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
              <h2 className="text-2xl font-bold text-dbm-db-100">Web Development and Design</h2>
              <p>{modalContent2}</p>
              <p className=' text-dbm-db-100'>
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
              <h2 className="text-2xl font-bold text-dbm-db-100">Graphic Design and Branding</h2>
              <p>{modalContent3}</p>
              <p className=' text-dbm-db-100'>
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