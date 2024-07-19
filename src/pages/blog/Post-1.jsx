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

export default function Post1() {
  const { previousPost, nextPost } = getPostLinks('post-1');

  return (
    <div className="bg-dbm-db" style={{
      backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F24-247272_background-pattern-s-white-background-pattern-png.png&f=1&nofb=1&ipt=c3ab985f59c9a27f5209914d633f6e4b39db10b5862691d588a1448b47697042&ipo=images")`,
      backgroundRepeat: 'repeat, no-repeat',
      backgroundSize: 'auto, cover'
    }}>
      {/*Title*/}
      <div className="text-center pt-8 md:pt-10">
        <p className="text-sm md:text-base text-dbm-lb-200 font-bold inline-block">
          29 July 2024 <span className="text-dbm-pr-100">/</span> Capstone Blog
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
        
        <h1 className="font-bold break-normal text-3xl md:text-5xl">Post #1 </h1>
      </div>
  {/*image*/}
  <div
    className="container w-full max-w-6xl mx-auto bg-dbm-w bg-cover bg-center mt-8 rounded"
    style={{
      backgroundImage:
        'url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thebluediamondgallery.com%2Ftablet%2Fimages%2Fblog.jpg&f=1&nofb=1&ipt=3c1dab6d8f5ffff7de0471229a9b381ad28a206f6a0cd03d7e04e5eee5160104&ipo=images")',
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
            📝 Blog 1 Checkpoint 
          </p>
          <p className="py-6">
          Id anim nulla eu proident. Ipsum occaecat ullamco cillum duis proident sint dolore. Veniam consectetur ad nisi irure aliquip velit dolore magna tempor amet veniam laboris ad. Fugiat proident tempor labore enim ea dolor ea. Cillum non consectetur esse non.
          </p>
          <p className="py-6">
          Eu deserunt laboris adipisicing laborum aliquip nulla fugiat aute eiusmod aliqua sint. Eu consequat officia exercitation proident officia elit aute veniam deserunt dolore. Duis laborum ad pariatur irure mollit irure voluptate voluptate duis et eu. Eu minim nostrud dolore laborum reprehenderit elit esse. Esse occaecat duis nulla ullamco anim cupidatat deserunt culpa do eiusmod id laborum irure exercitation laboris. Nisi cillum fugiat aliquip dolor qui anim pariatur est.
          </p>
          <p className="py-6">
          Irure tempor exercitation aute mollit velit amet eiusmod amet proident. Fugiat qui consequat ea nisi. Proident fugiat adipisicing enim nostrud sint aliqua elit tempor laboris nisi qui duis sunt laborum. Nulla consectetur consectetur mollit. Culpa Lorem ex occaecat id ut officia in id culpa amet. Fugiat dolore incididunt eu labore do eiusmod minim nulla amet eu. Ea occaecat fugiat non voluptate commodo ex nisi non Lorem. Non cillum anim est et.
          </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
