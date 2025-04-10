import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaSearch, FaDraftingCompass, FaDatabase, FaHeart, FaPencilRuler, FaSitemap, FaSmileBeam, FaUpload, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa';

const items = [
  { 
    type: 'intro', 
    title: 'Butterfly Productivity', 
    content: 'University Website Showcase', 
    imgSrc: '/butterfly-hero.png' 
  },
  { 
    type: 'standard', 
    title: 'Homepage - Your Day at a Glance', 
    imgSrc: '/hero-5.png', 
    content: (
      <>
        <p className="pb-2 text-sm md:text-xl">
          The Butterfly homepage offers a clear and concise overview of your day, allowing you to hit the ground running. It displays a thumbnail of your calendar events, a daily agenda highlighting tasks and events, and a summary of active tasks, including those due that day.
        </p>
        <p className="pb-2 text-sm md:text-xl">
          The AI Assistant takes center stage on this page, offering quick interactions to add, update, or prioritize tasks. You can also check upcoming tasks and get advice on what to focus on. The homepage is designed to give you all the essential information at a glance, helping you kickstart your day efficiently.
        </p>
        <p className="pb-2 font-bold text-sm md:text-2xl">Key Features:</p>
        <ul className="list-disc list-inside text-xs md:text-lg">
          <li><strong>Daily Agenda:</strong> Quick overview of tasks and events for the day.</li>
          <li><strong>Calendar Snapshot:</strong> Thumbnail of upcoming calendar events.</li>
          <li><strong>Task Summary:</strong> Displays active tasks and those due today.</li>
          <li><strong>AI Assistant:</strong> Add, change, prioritize tasks, and get advice.</li>
          <li><strong>Quick Start:</strong> Get all your info at once and begin your day with clarity.</li>
        </ul>
      </>
    )
  },
  { 
    type: 'standard', 
    title: 'Calendar for Seamless Planning', 
    imgSrc: '/hero3.png', 
    content: (
      <>
        <p className="pb-2 text-sm md:text-xl">
          Butterfly’s calendar page is designed for quick and effortless event management. Users can easily create, edit, and rearrange events through simple interactions. The calendar is highly customizable, offering multiple views to fit any planning style, while also providing a quick overview on the home screen through a mini calendar display.
        </p>
        <p className="pb-2 font-bold text-sm md:text-2xl">Key Features:</p>
        <ul className="list-disc list-inside text-xs md:text-lg">
          <li><strong>Easy Event Creation:</strong> Double-click any date to add a new event.</li>
          <li><strong>Drag & Drop:</strong> Effortlessly rearrange events to update your schedule.</li>
          <li><strong>Multiple Views:</strong> Switch between day, week, month, or agenda views.</li>
          <li><strong>Mini Calendar Display:</strong> Get an at-a-glance view of upcoming events on the home screen.</li>
          <li><strong>Color-Coded Events:</strong> Instantly identify event types for better organization.</li>
          <li><strong>Streamlined Navigation:</strong> Quickly switch between calendar views without losing context.</li>
        </ul>
      </>
    )
  },
  { 
    type: 'standard', 
    title: 'Task Management Made Simple', 
    imgSrc: '/hero2.png', 
    content: (
      <>
        <p className="pb-2 text-sm md:text-xl">
          Butterfly’s task management system empowers users to effortlessly organize and categorize tasks with customizable tags and projects. Tasks are color-coded by project and can include custom icons for easy identification. The Projects page enhances organization by displaying related tasks and allowing users to add notes and descriptions, helping both the user and AI assistant make informed decisions.
        </p>
        <p className="pb-2 font-bold text-sm md:text-2xl">Key Features:</p>
        <ul className="list-disc list-inside text-xs md:text-lg">
          <li><strong>Custom Tags & Projects:</strong> Easily categorize tasks for quick access.</li>
          <li><strong>Color-Coded Tasks:</strong> Instantly identify tasks based on project.</li>
          <li><strong>Custom Icons:</strong> Add visual cues to tasks for better organization.</li>
          <li><strong>Project Notes:</strong> Include descriptions to give context to tasks.</li>
          <li><strong>Seamless Integration:</strong> The AI assistant uses project details to prioritize effectively.</li>
          <li><strong>Clear Overview:</strong> The main task list shows all tasks at a glance.</li>
        </ul>
      </>
    )
  },
  { 
    type: 'outro', 
    title: 'Outcomes & Learnings' 
  }
];

