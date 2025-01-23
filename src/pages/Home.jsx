import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';

export default function Spotlight() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [modalContent1, setModalContent1] = useState('');

  const openModal1 = (content) => {
    setModalContent1(content);
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
    setModalContent1('');
  };

  const images = [
    "src/assets/hero/hero2.png",
    "src/assets/hero/hero3.png",
    "src/assets/hero/hero4.png",
  ];

  return (
    <>
      <div id='spotlight' className='flex flex-col w-full items-center justify-center bg-dbm-db-300 pb-8'>
        {/* Posts Container */}
        <div className='flex flex-col w-full items-center justify-center pb-5'>
          <div className='w-full border-y-8 border-dbm-gr-300 bg-dbm-w-100'>
            <h1 className="font-extrabold tracking-wide m-auto text-center text-dbm-cr-200 uppercase pt-7">
              Showcase
            </h1>
            <hr className="w-1/4 m-auto border-dbm-w-200" />
            <p className='text-2xl pb-7 text-dbm-db-400 text-justify py-6 w-5/6 md:w-2/3 m-auto'>
              As my final-year design project, I created Butterfly, an AI-powered productivity app that represents the culmination of everything I’ve learned throughout my degree. Designed to address the unique challenges adults with ADHD face in staying organized and focused at work, Butterfly breaks down overwhelming tasks, prioritizes effectively, and minimizes distractions. With its neurodivergent-friendly design and smart task management, Butterfly offers a practical and empowering solution for better productivity.
            </p>
          </div>
        </div>

        <div className="relative flex h-full flex-wrap overflow-hidden justify-between -mx-6 w-5/6 md:w-2/3">
          {/* Card 1 */}
          <div className="w-full md:w-full flex flex-col flex-grow flex-shrink pt-10 md:px-6">
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
          
        </div>
        

        {/* Modal 1 */}
        {isModalOpen1 && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-dbm-w-100 p-6 shadow-lg md:w-2/3 w-full h-full rounded-3x md:h-5/6 overflow-y-scroll overflow-x-hidden rounded-3xl md:pt-5 pt-10">
              <h2 className="text-3xl font-bold text-dbm-lb-300 ">Butterfly Productivity</h2>
              <p className=' text-dbm-db-400 text-xl md:text-md py-2 uppercase'>
                <a href='https://redesign.ac.nz/projects/butterfly-productivity'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mx-2" />  University Website Showcase 
                </a>
              </p>
              <p className=' text-dbm-db-100 text-xl pb-6'>
                As my final-year design project I created Butterfly, an AI-powered productivity app created to address the challenges adults with ADHD face in managing tasks and maintaining focus in the workplace. 
              </p>
              <p className=' text-dbm-db-100 text-xl pb-6'>
                I combined user-centered research, thoughtful design principles, and a genuine empathy for neurodivergent experiences to craft a solution that breaks down overwhelming tasks, reduces distractions, and improves overall workflow.
              </p>
              <p className='text-dbm-lb-300 text-2xl font-bold pb-3'>
                Process
              </p>
              <div className='flex md:flex-row flex-col items-stretch'>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl p-2 text-justify mx-auto'>	
                    Research & User Insights
                  </p>
                  <li className='text-dbm-w-200 text-lg pb-2 list-disc ml-11'>Explored ADHD-related needs through empathy maps and user scenarios.</li>
                  <li className='text-dbm-w-200 text-lg pb-3 list-disc ml-11'>Discovered key pain points like task overload and executive dysfunction.</li>
                </ul>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl p-2 text-justify mx-auto'>	
                    Design & Prototyping
                  </p>
                  <li className='text-dbm-w-200 text-lg pb-2 list-disc ml-11'>Created low-fidelity wireframes to refine workflows and visuals.</li>
                  <li className='text-dbm-w-200 text-lg pb-3 list-disc ml-11'>Focused on accessible design, using clear icons and minimal clutter.</li>
                </ul>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl p-2 text-justify mx-auto'>	
                    AI Integration
                  </p>
                  <li className='text-dbm-w-200 text-lg pb-2 pr-2 list-disc ml-11'>Introduced an assistant to help prioritize tasks and automate routine steps.</li>
                  <li className='text-dbm-w-200 text-lg pb-3 pr-2 list-disc ml-11'>Balanced advanced features with an intuitive interface, avoiding overwhelm.</li>
                </ul>
              </div>
              <p className='text-dbm-lb-300 text-2xl font-bold pb-3'>
                Skills Demonstrated
              </p>
              <div className='flex md:flex-row flex-col items-stretch'>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl p-2 text-justify mx-auto'>	
                    Empathetic Design
                  </p>
                  <li className='text-dbm-w-200 text-lg pb-2 list-disc ml-11'>Translated user feedback into tangible interface improvements.</li>
                  <li className='text-dbm-w-200 text-lg pb-3 list-disc ml-11'>Maintained a neurodivergent-friendly approach throughout.</li>
                </ul>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl p-2 text-justify mx-auto'>	
                    Iterative Prototyping
                  </p>
                  <li className='text-dbm-w-200 text-lg pb-2 list-disc ml-11'>Gathered peer feedback and refined features in multiple design loops.</li>
                  <li className='text-dbm-w-200 text-lg pb-3 list-disc ml-11'>Ensured each iteration solved real user challenges.</li>
                </ul>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl p-2 text-justify mx-auto'>	
                    Technical Know-How
                  </p>
                  <li className='text-dbm-w-200 text-lg pb-2 list-disc ml-11'>Coded the project from scratch, combining React, Electron, and AI elements for a cohesive system.</li>
                  <li className='text-dbm-w-200 text-lg pb-3 list-disc ml-11'>Handled cross-platform usability alongside straightforward user flows.</li>
                </ul>
              </div>
              <p className='text-dbm-lb-300 text-2xl font-bold pb-3'>
                Outcomes & Learnings
              </p>
              <div className='flex md:flex-row flex-col items-stretch'>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl py-1 text-justify mx-auto top-0'>	
                    Addresses Genuine Need:
                  </p>
                  <p className='text-dbm-w-200 text-lg pb-3 px-4 ml-7'>Focused on real ADHD concerns, from executive dysfunction to stress reduction</p>
                </ul>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3'>
                  <p className=' text-dbm-lb-100 text-xl py-1 text-justify mx-auto top-0 '>	
                    Tech + Simplicity:
                  </p>
                  <p className='text-dbm-w-200 text-lg pb-3 px-4 ml-7 align-text-top'>Showed how AI can augment rather than complicate user experiences</p>
                </ul>
                <ul className='flex flex-col bg-dbm-lb-400 m-2 rounded-3xl md:w-1/3 align-top'>
                  <p className=' text-dbm-lb-100 text-xl py-1 text-justify mx-auto top-0'>	
                    Holistic Approach:
                  </p>
                  <p className='text-dbm-w-200 text-lg pb-3 px-4 ml-7 align-text-top'>Highlighted the importance of empathy, accessibility, and iteration in creating impactful tools</p>
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
      </div>
      <Carousel images={images}/>
    </>
  );
}