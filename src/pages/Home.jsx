import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';



export default function Spotlight() {
    return (
<>
  <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
    <Link
      to="/floodcheck"
      className="flex flex-wrap no-underline hover:no-underline"
    >
      <div className="w-full md:w-2/3 rounded-t">
        <img
          src="https://www.imgbly.com/ib/ByY2ByTmLG.png"
          className="h-full w-full shadow"
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6 uppercase">
            Flood Preparedness Workshop
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
          Designing a Community Engagement Workshop
          </div>
          <p className="text-gray-800 font-serif text-base px-6 pt-2 mb-5">
            A goal-oriented interactive workshop tailored for the local Auckland
            community centred around engaging in activities informing
            participants on safety measures and precautions involving floods.
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
            src="https://i.ibb.co/P5RVTNW/DES220-Presentation.png"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Stress-Free: on the go anxiety relief</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            Creating a Product Pitch
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            A product pitch presentation showcasing Stress-Free, an at-home
            handheld stress and anxiety reliever perfect for a wide variety of
            people struggling with all sorts of issues. Learning through the brief 
            to how to observe market availibility and viability.
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
            src="https://i.ibb.co/bBRqGdD/happy-healthy-clean-Page-01.png"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Happy, Health, and Clean?</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            Designing a Zine
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            A zine taking a look at modern-day waste management and how it can
            be improved to increase sustainability.
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
            src="https://www.imgbly.com/ib/W8fiORzFhz.png"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Auckland Transit Reimagined for Youth</p>
          <div className="w-full  font-bold text-xl text-gray-900 px-6">
            App Design for Complex Audiences
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            A redesign of the AT-Mobile bus app made for kids and designed for
            ease of accessibility.
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
            src="https://www.imgbly.com/ib/0sknOyWp1T.png"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Hourglass: Sand Protection &amp; Renewal</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            Designing a Brand + App
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            The Hourglass app is a digital initiative to push the recycling of
            glass bottles through centrally located machines that return the
            bottles to sand. The Hourglass app uses a fun and interactive
            gamification experience to engage and maintain users.
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
    {/*1/2 col */}
    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to="/illuvion"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img
            src="https://i.ibb.co/87PvwQT/beauty-rend-side.png"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Floating Cities and the Illuvion: Embracing the Mystical Seascape</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
          Speculative Product Design
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            The hypothetical product, the Illuvion, is a multi-faceted
            transportation device designed for a future where life exists on the
            water in floating cities.
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
          <p className="text-gray-600 text-xs md:text-sm">October 2022</p>
        </div>
      </div>
    </div>
    {/*2/3 col */}
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to="/ripe"
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <img
            src="https://i.ibb.co/mvWY8Qk/render-lighting-no-lcd.jpg"
            className="h-full w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">Ripe: the Smart Food Scanner Built For Markets Everywhere</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            Designing a High Fidelity Prototype + Assosiated Brand
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            The Ripe food scanner is a device aimed at grocers and supermarkets
            to scan products to provide dynamic price decisions based on how
            close the item is to being ripe or going bad.
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
          <p className="text-gray-600 text-xs md:text-sm">October 2022</p>
        </div>
      </div>
    </div>
  </div>
</>

    )
}