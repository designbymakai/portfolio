import { FaMapMarkerAlt, FaPhoneAlt, FaPenAlt, FaLinkedin, FaGithub, FaPlus, FaBrain, FaEye, FaUser, FaChalkboard, FaHandshake, FaBriefcase } from 'react-icons/fa';
import { useState } from "react";
import Portrait from '@/assets/portraits/portrait2.png';

const CARD_HEIGHT = 420; // px

// CardPops content as a function
function DesignPhilosophyCards() {
  return (
    <section className="w-full rounded-xl shadow-lg p-4 mb-8 bg-dbm-w-100" id="cardpop">
      <h1 className="text-3xl font-bold block tracking-wide text-dbm-db-400 uppercase p-4 text-left">
      My Design Philosphy
    </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 sm:px-0 justify-items-stretch items-start">
        {/* Card 1 */}
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-full sm:max-w-[420px] mx-auto md:max-w-none flex rounded-lg bg-dbm-db-400 hover:bg-dbm-db-500 p-6 md:p-8 flex-col hover:scale-105 hover:text-dbm-lb-400 transition h-auto md:h-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
                {/* Creativity & Innovation Icon */}
                <FaBrain className="text-2xl text-dbm-w-100" />
              </div>
              <h2 className="text-dbm-w-100 text-lg font-bold">Creativity &amp; Innovation</h2>
            </div>
            <p className="leading-relaxed text-base text-dbm-w-200">
              I love pushing boundaries to find unique solutions. Staying current with design trends helps me infuse fresh ideas, ensuring my work stands out and meets user needs effectively.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-full sm:max-w-[420px] mx-auto md:max-w-none flex rounded-lg bg-dbm-db-400 hover:bg-dbm-db-500 p-6 md:p-8 flex-col hover:scale-105 hover:text-dbm-lb-400 transition h-auto md:h-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
                {/* Attention to Detail Icon */}
                <FaEye className="text-2xl text-dbm-w-100" />
              </div>
              <h2 className="text-dbm-w-100 text-lg font-bold">Attention to Detail</h2>
            </div>
            <p className="leading-relaxed text-base text-dbm-w-200">
              I believe small touches make a big difference. From color consistency to text alignment, I ensure every element is polished and professional, elevating design from good to great.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-full sm:max-w-[420px] mx-auto md:max-w-none flex rounded-lg bg-dbm-db-400 hover:bg-dbm-db-500 p-6 md:p-8 flex-col hover:scale-105 hover:text-dbm-lb-400 transition h-auto md:h-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
                {/* User-Centric Approach Icon */}
                <FaUser className="text-2xl text-dbm-w-100" />
              </div>
              <h2 className="text-dbm-w-100 text-lg font-bold">User-Centric Approach</h2>
            </div>
            <p className="leading-relaxed text-base text-dbm-w-200">
              Empathy guides my work. By understanding users’ needs through research and testing, I create intuitive, meaningful experiences that genuinely solve problems.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-full sm:max-w-[420px] mx-auto md:max-w-none flex rounded-lg bg-dbm-db-400 hover:bg-dbm-db-500 p-6 md:p-8 flex-col hover:scale-105 hover:text-dbm-lb-400 transition h-auto md:h-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
                {/* Adaptability & Learning Icon */}
                <FaChalkboard className="text-2xl text-dbm-w-100" />
              </div>
              <h2 className="text-dbm-w-100 text-lg font-bold">Adaptability &amp; Learning</h2>
            </div>
            <p className="leading-relaxed text-base text-dbm-w-200">
              I thrive on the ever-evolving nature of design. Exploring new tools and methods keeps my approach versatile and innovative, allowing me to tackle any challenge confidently.
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-full sm:max-w-[420px] mx-auto md:max-w-none flex rounded-lg bg-dbm-db-400 hover:bg-dbm-db-500 p-6 md:p-8 flex-col hover:scale-105 hover:text-dbm-lb-400 transition h-auto md:h-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
                {/* Reliability & Professionalism Icon */}
                <FaBriefcase className="text-2xl text-dbm-w-100" />
              </div>
              <h2 className="text-dbm-w-100 text-lg font-bold">Reliability &amp; Professionalism</h2>
            </div>
            <p className="leading-relaxed text-base text-dbm-w-200">
              I value consistency and integrity. Meeting deadlines, welcoming feedback, and maintaining a trusted rapport with colleagues are at the core of how I work.
            </p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="p-4 w-full flex justify-center">
          <div className="w-full max-w-full sm:max-w-[420px] mx-auto md:max-w-none flex rounded-lg bg-dbm-db-400 hover:bg-dbm-db-500 p-6 md:p-8 flex-col hover:scale-105 hover:text-dbm-lb-400 transition h-auto md:h-[280px]">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
                {/* Teamwork & Collaboration Icon */}
                <FaHandshake className="text-2xl text-dbm-w-100" />
              </div>
              <h2 className="text-dbm-w-100 text-lg font-bold">Teamwork &amp; Collaboration</h2>
            </div>
            <p className="leading-relaxed text-base text-dbm-w-200">
              I thrive in group settings where open dialogue and mutual support drive success. Sharing ideas freely, valuing feedback, and understanding different perspectives leads to design solutions that truly resonate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryModal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 md:flex items-center justify-center bg-black/60 overflow-auto">
      <div className="bg-dbm-w-100 rounded-xl shadow-xl p-8 max-w-xl w-full relative">
        <button
          className="absolute top-4 right-4 text-dbm-w-100 hover:text-dbm-pr-200 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

const storyPreview = "I’m a Kiwi-born, American-raised designer with a lifelong love of creativity and technology. I grew up in Washington State on Bainbridge Island, where my parents raised me on a sailboat. That upbringing, along with years as a competitive swimmer, taught me discipline, curiosity, and the ability to think deeply and differently.";
const storyFull = (
  <>
    <h1 className="text-3xl font-bold block tracking-wide text-dbm-db-400 uppercase py-4 text-left">
      My Story
    </h1>
    <div className="text-left">
      <p className="text-xl text-dbm-db-300 pb-8">
        I’m a Kiwi-born, American-raised designer with a lifelong love of creativity and technology. I grew up in Washington State on Bainbridge Island, where my parents raised me on a sailboat. That upbringing, along with years as a competitive swimmer, taught me discipline, curiosity, and the ability to think deeply and differently.
      </p>
      <p className="text-xl text-dbm-db-300 pb-8">
        After starting university in Computer Science, I discovered my true strength lay in creative problem-solving and design. Navigating the challenges of undiagnosed ADHD helped me learn how to turn what once felt like a weakness into a source of unique perspective, adaptability, and focus.
      </p>
      <p className="text-xl text-dbm-db-300 pb-8">
        I recently graduated from the University of Auckland with a degree in Design, where I honed skills across UI/UX, visual design, 3D, and digital tools. I thrive on learning quickly, picking up new programs, industries, and challenges with enthusiasm. My work is shaped by high standards, empathy for users, and a drive to deliver solutions that are both functional and beautiful.
      </p>
      <p className="text-xl text-dbm-db-300 pb-8">
        Today, I bring a mix of creativity, technical grounding, and resilience to every project I take on—always pushing myself to go the extra mile and create work I can be proud of.
      </p>
    </div>
  </>
);

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className='w-full mx-auto'>
      <div className="flex flex-wrap justify-center bg-gray-200 overflow-auto z-50 md:w-full" id="about">
        <div className="w-full mx-auto my-8 flex justify-center px-4 md:px-0">
          <div className="w-full max-w-[1200px]">
            {/* Top row: Story and Contact side-by-side */}
            <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch w-full mt-8">
              {/* About Me Story (Left) */}
              <div className="flex-1 w-full">
                <div className="bg-dbm-w-100 rounded-xl shadow-lg p-8 flex flex-col justify-between h-full md:h-[420px]">
                  <h1 className="text-3xl font-bold block tracking-wide text-dbm-db-400 uppercase py-4 text-left">
                    My Story
                  </h1>
                  <div className="text-left flex-1">
                    <p className="text-xl text-dbm-db-300 pb-8">{storyPreview}</p>
                  </div>
                  <button
                    className="flex items-center justify-center text-dbm-db-300 hover:text-dbm-pr-200 text-base mt-4 bg-dbm-w-200"
                    onClick={() => setModalOpen(true)}
                    aria-label="Read more about my story"
                  >
                    <span className="mr-2">Read more</span>
                    <FaPlus />
                  </button>
                  <StoryModal open={modalOpen} onClose={() => setModalOpen(false)}>
                    {storyFull}
                  </StoryModal>
                </div>
              </div>

              {/* Contact Card (Right) */}
              <div className="flex-1 w-full">
                <div className="bg-dbm-w-100 rounded-xl shadow-lg p-8 mb-8 h-full md:h-[420px]">
                  <div className="flex justify-between items-center mb-4 h-full">
                    <div className="flex flex-col md:flex-row gap-6 w-full h-full">
                      <div className="flex flex-col items-center gap-4 justify-center md:border-r-2 md:pr-6 border-dbm-w-400">
                        <img
                          src={Portrait}
                          className="rounded-lg align-middle border-gray-300 max-w-[150px] hover:scale-110 -m-16 md:py-0 py-10"
                          alt="Portrait"
                        />

                        <h3 className="text-2xl text-dbm-db-300 font-bold leading-normal my-2 border-b-2 m-auto md:pt-16 border-dbm-w-400">
                          Makai Ingalls
                        </h3>
                        <div className="text-xs text-slate-400 font-bold uppercase flex flex-row">
                          <FaMapMarkerAlt className=" text-dbm-db-500 pr-2 text-xl flex m-auto" />
                          <p className="text-dbm-db-500 flex m-auto">Bainbridge Island, WA</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-6 md:my-auto">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                          <FaPhoneAlt className="text-dbm-db-100 text-xl" />
                          <span className="text-gray-900 font-light text-lg">+1 (206) 565-5267</span>
                        </div>
                        {/* Email */}
                        <div className="flex items-center gap-4">
                          <FaPenAlt className="text-dbm-db-100 text-xl" />
                          <span className="text-gray-900 font-light text-lg">makaizaneingalls@gmail.com</span>
                        </div>
                        {/* LinkedIn */}
                        <div className="flex items-center gap-4">
                          <FaLinkedin className="text-blue-700 text-xl" />
                          <a
                            href="https://www.linkedin.com/in/makai-ingalls/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 font-light text-lg underline hover:text-blue-900"
                          >
                            linkedin.com/in/makai-ingalls
                          </a>
                        </div>
                        {/* Github */}
                        <div className="flex items-center gap-4">
                          <FaGithub className="text-dbm-db-100 text-xl" />
                          <a
                            href="https://github.com/designbymakai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dbm-db-100 font-light text-lg underline hover:text-dbm-pr-200"
                          >
                            github.com/designbymakai
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Philosophy centered below, matching top row max width */}
            <div className="mt-8">
              <DesignPhilosophyCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;