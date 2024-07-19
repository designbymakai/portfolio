import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faHome, faCircleRight } from '@fortawesome/free-solid-svg-icons';

const getPostLinks = (currentPost) => {
  const totalPosts = 5; // Replace with the actual number of posts
  const currentPostNumber = parseInt(currentPost.split('-')[1]);

  const previousPostNumber = currentPostNumber === 1 ? totalPosts : currentPostNumber - 1;
  const nextPostNumber = currentPostNumber === totalPosts ? 1 : currentPostNumber + 1;

  return {
    previousPost: `/post-${previousPostNumber}`,
    nextPost: `/post-${nextPostNumber}`
  };
};

export default function Post2() {
  const { previousPost, nextPost } = getPostLinks('post-2');

  return (
    <div className="bg-dbm-db" style={{
      backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F24-247272_background-pattern-s-white-background-pattern-png.png&f=1&nofb=1&ipt=c3ab985f59c9a27f5209914d633f6e4b39db10b5862691d588a1448b47697042&ipo=images")`,
      backgroundRepeat: 'repeat, no-repeat',
      backgroundSize: 'auto, cover'
    }}>
      {/*Title*/}
      <div className="text-center pt-8 md:pt-10">
        <p className="text-sm md:text-base text-dbm-lb-200 font-bold inline-block">
          19 August 2024 <span className="text-dbm-pr-100">/</span> Capstone Blog
        </p>
        
        <div className="flex justify-center space-x-4 my-4">
          <Link to={previousPost} className="text-dbm-lb-200">
            <FontAwesomeIcon icon={faCircleLeft} size="lg" />
          </Link>
          <Link to="/blog" className="text-dbm-lb-200">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
          <Link to={nextPost} className="text-dbm-lb-200">
            <FontAwesomeIcon icon={faCircleRight} size="lg" />
          </Link>
        </div>
        
        <h1 className="font-bold break-normal text-3xl md:text-5xl">Post #2 </h1>
      </div>
  {/*image*/}
  <div
    className="container w-full max-w-6xl mx-auto bg-dbm-w bg-cover bg-center mt-8 rounded"
    style={{
      backgroundImage:
        'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F970%2F338%2Flarge_2x%2Fbuilding-under-construction-site-free-vector.jpg&f=1&nofb=1&ipt=80089e9b22d3da2c11ca37b6e3b3110df4d8bd0f4eb5ce91e5a92f6f81d06a52&ipo=images")',
      height: "75vh"
    }}
  />
  {/*Container*/}
  <div className="container max-w-5xl mx-auto -mt-32 ">
    <div className="mx-0 sm:mx-6">
      <div
        className="bg-gray-100 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal rounded-xl"
        style={{ fontFamily: "Georgia,serif" }}
      >
        {/*Post Content*/}
          {/*Lead Para*/}
          <p className="text-2xl md:text-3xl mb-5">
            📝 Blog 2 Summative
          </p>
          <p className="py-6">
Coming Soon          </p>
          
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
