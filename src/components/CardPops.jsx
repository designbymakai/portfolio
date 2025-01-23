import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';


export function CardPop() {
    return(
<section className='w-full bg-dbm-db-100 border-y-8 border-dbm-gr-300' id='cardpop'>
        <h1 className='text-center font-extrabold bg-gradient-to-r from-dbm-lb-100 via-dbm-cr-100 to-dbm-pr-100 bg-clip-text text-transparent uppercase'>My Design Philosophy</h1>
        <div className="flex flex-wrap justify-center bg-dbm-db-100 w-3/4 md:w-4/5 m-auto">
  
  {/* card 1 */}
        
  <div className="p-4 max-w-sm">
  <div className="flex rounded-lg bg-dbm-lb-300 hover:bg-dbm-lb-200 p-8 flex-col hover:scale-110 text-dbm-lb-100 hover:text-dbm-lb-400">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#124753" d="M252 124a60.14 60.14 0 0 0-32-53.08a52 52 0 0 0-92-32.11a52 52 0 0 0-92 32.11a60 60 0 0 0 0 106.14a52 52 0 0 0 92 32.13a52 52 0 0 0 92-32.13A60.05 60.05 0 0 0 252 124M88 204a28 28 0 0 1-26.85-20.07c1 0 1.89.07 2.85.07h8a12 12 0 0 0 0-24h-8a36 36 0 0 1-12-69.95a12 12 0 0 0 8-11.32V72a28 28 0 0 1 56 0v60.18a51.6 51.6 0 0 0-7.2-3.85a12 12 0 1 0-9.6 22A28 28 0 0 1 88 204m104-44h-8a12 12 0 0 0 0 24h8c1 0 1.9 0 2.85-.07a28 28 0 1 1-38-33.61a12 12 0 1 0-9.6-22a51.6 51.6 0 0 0-7.2 3.85V72a28 28 0 0 1 56 0v6.73a12 12 0 0 0 8 11.32a36 36 0 0 1-12 70Zm16-44a12 12 0 0 1-12 12a40 40 0 0 1-40-40v-4a12 12 0 0 1 24 0v4a16 16 0 0 0 16 16a12 12 0 0 1 12 12M100 88a40 40 0 0 1-40 40a12 12 0 0 1 0-24a16 16 0 0 0 16-16v-4a12 12 0 0 1 24 0Z"></path></svg>
            
        </div>
        <h2 className="text-dbm-w-100 text-lg font-bold">
        Creativity &amp; Innovation
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base">
        I love pushing boundaries to find unique solutions. Staying current with design trends helps me infuse fresh ideas, ensuring my work stands out and meets user needs effectively.
        </p>
        
      </div>
    </div>
  </div>
  {/* card 2 */}
  <div className="p-4 max-w-sm">
  <div className="flex rounded-lg bg-dbm-lb-300 hover:bg-dbm-lb-200 p-8 flex-col hover:scale-110 text-dbm-lb-100 hover:text-dbm-lb-400">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><g fill="none" stroke="#124753" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M1.75 8s2-4.25 6.25-4.25S14.25 8 14.25 8s-2 4.25-6.25 4.25S1.75 8 1.75 8"></path><circle cx={8} cy={8} r={1.25} fill="#124753"></circle></g></svg>
        </div>
        <h2 className="text-dbm-w-100 text-lg font-bold">
        Attention to Detail
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base">
        I believe small touches make a big difference. From color consistency to text alignment, I ensure every element is polished and professional, elevating design from good to great.
        </p>
        
      </div>
    </div>
  </div>
  {/* card 3 */}
  <div className="p-4 max-w-sm">
  <div className="flex rounded-lg bg-dbm-lb-300 hover:bg-dbm-lb-200 p-8 flex-col hover:scale-110 text-dbm-lb-100 hover:text-dbm-lb-400">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#124753" d="M16 13.5a5.5 5.5 0 0 1 5.5 5.5v1.5a1.5 1.5 0 0 1-3 0V19a2.5 2.5 0 0 0-2.5-2.5H8A2.5 2.5 0 0 0 5.5 19v1.5a1.5 1.5 0 0 1-3 0V19A5.5 5.5 0 0 1 8 13.5zm-4-12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></path></g></svg>
        </div>
        <h2 className="text-dbm-w-100 text-lg font-bold">
        User-Centric Approach
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base">
        Empathy guides my work. By understanding users’ needs through research and testing, I create intuitive, meaningful experiences that genuinely solve problems.
        </p>
        
      </div>
    </div>
  </div>
{/* card 3 */}
<div className="p-4 max-w-sm">
  <div className="flex rounded-lg bg-dbm-lb-300 hover:bg-dbm-lb-200 p-8 flex-col hover:scale-110 text-dbm-lb-100 hover:text-dbm-lb-400">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="#124753" d="M21 10a16.84 16.84 0 0 0-9 3.244A16.84 16.84 0 0 0 3 10v2.96a2.004 2.004 0 0 0-2 2.007v1.004c0 1.109 2 2.208 2 2.208v2.007a14.87 14.87 0 0 1 7.417 2.55A15 15 0 0 1 12 24a15 15 0 0 1 1.583-1.264A14.87 14.87 0 0 1 21 20.186v-2.208a2.004 2.004 0 0 0 2-2.007v-1.004a2.004 2.004 0 0 0-2-2.007Zm-9 11.422a16.84 16.84 0 0 0-7-2.996v-6.15a14.8 14.8 0 0 1 5.417 2.282A15 15 0 0 1 12 15.822a15 15 0 0 1 1.583-1.264A14.8 14.8 0 0 1 19 12.275v6.151a16.84 16.84 0 0 0-7 2.996M11 8h2v1h-2zm0-4h2v1h-2z"></path><path fill="#124753" d="M11 10h2v1h-2zM9 5a1 1 0 0 0 1-1a.983.983 0 0 0-.99-.99A.995.995 0 1 0 9 5"></path><circle cx={15} cy={4} r={1} fill="#124753"></circle><path fill="#124753" d="M16 8H8a3.003 3.003 0 0 1-3-3V3a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v2a3.003 3.003 0 0 1-3 3M8 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path></svg>
        </div>
        <h2 className="text-dbm-w-100 text-lg font-bold">
        Adaptability &amp; Learning
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base">
        I thrive on the ever-evolving nature of design. Exploring new tools and methods keeps my approach versatile and innovative, allowing me to tackle any challenge confidently.
  </p>
        
      </div>
    </div>
  </div>
{/* card 4 */}
<div className="p-4 max-w-sm">
  <div className="flex rounded-lg bg-dbm-lb-300 hover:bg-dbm-lb-200 p-8 flex-col hover:scale-110 text-dbm-lb-100 hover:text-dbm-lb-400">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="#124753" d="m494 61.363l-82.58 77.934l78.994 132.96l3.586-4.458V61.362zM18 62.5v225.893c4.48.582 9.863.903 15.295.96c11.87.125 21.654-.65 27.15-1.144L113.1 154.974zm389.154 104.86l-7.04 4.556c-.15.097-5.362 3.336-6.893 4.29l-10.605 6.42l.15.09c-4.914 3.057-6.28 3.917-11.857 7.38c-2.83 1.757-2.9 1.798-5.584 3.465c-20.29-10.907-42.306-19.29-67.998-25.882c-32.312 9.762-66.542 23.888-100.722 37.142c14.19 17.087 29.96 22.651 45.845 22.85c18.42.23 37.25-7.78 50.218-16.754l7.4-5.12l7.426 10.73l115.453 83.33l45.112-29.987zm-280.677 2.74L81.11 284.887l16.65 12.803l30.795-34.905l2.467-2.795l3.72-.232q2.25-.141 4.44-.13c10.212.066 19.342 2.716 26.19 8.76c5.072 4.472 8.444 10.426 10.4 17.32l2.28-.142c11.995-.75 22.802 1.725 30.63 8.63c7.827 6.907 11.63 17.323 12.38 29.32l.07 1.08c6.44 1.216 12.205 3.752 16.893 7.888c7.828 6.906 11.63 17.32 12.38 29.317l.197 3.12a38 38 0 0 1 1.9.658l2.033-2.853l5.47-7.678l2.813-3.95l7.33 5.223l59.428 42.336c6.464-1.594 10.317-4.075 12.46-7.086c2.147-3.012 3.233-7.47 2.624-14.107l-71.258-51.03l-7.318-5.24l5.19-7.246l6.67-9.365l7.33 5.223l80.335 57.226c6.464-1.593 10.32-4.074 12.463-7.085c2.144-3.01 3.23-7.457 2.625-14.082l-92.398-65.55l-7.34-5.21l10.414-14.68l7.343 5.208l92.414 65.565c6.47-1.594 10.327-4.075 12.473-7.088c2.148-3.015 3.233-7.476 2.62-14.125l-110.44-79.71c-14.655 8.688-33.402 15.648-53.557 15.396c-23.587-.295-48.817-11.566-67.377-40.05a9 9 0 0 1 4.343-13.327c13.014-4.945 26.163-10.17 39.343-15.354l-92.056-6.834zm12.902 107.62l-47.564 53.91c.927 6.746 3.04 10.942 5.887 13.454s7.275 4.085 14.084 4.164l47.563-53.908c-.927-6.747-3.04-10.945-5.887-13.457s-7.274-4.084-14.084-4.162zm43.308 25.81l-53.713 60.88c.926 6.747 3.04 10.945 5.886 13.457c2.85 2.51 7.275 4.083 14.085 4.16l53.713-60.878c-.926-6.748-3.04-10.944-5.887-13.457s-7.273-4.085-14.083-4.164zm29.34 38.286l-47.56 53.91c.927 6.746 3.04 10.943 5.887 13.456c2.848 2.512 7.275 4.083 14.084 4.162L232 359.44c-.927-6.75-3.04-10.947-5.887-13.46c-2.847-2.512-7.274-4.083-14.084-4.162zm24.702 39.137l-38.794 44.28c.925 6.76 3.038 10.962 5.888 13.476c2.845 2.51 7.267 4.082 14.067 4.163l38.796-44.28c-.926-6.758-3.04-10.96-5.89-13.476c-2.844-2.51-7.266-4.08-14.066-4.162zm35.342 4.79c1.694 4.62 2.673 9.74 3.014 15.192l.232 3.704l-8.277 9.448l26.724 19.037c6.464-1.594 10.316-4.075 12.46-7.086c2.145-3.01 3.233-7.464 2.628-14.093l-36.78-26.2z"></path></svg>
        </div>
        <h2 className="text-dbm-w-100 text-lg font-bold">
        Reliability &amp; Professionalism
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base">
        I value consistency and integrity. Meeting deadlines, welcoming feedback, and maintaining a trusted rapport with colleagues are at the core of how I work.
</p>    
      </div>
    </div>
  </div>
{/* card 5 */}
<div className="p-4 max-w-sm">
  <div className="flex rounded-lg bg-dbm-lb-300 hover:bg-dbm-lb-200 p-8 flex-col hover:scale-110 text-dbm-lb-100 hover:text-dbm-lb-400">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="#124753" d="m494 61.363l-82.58 77.934l78.994 132.96l3.586-4.458V61.362zM18 62.5v225.893c4.48.582 9.863.903 15.295.96c11.87.125 21.654-.65 27.15-1.144L113.1 154.974zm389.154 104.86l-7.04 4.556c-.15.097-5.362 3.336-6.893 4.29l-10.605 6.42l.15.09c-4.914 3.057-6.28 3.917-11.857 7.38c-2.83 1.757-2.9 1.798-5.584 3.465c-20.29-10.907-42.306-19.29-67.998-25.882c-32.312 9.762-66.542 23.888-100.722 37.142c14.19 17.087 29.96 22.651 45.845 22.85c18.42.23 37.25-7.78 50.218-16.754l7.4-5.12l7.426 10.73l115.453 83.33l45.112-29.987zm-280.677 2.74L81.11 284.887l16.65 12.803l30.795-34.905l2.467-2.795l3.72-.232q2.25-.141 4.44-.13c10.212.066 19.342 2.716 26.19 8.76c5.072 4.472 8.444 10.426 10.4 17.32l2.28-.142c11.995-.75 22.802 1.725 30.63 8.63c7.827 6.907 11.63 17.323 12.38 29.32l.07 1.08c6.44 1.216 12.205 3.752 16.893 7.888c7.828 6.906 11.63 17.32 12.38 29.317l.197 3.12a38 38 0 0 1 1.9.658l2.033-2.853l5.47-7.678l2.813-3.95l7.33 5.223l59.428 42.336c6.464-1.594 10.317-4.075 12.46-7.086c2.147-3.012 3.233-7.47 2.624-14.107l-71.258-51.03l-7.318-5.24l5.19-7.246l6.67-9.365l7.33 5.223l80.335 57.226c6.464-1.593 10.32-4.074 12.463-7.085c2.144-3.01 3.23-7.457 2.625-14.082l-92.398-65.55l-7.34-5.21l10.414-14.68l7.343 5.208l92.414 65.565c6.47-1.594 10.327-4.075 12.473-7.088c2.148-3.015 3.233-7.476 2.62-14.125l-110.44-79.71c-14.655 8.688-33.402 15.648-53.557 15.396c-23.587-.295-48.817-11.566-67.377-40.05a9 9 0 0 1 4.343-13.327c13.014-4.945 26.163-10.17 39.343-15.354l-92.056-6.834zm12.902 107.62l-47.564 53.91c.927 6.746 3.04 10.942 5.887 13.454s7.275 4.085 14.084 4.164l47.563-53.908c-.927-6.747-3.04-10.945-5.887-13.457s-7.274-4.084-14.084-4.162zm43.308 25.81l-53.713 60.88c.926 6.747 3.04 10.945 5.886 13.457c2.85 2.51 7.275 4.083 14.085 4.16l53.713-60.878c-.926-6.748-3.04-10.944-5.887-13.457s-7.273-4.085-14.083-4.164zm29.34 38.286l-47.56 53.91c.927 6.746 3.04 10.943 5.887 13.456c2.848 2.512 7.275 4.083 14.084 4.162L232 359.44c-.927-6.75-3.04-10.947-5.887-13.46c-2.847-2.512-7.274-4.083-14.084-4.162zm24.702 39.137l-38.794 44.28c.925 6.76 3.038 10.962 5.888 13.476c2.845 2.51 7.267 4.082 14.067 4.163l38.796-44.28c-.926-6.758-3.04-10.96-5.89-13.476c-2.844-2.51-7.266-4.08-14.066-4.162zm35.342 4.79c1.694 4.62 2.673 9.74 3.014 15.192l.232 3.704l-8.277 9.448l26.724 19.037c6.464-1.594 10.316-4.075 12.46-7.086c2.145-3.01 3.233-7.464 2.628-14.093l-36.78-26.2z"></path></svg>
        </div>
        <h2 className="text-dbm-w-100 text-lg font-bold">
        Teamwork &amp; Collaboration
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base">
        I thrive in group settings where open dialogue and mutual support drive success. Sharing ideas freely, valuing feedback, and understanding different perspectives leads to design solutions that truly resonate.
</p>    
      </div>
    </div>
  </div>
{/* card 6 */}

</div>
</section>
    )
}
    

