import Tippy from '@tippyjs/react';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { Tab } from '@headlessui/react'
import { FaMapMarkerAlt, FaPhoneAlt, FaPenAlt, FaUser, FaTools, FaBook } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

const About = () => {

return ( 

<div className="flex flex-wrap justify-center bg-gray-200 rounded-t overflow-auto z-50">
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
                    <div className='pt-6'>
                    <MapContainer center={[-36.8485, 174.7633]} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[-36.8485, 174.7633]} icon={customIcon}>
                        <Popup>
                        Auckland, New Zealand
                        </Popup>
                    </Marker>
                    </MapContainer>
                    </div>
                </div>
                </Tab.Panel>


            </Tab.Panels>
        </Tab.Group>
    </div>
</div>
);

};

export default About;