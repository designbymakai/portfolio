import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Gallery() {
    return(
<section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto bg-gray-200 rounded-t">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Art Collections
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        My hobbies often move around, I love to dabble and try new things and
        come back to old hobbies months or years later. Expressing myself and
        finding an outlet for creativity can sometimes seem a fulltime job but
        it is one that I enjoy.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">

        <div className="flex relative w-full h-64">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
              src="https://i.ibb.co/mh6d6tK/sj-portrait.jpg"
            />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-green-500">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase border-b-2">
                Digital Art
              </h2>
              <p className="leading-relaxed font-light text-gray-900">
                A collection of my digital art done through Procreate or Photoshop.
              </p>
              <button className="bottom-4 absolute w-1/2 m-auto left-0 right-0">
              <Link to="/digital-art">
                View More
              </Link>
            </button>
          </div>
        </div>
        </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative w-full h-64">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
            src="https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/c5d71ead-a4de-420c-9fa2-aa57f6ed77c0_rw_3840.jpg?h=bba125e9d9dc06be383d1b5e7370e3f6"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-green-500">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase border-b-2">
              Photography
            </h2>
            <p className="leading-relaxed font-light text-gray-900">
              A few photos from my travels, I prefer to shoot nature, wildlife and scenery though sometimes I will take time for portraits as well.
            </p>
              <button className="absolute bottom-4 w-6/12 m-auto left-0">
                <Link to="/Photography">
                  View More
                </Link>
              </button>
              <button className="absolute bottom-4 w-6/12 m-auto right-0">
                <a href="https://makaizaneingalls.myportfolio.com/">
                  Photo Portfolio
                </a>
              </button>
          </div>
        </div>  
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative w-full h-64">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain object-center rounded-md"
            src="https://i.ibb.co/BLJxLNN/Layer-1-2-3x.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-green-500">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase border-b-2">
              Vector Art
            </h2>
            <p className="leading-relaxed font-light text-gray-900">
              Vectors I make for my personal projects get repurposed for sale under my adobe stock.
            </p>
            <button className="bottom-4 absolute w-1/2 m-auto left-0 right-0">
              <a href="https://stock.adobe.com/contributor/211063589/Makai">
                Stock Profile
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative w-full h-64">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
            src="https://i.ibb.co/V9rCWH2/beauty-rend-frontangle.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-green-500">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase border-b-2">
              3D Modeling
            </h2>
            <p className="leading-relaxed font-light text-gray-900">
              Using Blender I make a wide variety of objects for different projects.
            </p>
            <button className="bottom-4 absolute w-1/2 m-auto left-0 right-0">
              <Link to="/modeling">
                View More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative w-full h-64">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
            src="https://cdn.midjourney.com/b7cd0ebb-48de-44e6-97c4-6cd8e716db1b/grid_0.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-green-500">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase border-b-2">
              AI Art Generation
            </h2>
            <p className="leading-relaxed font-light text-gray-900">
              Using Midjourney and Stable Diffusion, I have created a wide variety of different scenes and characters. 
            </p>
            <button className="bottom-4 absolute w-1/2 m-auto left-0 right-0">
              <Link to="/ai-art">
                View More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative w-full h-64">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
            src="https://i.ibb.co/qNFjnz8/Eidara-colour-unlabeled.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-green-500">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 uppercase border-b-2">
              Hobbies
            </h2>
            <p className="leading-relaxed font-light text-gray-900">
              Outside of the things mentioned there is also plenty of other things not directly related to design, such as novel writing and worldbuilding.
            </p>
            <button className="bottom-4 absolute w-1/2 m-auto left-0 right-0">
              <Link to="">
                Under Construction
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}