import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const FeaturedProjects = ({ projects = [], currentSlide = 0, onPrevious, onNext, onSelect }) => {
  const projectList = projects.length ? projects : [
    { id: 1, title: 'Project One', description: 'An example project', image: 'https://via.placeholder.com/800x400' },
  ];
  const goToSlide = (index) => onSelect ? onSelect(index) : null;

  return (
    <div className="w-full md:flex-1 order-first md:order-last h-auto md:h-full p-4 sm:p-6 bg-dbm-db-100 flex items-center justify-center">
      {/* Slideshow Container (responsive heights for small screens, fill available height on desktop) */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-dbm-db-200 min-h-[260px] sm:min-h-[320px] md:min-h-0 md:h-full">
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover h-64 sm:h-96 md:h-full"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dbm-db-400/90 to-transparent" />
            
            {/* Content */}
            <div className="absolute left-0 right-0 p-4 sm:p-6 text-dbm-w-100 bottom-12 sm:bottom-16">
              <h2 className="text-xl sm:text-3xl font-bold mb-2 text-dbm-pr-100">{project.title}</h2>
              <p className="text-sm sm:text-base mb-3 text-dbm-w-200">{project.description}</p>
            </div>
          </div>
        ))}

        {/* Bottom bar: dots + CTA */}
        <div className="absolute left-0 right-0 bottom-0 z-30 bg-gradient-to-t from-dbm-db-500/90 via-dbm-db-500/75 to-dbm-db-500/20 backdrop-blur-sm px-3 sm:px-4 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            {projectList.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-transform duration-200 flex items-center justify-center ${
                  index === currentSlide
                    ? 'bg-dbm-pr-100 w-3.5 h-3.5 rounded-full shadow-md'
                    : 'bg-dbm-pr-300 w-3 h-3 rounded-full hover:bg-dbm-pr-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-block bg-dbm-pr-100 hover:bg-dbm-pr-200 text-white text-xs sm:text-sm font-semibold py-2 px-3 rounded-md cursor-pointer transition-colors duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
