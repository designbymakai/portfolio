import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import { FaDatabase, FaDraftingCompass, FaHeart, FaPencilRuler, FaSearch, FaSitemap, FaSmileBeam, FaTimes, FaUpload, FaUserFriends } from 'react-icons/fa';

export default function Spotlight() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false);
  const [modalContent1, setModalContent1] = useState('');

  const openModal1 = (content) => {
    setModalContent1(content);
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
    setModalContent1('');
  };

  const openCarouselModal = () => {
    setIsCarouselModalOpen(true);
  };

  const closeCarouselModal = () => {
    setIsCarouselModalOpen(false);
  };

  const images = [
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
  ];

  return (
    <>
      <div id='spotlight' className='flex flex-col w-full items-center justify-center bg-dbm-db-300 pb-8'>
        {/* Posts Container */}
        <div className='flex flex-col w-full items-center justify-center pb-5'>
          <div className='w-full border-b-8 border-dbm-gr-300 bg-dbm-w-100'>
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
                  src="/butterfly-hero.png"
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
            <div className="bg-dbm-db-200 p-6 shadow-lg md:h-[90vh] w-full h-full overflow-y-scroll overflow-x-hidden md:pt-5 pt-10">
              <h2 className="text-3xl font-bold text-dbm-lb-300 ">Butterfly Productivity</h2>
              <p className=' text-dbm-w-400 text-xl md:text-md py-2 uppercase'>
                <a href='https://redesign.ac.nz/projects/butterfly-productivity'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mx-2" />  University Website Showcase 
                </a>
              </p>
              <p className=' text-dbm-w-100 text-xl pb-6'>
                As my final-year design project I created Butterfly, an AI-powered productivity app created to address the challenges adults with ADHD face in managing tasks and maintaining focus in the workplace. 
              </p>
              <p className=' text-dbm-w-100 text-xl pb-6'>
                I combined user-centered research, thoughtful design principles, and a genuine empathy for neurodivergent experiences to craft a solution that breaks down overwhelming tasks, reduces distractions, and improves overall workflow.
              </p>


              <div className="bg-dbm-db-100 bg-opacity-55 shadow-lg w-full h-[90vh] overflow-hidden border-y-4 border-dbm-w-200">
                <Carousel images={images} />
              </div>


              <p className='text-dbm-lb-300 text-2xl font-bold py-3'>
                Process
              </p>

              <div className='flex md:flex-row flex-col'> 
                <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaSearch className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Research & User Insights</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Explored ADHD-related needs through empathy maps and user scenarios.</p>
                      <p className='text-dbm-w-200 text-lg pb-2'>Discovered key pain points like task overload and executive dysfunction.</p>
                    </div>
                  </div>

                  <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaDraftingCompass className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Design & Prototyping</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Created low-fidelity wireframes to refine workflows and visuals.</p>
                      <p className='text-dbm-w-200 text-lg pb-2'>Focused on accessible design, using clear icons and minimal clutter.</p>
                    </div>
                  </div>

                  <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaDatabase className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>AI Integration</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Introduced an assistant to help prioritize tasks and automate routine steps.</p>
                      <p className='text-dbm-w-200 text-lg pb-2'>Balanced advanced features with an intuitive interface, avoiding overwhelm.</p>
                    </div>
                  </div>
                </div>

                



              
              <p className='text-dbm-lb-300 text-2xl font-bold py-3'>
                Skills Demonstrated
              </p>

              <div className='flex md:flex-row flex-col'> 
                <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaHeart className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Empathetic Design</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Translated user feedback into tangible interface improvements.</p>
                      <p className='text-dbm-w-200 text-lg pb-2'>Maintained a neurodivergent-friendly approach throughout.</p>
                    </div>
                  </div>

                  <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaPencilRuler className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Iterative Prototyping</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Gathered peer feedback and refined features in multiple design loops.</p>
                      <p className='text-dbm-w-200 text-lg pb-2'>Ensured each iteration solved real user challenges.</p>
                    </div>
                  </div>

                  <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaSitemap className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Technical Know-How</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Coded the project from scratch, combining React, Electron, and AI elements for a cohesive system.</p>
                      <p className='text-dbm-w-200 text-lg pb-2'>Handled cross-platform usability alongside straightforward user flows.</p>
                    </div>
                  </div>
                </div>


              <p className='text-dbm-lb-300 text-2xl font-bold py-3'>
                Outcomes & Learnings
              </p>


              <div className='flex md:flex-row flex-col pb-10'> 
                <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaSmileBeam className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Addresses Genuine Need</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Focused on real ADHD concerns, from executive dysfunction to stress reduction.</p>
                    </div>
                  </div>

                  <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaUpload className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Tech + Simplicity</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Showed how AI can augment rather than complicate user experiences.</p>
                    </div>
                  </div>

                  <div className='bg-dbm-lb-300 m-2 rounded-3xl md:w-1/3 flex'> 
                    <div className='m-2 rounded-3xl mx-10'>
                      <div className='flex flex-row items-center justify-center'>
                        <FaUserFriends className='text-3xl text-dbm-db-300 pr-3' />
                        <p className='text-dbm-w-100 text-xl font-bold'>Hollistic Approach</p>
                      </div>
                      <p className='text-dbm-w-200 text-lg pb-2'>Highlighted the importance of empathy, accessibility, and iteration in creating impactful tools</p>
                    </div>
                  </div>
                </div>


              <button
                onClick={closeModal1}
                className="mt-4 bg-dbm-pr-200 hover:bg-dbm-pr-100 text-white rounded absolute md:top-12 top-0 right-4 p-2"
              >
                <FaTimes className='text-2xl text-dbm-w-200' />
              </button>
            </div>
          </div>
        )}

        
      </div>
    </>
  );
}