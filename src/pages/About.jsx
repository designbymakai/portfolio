import Tippy from '@tippyjs/react';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { Tab } from '@headlessui/react'
import { FaMapMarkerAlt, FaPhoneAlt, FaPenAlt, FaUser, FaTools, FaBook } from 'react-icons/fa';



export default function About() {
const [showWeb, setShowWeb] = useState(false);
const [showAdobe, setShowAdobe] = useState(false);
const [showDigital, setShowDigital] = useState(false);
const [showPhoto, setShowPhoto] = useState(false);
const [showVideo, setShowVideo] = useState(false);
const [showModel, setShowModel] = useState(false);
const [showGraphic, setShowGraphic] = useState(false);
const [showApp, setShowApp] = useState(false);



const clearState = () => {
setShowWeb(false)
setShowAdobe(false)
setShowDigital(false)
setShowPhoto(false)
setShowVideo(false)
setShowModel(false)
setShowGraphic(false)
setShowApp(false)
}

function btnWeb() {
return(
clearState(),
setShowWeb(!showWeb)
)
}
function btnAdobe() {
return(
clearState(),
setShowAdobe(!showAdobe)
)
}
function btnDigital() {
return(
clearState(),
setShowDigital(!showDigital)
)
}
function btnPhoto() {
return(
clearState(),
setShowPhoto(!showPhoto)
)
}
function btnVideo() {
return(
clearState(),
setShowVideo(!showVideo)
)
}
function btnModel() {
return(
clearState(),
setShowModel(!showModel)
)
}
function btnApp() {
return(
clearState(),
setShowApp(!showApp)
)
}
function btnGraphic() {
return(
clearState(),
setShowGraphic(!showGraphic)
)
}

return ( 

<div className="flex flex-wrap justify-center bg-gray-200 rounded-t overflow-auto">
    <div className="w-full flex justify-center">
        <div className="flex justify-center">
            <img    
            src="https://i.ibb.co/cQ95fK9/profile.png"
            className="shadow-xl rounded-full align-middle border-2 border-gray-300 absolute max-w-[150px] hover:scale-110 -m-16"
        />
        </div>
    </div>
    <div className="flex flex-col text-center pt-20">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 border-b-2 m-auto border-gray-300">
            Makai Ingalls
        </h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
            Auckland, New Zealand
        </div>

        <Tab.Group>
            <Tab.List>
                <Tab className="ui-selected:bg-indigo-500 ui-selected:text-gray-100 ui-not-selected:bg-gray-100 ui-not-selected:text-gray-800 m-2 hover:text-indigo-500">
                <div className="flex flex-row mx-auto">
                        <FaBook className="m-auto p-auto flex-none hover:scale-110 pr-1" />
                        <p className="">Biography</p>
                    </div>
                </Tab>
                <Tab className="ui-selected:bg-indigo-500 ui-selected:text-gray-100 ui-not-selected:bg-gray-100 ui-not-selected:text-gray-800 m-2">
                <div className="flex flex-row mx-auto">
                        <FaTools className="m-auto p-auto flex-none hover:scale-110 pr-1" />
                        <p className="">Skills</p>
                    </div>
                </Tab>
                <Tab className="ui-selected:bg-indigo-500 ui-selected:text-gray-100 ui-not-selected:bg-gray-100 ui-not-selected:text-gray-800 m-2">  
                    <div className="flex flex-row mx-auto">
                        <FaUser className="m-auto p-auto flex-none hover:scale-110 pr-1" />
                        <p className="">Contact</p>
                    </div>
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>

                    <div className="flex flex-col text-center pt-3">
                        <div className="flex flex-col w-4/5 justify-center self-center">
                            <h1 className="text-xl font-bold block tracking-wide text-slate-700 uppercase">
                            My Story
                            </h1>
                            <p className="font-light leading-relaxed text-slate-600 mb-4">
                                I'm a Kiwi-born and American-raised 22-year-old student at University of Auckland. I grew up with my parents in Washington State in a tiny town called Bainbridge Island. My parents are lifelong sailors, and I grew up living on a sailboat with them. Continuing with the nautical theme, I was a swimmer my whole childhood, a sport that gave me a lot of time to daydream and think. After finishing high school in the US, I moved to NZ by myself. <br/> <br/> I started Uni with a degree in Computer Science as I have had a lifelong love of computers. Unfortunately, my passion didn't transfer over to the programme, and when the pandemic came, it was too much for me, and I dropped the degree. I spent time working in different industries and learning about myself and found out that my whole life, I had been living with undiagnosed ADHD. It took me a while to come to terms with what that meant, but after that, I felt proud of getting so far without knowing. <br/><br/> It took me a while to find my path, but I found I had a gift once I began nursing my creativity. I turned my ADHD, my weakness growing up, into my strength by being able to look at things from a different angle than others and hyper-focus on a task. Additionally, I am a quick learner, whether it's picking up a new program or learning a new industry. I love learning new things and watching my design and art style change as I grow. Once I start a project, I put my all into it. I have a high standard for myself; after all, I spent so long not being proud of my work that once I got a taste, now I strive to go that extra mile every time. 
                            </p>    
                        </div>     
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="w-full text-center mt-4">
                        <h1 className="text-xl font-bold block tracking-wide text-slate-700 uppercase">
                            Skills
                        </h1>
                        <div className="flex justify-center flex-col lg:pt-4 pt-8 pb-0">
                            <div className="flex flex-row flex-wrap md:border-x-4 justify-center gap-3">
                                <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnWeb()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        {showWeb === true ? <span className="text-indigo-500">Web Design</span> : <span>Web Design</span>}
                                    </button>
                                </div>
                                <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnAdobe()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showAdobe === true ? <span className="text-indigo-500">Adobe Suite</span> : <span>Adobe Suite</span>}
                                    </button>
                                </div>  
                                <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnGraphic()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showGraphic === true ? <span className="text-indigo-500">Graphic Design</span> : <span>Graphic Design</span>}
                                    </button>
                                </div>
                                <div className="flex flex-col gap-0 md:gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnApp()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showApp === true ? <span className="text-indigo-500">App Design</span> : <span>App Design</span>}
                                    </button>
                                </div>  
                            </div>
                            {
                            showWeb &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">Web Design</p>
                            <p className="text-left px-6 pb-2">
                            I am a skilled web designer proficient in HTML, CSS, TailwindCSS, and React.js. With a keen eye for aesthetics and a solid understanding of front-end development, I have built and maintained several small-scale websites.

                            <br/><br/>

                            <span className="font-bold">HTML and CSS:</span>
                            My expertise lies in HTML and CSS, the building blocks of web design. I am adept at creating well-structured, semantically correct HTML code and using CSS to style websites with precision and creativity. From responsive layouts to custom animations, I ensure a seamless user experience through clean and organized code.

                            <br/><br/>

                            <span className="font-bold">TailwindCSS:</span>
                            I am experienced in utilizing TailwindCSS, a utility-first CSS framework, to streamline the web development process. With its extensive set of pre-built components and intuitive class-based approach, I can efficiently design and style websites, saving time without compromising on visual appeal or functionality.

                            <br/><br/>

                            <span className="font-bold">React.js:</span>
                            I have a working knowledge of React.js, a popular JavaScript library for building user interfaces. Leveraging its component-based architecture, I create interactive and dynamic web applications that deliver an enhanced user experience. From state management to reusable UI components, React.js empowers me to develop scalable and efficient web solutions.

                            <br/><br/>

                            <span className="font-bold">Small-Scale Websites:</span>
                            In addition to my technical skills, I have hands-on experience building and maintaining several small-scale websites. From personal portfolios to educational platforms, I have successfully transformed design concepts into fully functional websites. By collaborating closely with clients and ensuring attention to detail, I consistently deliver websites that align with their goals and exceed expectations.
                            </p>
                            </div>
                            }
                                                        
                            {
                            showAdobe &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">Adobe Suite</p>
                            <p className="text-left px-6 pb-2">
                            I possess a comprehensive skill set in the Adobe Suite, including proficiency in Photoshop, Illustrator, InDesign, Premiere Pro, and Lightroom. These powerful tools enable me to create stunning visuals and compelling designs across various mediums.

                            <br/><br/>

                            <span className="font-bold">Photoshop:</span>
                            With Photoshop, I excel at manipulating images, retouching photos, and creating eye-catching graphics. From intricate photo editing to designing engaging social media visuals, I leverage Photoshop's versatile features to bring ideas to life with precision and creativity.

                            <br/><br/>

                            <span className="font-bold">Illustrator:</span>
                            As an adept Illustrator user, I am skilled in creating vector graphics and illustrations. From logo design to intricate artwork, I utilize Illustrator's powerful tools and precise controls to produce visually appealing and scalable graphics that stand out.

                            <br/><br/>

                            <span className="font-bold">InDesign:</span>
                            InDesign is my go-to tool for creating professional print layouts, such as brochures, flyers, and magazines. With its robust layout capabilities and typographic controls, I craft visually cohesive and aesthetically pleasing designs that captivate readers.

                            <br/><br/>

                            <span className="font-bold">Premiere Pro:</span>
                            With Premiere Pro, I have the ability to edit and produce high-quality videos. From trimming and arranging clips to adding effects and transitions, I utilize Premiere Pro's timeline-based interface to create engaging and impactful video content.

                            <br/><br/>

                            <span className="font-bold">Lightroom:</span>
                            In Lightroom, I enhance and optimize photographs, applying adjustments to achieve the desired mood and aesthetic. From color grading to fine-tuning exposure, I use Lightroom to create visually stunning images that leave a lasting impression.
                            </p>
                            </div>
                            }
                            {
                            showGraphic &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">Graphic Design</p>
                            <p className="text-left px-6 pb-2">
                            I am a skilled graphic designer with expertise in various areas, including vector art, icons, logos, zines, PDFs, and brochures. With a strong understanding of design principles and an eye for detail, I create visually compelling and impactful designs that effectively communicate messages and captivate audiences.

                            <br/><br/>

                            <span className="font-bold">Vector Art:</span>
                            I excel in creating vector illustrations and artwork. Using tools like Illustrator, I craft clean and scalable designs that maintain their quality across different sizes and formats. Whether it's designing icons or complex illustrations, I leverage the versatility of vector art to create visually appealing graphics.

                            <br/><br/>

                            <span className="font-bold">Icons and Logos:</span>
                            I specialize in creating memorable and visually distinctive icons and logos. Through careful consideration of brand identity and target audience, I develop designs that reflect the essence of a business or product. My logos are unique, recognizable, and effectively convey the desired message.

                            <br/><br/>

                            <span className="font-bold">Zines:</span>
                            I have experience designing zines, which are self-published, small-scale magazines. From layout design to content curation, I create zines that engage readers with visually compelling graphics and thoughtfully organized information. I enjoy experimenting with typography, imagery, and color schemes to create immersive reading experiences.

                            <br/><br/>

                            <span className="font-bold">PDFs and Brochures:</span>
                            I am adept at creating visually appealing PDF documents and brochures. With a keen eye for layout and typography, I ensure that information is presented in a clear and organized manner. From corporate brochures to event programs, I design PDFs and brochures that are professional, engaging, and visually impactful.
                            </p>
                            </div>
                            }
                            {
                            showApp &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">App Design</p>
                            <p className="text-left px-6 pb-2">
                            I am a skilled app designer experienced in creating intuitive and visually appealing mobile and web applications. Using tools like Figma, I craft user-centric designs that prioritize functionality and aesthetics, resulting in seamless and engaging user experiences.

                            <br/><br/>

                            <span className="font-bold">Figma:</span>
                            I utilize Figma, a collaborative design tool, to create wireframes, prototypes, and high-fidelity designs. Its powerful features and cloud-based accessibility enable efficient design iterations and seamless collaboration with developers and stakeholders.

                            <br/><br/>

                            <span className="font-bold">Moodboards:</span>
                            Before diving into the design process, I create moodboards to establish the visual direction and overall feel of the app. By curating a collection of colors, typography, and imagery, I ensure a cohesive and harmonious design aesthetic that aligns with the app's objectives and target audience.

                            <br/><br/>

                            <span className="font-bold">Layout Design:</span>
                            I excel at designing intuitive and user-friendly layouts for mobile and web applications. Through careful consideration of information architecture, I create interfaces that guide users seamlessly through the app's features and content. I prioritize clarity, consistency, and efficient navigation to enhance the overall user experience.

                            <br/><br/>

                            <span className="font-bold">Custom Icons:</span>
                            I believe in the power of custom icons to enhance the visual appeal and brand identity of an app. Using vector graphics software, I design custom icons that are unique, cohesive, and visually aligned with the overall app design. These icons contribute to a distinctive and memorable user interface.

                            <br/><br/>

                            <span className="font-bold">User Testing:</span>
                            I understand the importance of user testing in app design. By conducting usability tests and gathering feedback, I iteratively refine and improve the user experience. User testing helps identify pain points, validate design decisions, and ultimately create a user-centric app that meets the needs and expectations of its target audience.
                            </p>
                            </div>
                            }

                            <div className="flex flex-row flex-wrap gap-3 border-x-4 justify-center pt-3">
                                <div className="flex flex-col gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnVideo()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showVideo === true ? <span className="text-indigo-500">Video Editing</span> : <span>Video Editing</span>}
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnModel()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showModel === true ? <span className="text-indigo-500">3D Modeling</span> : <span>3D Modeling</span>}
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnDigital()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showDigital === true ? <span className="text-indigo-500">Digital Art</span> : <span>Digital Art</span>}
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2 border-x-4">
                                    <button 
                                    type='button' 
                                    onClick={() => btnPhoto()} 
                                    className="group relative inline-block overflow-hidden font-bold tracking-wide rounded border shadow-xl bg-gray-900 px-5 py-3 text-lg text-gray-200 hover:text-indigo-500 hover:bg-gray-300 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full"></span>
                                    {showPhoto === true ? <span className="text-indigo-500">Photography</span> : <span>Photography</span>}
                                    </button>
                                </div>
                            </div>
                            {
                            showVideo &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">Video Editing</p>
                            <p className="text-left px-6 pb-2">
                            I possess a solid foundation in video editing, including the basics of editing and filming. From audio editing to working with green screens and lighting, I am comfortable handling various aspects of the post-production process.

                            <br/><br/>

                            <span className="font-bold">Audio Editing:</span>
                            I have experience in editing audio to ensure clear and crisp sound in videos. Whether it's removing background noise, adjusting levels, or adding music and sound effects, I enhance the audio quality to deliver a seamless viewing experience.

                            <br/><br/>

                            <span className="font-bold">Green Screens and Lighting:</span>
                            I am proficient in working with green screens and lighting setups to create visually appealing effects and seamless background replacements. By properly lighting the scene and utilizing chroma key techniques, I can integrate subjects into different backgrounds, enhancing the overall visual impact of the video.

                            <br/><br/>

                            <span className="font-bold">Learning as I Go:</span>
                            While I have a strong foundation, I am always eager to learn and adapt to more advanced video editing concepts, I am resourceful and quick to learn as I go. I am adept at researching and exploring new tools and techniques, enabling me to tackle more complex projects with confidence and deliver high-quality video content that meets the desired objectives.
                            </p>
                            </div>
                            }
                            {
                            showModel &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">3D Modeling</p>
                            <p className="text-left px-6 pb-2">
                            I possess strong skills in 3D modeling using Blender, a powerful software for creating 3D graphics and animations. With a keen eye for detail and a passion for product design, I specialize in bringing concepts to life through realistic and visually stunning 3D models.

                            <br/><br/>

                            <span className="font-bold">Product Design:</span>
                            I excel in product design using 3D modeling techniques. By translating ideas and sketches into digital models, I create accurate and detailed representations of products. From conceptualization to prototyping, I ensure that the final design meets functional and aesthetic requirements.

                            <br/><br/>

                            <span className="font-bold">High Fidelity Renders:</span>
                            Using advanced rendering techniques in Blender, I produce high fidelity renders that showcase the intricacies and realistic details of 3D models. Through meticulous lighting, texturing, and material adjustments, I create visually striking images that captivate viewers and bring virtual objects to life.

                            <br/><br/>

                            <span className="font-bold">Attention to Detail:</span>
                            I pride myself on my attention to detail when it comes to 3D modeling. Whether it's the precision of measurements or the intricate texture work, I ensure that every aspect of the model is accurate and visually appealing. This meticulous approach results in high-quality 3D models that surpass client expectations.

                            <br/><br/>

                            <span className="font-bold">Continued Learning:</span>
                            As a 3D modeler, I understand the importance of continuous learning in an ever-evolving field. I stay updated with the latest techniques and trends in 3D modeling, constantly expanding my skill set to deliver innovative and cutting-edge designs. By embracing new tools and methods, I am able to push the boundaries of my work and consistently deliver exceptional results.
                            </p>
                            </div>
                            }
                            {
                            showDigital &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">Digital Art</p>
                            <p className="text-left px-6 pb-2">
                            In the realm of digital art, I explore a wide range of creative possibilities using Procreate, Photoshop, Illustrator, and other software tools. With a fusion of artistic talent and technical skills, I create captivating digital artworks that span across different mediums and styles.

                            <br/><br/>

                            <span className="font-bold">Procreate and Photoshop:</span>
                            I harness the power of Procreate and Photoshop to bring my artistic visions to life. These versatile software applications allow me to paint, draw, and manipulate digital elements with precision and creativity. From digital paintings to photo manipulations, I utilize the vast array of tools and brushes to create stunning visuals.

                            <br/><br/>

                            <span className="font-bold">Custom Vectors with Illustrator:</span>
                            Using Illustrator, I craft custom vectors of objects and elements. These scalable vector graphics are versatile and can be used in a variety of applications, such as logos, illustrations, and web designs. By meticulously crafting each vector, I ensure the highest quality and attention to detail.

                            <br/><br/>

                            <span className="font-bold">Exploring Various Mediums and Software:</span>
                            I enjoy pushing the boundaries of digital art by exploring different mediums and software tools. Whether it's creating digital illustrations, mixed media collages, or experimental designs, I embrace the opportunity to experiment and evolve my artistic style across various platforms and techniques.

                            <br/><br/>

                            <span className="font-bold">Overlapping with Graphic Design:</span>
                            My passion for digital art overlaps with my expertise in graphic design. By combining artistic expression and design principles, I create visually stunning graphics that communicate messages and evoke emotions. This intersection allows me to deliver unique and compelling visual solutions for clients and personal artistic projects.
                            </p>
                            </div>
                            }
                            {
                            showPhoto &&
                            <div className="bg-gray-100 md:w-1/2 w-full self-center rounded-b-lg shadow-xl border-b-2 border-x-[1px] border-gray-100 ">
                            <p className="text-xl font-bold pt-2 text-indigo-500">Photography</p>
                            <p className="text-left px-6 pb-2">
                            I am a passionate photographer who enjoys capturing the beauty of landscapes, nature, and wildlife. Armed with my trusty Nikon D3500, I venture into the great outdoors to immortalize breathtaking moments and scenes through the lens.

                            <br/><br/>

                            <span className="font-bold">Landscapes and Nature:</span>
                            I find solace in photographing landscapes and nature, seeking to capture the essence and grandeur of the natural world. From serene sunsets to majestic mountains, I aim to convey the awe-inspiring beauty that surrounds us, inviting viewers to immerse themselves in the captivating scenery.

                            <br/><br/>

                            <span className="font-bold">Wildlife:</span>
                            Capturing the essence of wildlife is a thrill that fuels my passion for photography. Through patience and observation, I aim to document the untamed beauty and behavior of animals in their natural habitats. Each shot tells a unique story, revealing the wonders of the animal kingdom.

                            <br/><br/>

                            <span className="font-bold">Editing in Lightroom and Photoshop:</span>
                            In addition to capturing images, I enjoy the creative process of editing in Lightroom and Photoshop. These powerful tools allow me to enhance the colors, tones, and details of my photographs, bringing out their full potential. From subtle adjustments to artistic transformations, I strive to create visually captivating images that evoke emotion and tell a compelling story.

                            <br/><br/>

                            <span className="font-bold">Expression Through Photography:</span>
                            Photography is more than just a hobby for me; it is a means of self-expression and a way to share the beauty of the world with others. Through my lens and the art of editing, I hope to evoke emotions, inspire curiosity, and ignite a sense of wonder in those who view my work.
                            </p>
                            </div>
                            }
                        </div>

                    </div>
                </Tab.Panel>
                <Tab.Panel>
                <div className="container pt-3 pb-24">
                    <p className="text-xl font-bold block tracking-wide text-slate-700 uppercase">Get in touch</p>
                    <div className="flex">
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-row mx-auto">
                                <FaMapMarkerAlt className="m-auto p-auto flex-none hover:scale-110"/>
                                <p className="text-gray-900 font-light text-lg px-2 flex-none">Location:</p>
                            </div>
                                <p className=" text-indigo-500 font-light text-lg px-3 rounded-xl mx-auto bg-gray-300 hover:text-green-500">Auckland, New Zealand</p>
                        </div>
                        <div className="flex w-full tracking-wide flex-row justify-center">
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row mx-auto">
                                    <FaPhoneAlt className="m-auto p-auto flex-none hover:scale-110" />
                                    <p className="text-gray-900 font-light text-lg px-2 flex-none">Phone:</p>
                                </div>
                                <p className="text-indigo-500 font-light text-lg px-3 rounded-xl mx-auto bg-gray-300 self-start hover:text-green-500">+64 021 467 456</p>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row mx-auto">
                                    <FaPenAlt className="m-auto p-auto flex-none hover:scale-110" />
                                    <p className="text-gray-900 font-light text-lg capitalize px-3">Email:</p>
                                </div>
                                <p className="text-indigo-500 font-light text-lg px-3 rounded-xl mx-auto bg-gray-300 hover:text-green-500">makaizaneingalls@gmail.com</p>
                            </div>

                        </div>
                    </div>
                </div>
                </Tab.Panel>


            </Tab.Panels>
        </Tab.Group>
    </div>
</div>
)

}