export default function Exhibit() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="bg-dbm-db-200 pb-6">
      <div className="carousel-container flex flex-col md:flex-row items-center h-full bg-dbm-db-100">
        <button onClick={handlePrev} className="p-2 md:p-4 bg-dbm-db-100 rounded-l-lg self-start md:self-auto mb-4 md:mb-0">
          <FaArrowLeft className="text-xl md:text-2xl text-dbm-pr-100" />
        </button>
        <div className="carousel flex overflow-x-hidden md:overflow-y-hidden overflow-y-scroll w-full relative">
          <div
            className="carousel-inner flex transition-transform duration-300 w-[100vw] md:w-[90vw]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item flex-shrink-0 w-full h-[90vh] flex flex-col md:flex-row ${index === currentIndex ? 'scale-105' : 'scale-95'} transition-transform duration-300`}
              >
                {item.type === 'intro' ? (
                  <div className="special-slide w-full h-full flex flex-col items-center justify-center bg-dbm-db-100 p-4 md:p-8">
                    <h2 className="text-dbm-pr-100 text-2xl md:text-4xl font-bold mb-4">{item.title}</h2>
                    <div className="flex flex-col md:flex-row items-center mb-4">
                      <a href="https://redesign.ac.nz/projects/butterfly-productivity">
                        <FaExternalLinkAlt className="mx-2" />
                      </a>
                      <p className="text-dbm-w-400 text-base md:text-lg py-2 uppercase text-center">
                        <a href="https://redesign.ac.nz/projects/butterfly-productivity">University Website Showcase</a>
                      </p>
                    </div>
                    <img src={item.imgSrc} alt={item.title} className="w-11/12 md:w-4/6 h-auto object-contain" />
                  </div>
                ) : item.type === 'outro' ? (
                  <div className="special-slide w-full h-full bg-dbm-db-100 p-4 md:p-8 flex flex-col items-center justify-start overflow-y-auto space-y-6">
                    <h2 className="text-dbm-pr-100 text-2xl md:text-4xl font-bold mb-6">{item.title}</h2>
                    {/* Processes Section */}
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full">
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaSearch className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Research & User Insights</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Explored ADHD-related needs through empathy maps.</li>
                          <li>Discovered key pain points like task overload.</li>
                        </ul>
                      </div>
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaDraftingCompass className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Design & Prototyping</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Created low-fidelity wireframes.</li>
                          <li>Focused on accessible design.</li>
                        </ul>
                      </div>
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaDatabase className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">AI Integration</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Introduced an AI assistant.</li>
                          <li>Balanced advanced features with ease.</li>
                        </ul>
                      </div>
                    </div>
                    {/* Skills Demonstrated Section */}
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full">
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaHeart className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Empathetic Design</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Translated feedback into improvements.</li>
                          <li>Maintained a neurodivergent approach.</li>
                        </ul>
                      </div>
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaPencilRuler className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Iterative Prototyping</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Gathered peer feedback.</li>
                          <li>Refined designs in loops.</li>
                        </ul>
                      </div>
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaSitemap className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Technical Know-How</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Coded from scratch using React & Electron.</li>
                          <li>Handled cross-platform usability.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full">
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaSmileBeam className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Addresses Genuine Need</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Focused on real ADHD concerns</li>
                          <li>Can boost executive function and reduce stress.</li>
                        </ul>
                      </div>
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaUpload className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Tech + Simplicity</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Showed how AI can augment user experience.</li>
                          <li>Harnesses AI to make tasks simpler.</li>
                        </ul>
                      </div>
                      <div className="bg-dbm-lb-300 p-4 rounded-3xl w-full md:w-1/3 flex flex-col items-center">
                        <FaUserFriends className="text-xl md:text-3xl text-dbm-db-300 mb-2" />
                        <p className="text-dbm-w-100 text-base md:text-xl font-bold mb-2">Hollistic Approach</p>
                        <ul className="list-disc list-inside text-xs md:text-sm text-left">
                          <li>Highlighted the importance of empathy and accessibility in design.</li>
                          <li>Targets all aspects of the users’ workflow to simplify their lives.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-box w-full md:w-2/5 bg-dbm-db-100 md:mx-6 p-4 flex flex-col items-center justify-evenly space-y-2">
                          <p className="text-dbm-w-200 text-lg md:text-2xl font-bold">{item.title}</p>
                          <div className="text-dbm-w-200 text-sm md:text-2xl">
                            {item.content}
                          </div>
                        </div>
                        <div className="image-box w-full md:w-3/5 flex items-center justify-center mt-4 md:mt-0">
                          <img src={item.imgSrc} alt={item.title} className="w-full h-auto object-contain" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="image-box w-full md:w-3/5 flex items-center justify-center mt-4 md:mt-0">
                          <img src={item.imgSrc} alt={item.title} className="w-full h-auto object-contain" />
                        </div>
                        <div className="text-box w-full md:w-2/5 bg-dbm-db-100 md:mx-4 p-4 flex flex-col items-center justify-evenly space-y-2">
                          <p className="text-dbm-w-200 text-lg md:text-2xl font-bold">{item.title}</p>
                          <div className="text-dbm-w-200 text-sm md:text-base">
                            {item.content}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="p-2 md:p-4 bg-dbm-db-100 rounded-r-lg self-end md:self-auto mt-4 md:mt-0">
          <FaArrowRight className="text-xl md:text-2xl text-dbm-pr-100" />
        </button>
      </div>
    </div>
  );
}