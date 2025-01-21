import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';


export default function Blog() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Blog Post 1',
      description: 'Initial post',
      date: '2024-07-29',
      image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thebluediamondgallery.com%2Ftablet%2Fimages%2Fblog.jpg&f=1&nofb=1&ipt=3c1dab6d8f5ffff7de0471229a9b381ad28a206f6a0cd03d7e04e5eee5160104&ipo=images',
      link: '/post-1',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      description: 'Blog post using CARL reflective framework.',
      date: '2024-08-19',
      image: 'https://www.ed.ac.uk/files/styles/landscape_breakpoints_theme_uoe_mobile_1x/public/thumbnails/image/carl_acronym_600x600_0.png?itok=vj_QlWRt',
      link: '/post-2',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      description: 'Coming soon',
      date: '2024-09-09',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F970%2F338%2Flarge_2x%2Fbuilding-under-construction-site-free-vector.jpg&f=1&nofb=1&ipt=80089e9b22d3da2c11ca37b6e3b3110df4d8bd0f4eb5ce91e5a92f6f81d06a52&ipo=images',
      link: '/post-3',
    },
    {
      id: 4,
      title: 'Blog Post 4',
      description: 'Coming soon',
      date: '2024-09-23',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F970%2F338%2Flarge_2x%2Fbuilding-under-construction-site-free-vector.jpg&f=1&nofb=1&ipt=80089e9b22d3da2c11ca37b6e3b3110df4d8bd0f4eb5ce91e5a92f6f81d06a52&ipo=images',
      link: '/post-4',
    },
    {
      id: 5,
      title: 'Blog Post 5',
      description: 'Coming soon',
      date: '2024-10-07',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F970%2F338%2Flarge_2x%2Fbuilding-under-construction-site-free-vector.jpg&f=1&nofb=1&ipt=80089e9b22d3da2c11ca37b6e3b3110df4d8bd0f4eb5ce91e5a92f6f81d06a52&ipo=images',
      link: '/post-5',
    }
  ]);

  const [sortType, setSortType] = useState('dateDesc');

  const sortPosts = (type) => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (type === 'dateAsc') {
        return new Date(a.date) - new Date(b.date);
      } else if (type === 'dateDesc') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    setPosts(sortedPosts);
    setSortType(type);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto bg-dbm-w-100 rounded-t">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">
            Blog
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Blog for my final semester of Design at UoA. Here I will be posting about my progress and thoughts on my capstone project studying ADHD adults in the workplace.
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <button onClick={() => sortPosts('dateAsc')} className="mr-4 bg-dbm-lb-300 hover:bg-dbm-lb-400 hover:shadow-md text-white px-4 py-2 rounded">
            <FontAwesomeIcon icon={faSortAmountUp} />
          </button>
          <button onClick={() => sortPosts('dateDesc')} className="bg-dbm-lb-300 hover:bg-dbm-lb-400 hover:shadow-md text-white px-4 py-2 rounded">
            <FontAwesomeIcon icon={faSortAmountDown} />
          </button>
        </div>
        <div className="flex flex-wrap -m-2">
          {posts.map((post) => (
            <div key={post.id} className="md:w-1/3 w-full p-4">
              <div className="flex relative w-full h-64">
                <img
                  alt="post"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  src={post.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 rounded-md border-dbm-pr-200">
                  <h2 className="tracking-widest text-md title-font font-bold text-dbm-pr-200 mb-1 uppercase border-b-2">
                    {post.title}
                  </h2>
                  <p className="leading-relaxed font-light text-dbm-db-100">
                    {post.description}
                  </p>
                  <button className="bottom-4 absolute w-1/2 m-auto left-0 right-0 bg-dbm-pr-200 hover:bg-dbm-pr-300 hover:shadow-lg">
                    <Link className='text-dbm-w-100 hover:font-bold hover:text-dbm-w-100' to={post.link}>
                      View More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}