import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import { FaDatabase, FaDraftingCompass, FaHeart, FaPencilRuler, FaSearch, FaSitemap, FaSmileBeam, FaTimes, FaUpload, FaUserFriends } from 'react-icons/fa';
import Exhibit from '../components/Exhibit';

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
      <div id='spotlight' className='flex flex-col w-full items-center justify-center bg-dbm-db-200 pb-8'>
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

        <h2 className="text-3xl font-bold text-dbm-lb-300 ">Butterfly Productivity</h2>
              <p className=' text-dbm-w-400 text-xl md:text-md py-2 uppercase'>
                <a href='https://redesign.ac.nz/projects/butterfly-productivity'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mx-2" />  University Website Showcase 
                </a>
              </p>


              <div className='overflow-hidden'>
                <Exhibit />
              </div>


              

              

      

        

        
      </div>
    </>
  );
}