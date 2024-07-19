import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';



export default function Spotlight() {
    return (
<>
  <div className="relative flex h-full bg-white rounded overflow-hidden shadow-lg">
    <Link
      to="/floodcheck"
      className="flex flex-wrap no-underline hover:no-underline"
    >
      <div className="w-full md:w-2/3 rounded-t">
        <img
          src="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2017/04/featured-tools.png"
          className="h-full w-full shadow object-cover"
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6 uppercase">
            Technical Proficency
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
          Highly Versed in Design Software and Prototyping Tools
          </div>
          <p className="text-gray-800 font-serif text-base px-6 pt-2 mb-5">
            I have a strong understanding of design tools like Figma, the Adobe Creative Suite (Photoshop, Illustrator, InDesign, Lightroom), and experience with prototyping tools like AdobeXD, Miro, and more.
          </p>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <Tippy content="University Project">
            <img
              className="w-8 h-8 rounded-full mr-4 avatar"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4vector.com%2Fi%2Ffree-vector-the-university-of-auckland_062511_the-university-of-auckland.png&f=1&nofb=1&ipt=a29398e6fab1726c8ed0b2b64891186268962af78ec9d0c7c9736e8d70b83d8f&ipo=images"
              alt="University of Auckland logo"
            />
            </Tippy>
            <p className="text-gray-600 text-xs md:text-sm">May 2023</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
  {/*/Lead Card*/}
  {/*Posts Container*/}
  <div className="flex flex-wrap justify-between pt-12 -mx-6">
    {/*1/2 col */}
    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to="/stressfree"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnorthpeak.io%2Fwp-content%2Fuploads%2F2020%2F05%2Fimage-1.jpg&f=1&nofb=1&ipt=fbe9c075d8f81c89f582a60678111cf05dc9b59b7a91aeb06180da47d3c18aca&ipo=images"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">UI/UX Design</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            Understanding Users, Prototyping, and Usability Testing
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            I have plenty of experience through my degree of learning how to understand the user better. This includes market research, creating personas and empathy maps, and any other tools I can incorperate to undestand the user's needs. I also am well versed in prototyping and using wireframes, mockups, and high fidelity prototypes to test usability and use this feedback to improve the design.
          </p>
        </Link>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
        <Tippy content="University Project">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4vector.com%2Fi%2Ffree-vector-the-university-of-auckland_062511_the-university-of-auckland.png&f=1&nofb=1&ipt=a29398e6fab1726c8ed0b2b64891186268962af78ec9d0c7c9736e8d70b83d8f&ipo=images"
            alt="University of Auckland logo"
          />
          </Tippy>
          <p className="text-gray-600 text-xs md:text-sm">May 2023</p>
        </div>
      </div>
    </div>
    {/*1/3 col */}
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to="/hhc"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fworldbranddesign.com%2Fwp-content%2Fuploads%2F2019%2F11%2F5-Logo-Design-Harrow-Menswear-London-Freelance-Graphic-Designer-Margate-Thanet-Kent-Branding-5.jpg&f=1&nofb=1&ipt=75f1e8d8adb5610fb2639d7c856c78af77657eba2e8b8dc594327820950da6bc&ipo=images"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Graphic Design</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
          Visual Design &amp; Branding
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
          I think I have a naturally strong sense of aesthetics, including layout, color theory, and typography that has only improved as I have completed numerous design projects both in and out of university. I have plenty of experience in creating and maintaining visual identities and branding materials and have completed projects with both strict guidelines and some with total agency in creating a brand identity.

          </p>
        </Link>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
        <Tippy content="University Project">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4vector.com%2Fi%2Ffree-vector-the-university-of-auckland_062511_the-university-of-auckland.png&f=1&nofb=1&ipt=a29398e6fab1726c8ed0b2b64891186268962af78ec9d0c7c9736e8d70b83d8f&ipo=images"
            alt="University of Auckland logo"
          />
          </Tippy>
          <p className="text-gray-600 text-xs md:text-sm">June 2022</p>
        </div>
      </div>
    </div>
    {/*1/3 col */}
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to="/at-tamariki"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.spearhead-training.co.uk%2Fwp-content%2Fuploads%2F2016%2F04%2Fbigstock-Teamwork-Team-Together-Collabo-808996491.jpg&f=1&nofb=1&ipt=c98078a55d2b3065879996a5f07274a82acfc30dcfdaec3f316127153e6e2bda&ipo=images"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Communication &amp; Collaboration</p>
          <div className="w-full  font-bold text-xl text-gray-900 px-6">
            Presentation &amp; Teamwork
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
          I have been challenged constantly through my degree to present my work in a clear and concise manner, and have had to work in teams to complete projects. I have experience in presenting to clients and stakeholders, and have worked in teams to complete projects with tight deadlines. I have also worked with clients to understand their needs and have had to present my work to them in a way that is easy to understand and that meets their needs. I also have experience working in diverse cross-functional teams, with dedicated developers, marketers, and product managers.
          </p>
        </Link>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
        <Tippy content="University Project">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4vector.com%2Fi%2Ffree-vector-the-university-of-auckland_062511_the-university-of-auckland.png&f=1&nofb=1&ipt=a29398e6fab1726c8ed0b2b64891186268962af78ec9d0c7c9736e8d70b83d8f&ipo=images"
            alt="University of Auckland logo"
          />
          </Tippy>
          <p className="text-gray-600 text-xs md:text-sm">March 2023</p>
        </div>
      </div>
    </div>
    {/*1/2 col */}
    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to="/hourglass"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreecoursesite.com%2Fwp-content%2Fuploads%2F2019%2F04%2F1217948_6ed8_2.jpg&f=1&nofb=1&ipt=c73797c79b6631112fa4c22a661ab3eb95ce10cf0e092bad7301959acc0ea706&ipo=images"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Front-End Development</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
          Web Development &amp; Design
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
          One of my passions since I was young has been website development and design. I have experience in HTML, CSS, and JavaScript and have created and mainted websites for clients and personal projects. I have also worked with CMS like WordPress, Squarespace, and Wix to create websites for clients. I tend to favour React JS and Tailwind CSS for my personal projects, such as this website which I built with care.

          </p>
        </Link>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
        <Tippy content="University Project">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4vector.com%2Fi%2Ffree-vector-the-university-of-auckland_062511_the-university-of-auckland.png&f=1&nofb=1&ipt=a29398e6fab1726c8ed0b2b64891186268962af78ec9d0c7c9736e8d70b83d8f&ipo=images"
            alt="University of Auckland logo"
          />
          </Tippy>
          <p className="text-gray-600 text-xs md:text-sm">May 2023</p>
        </div>
      </div>
    </div>
  </div>
    {/*Values Container*/}
</>


    )
}