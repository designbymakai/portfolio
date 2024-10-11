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

export default function Post5() {
  const { previousPost, nextPost } = getPostLinks('post-5');

  return (
    <div className="bg-dbm-db" style={{
      backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F24-247272_background-pattern-s-white-background-pattern-png.png&f=1&nofb=1&ipt=c3ab985f59c9a27f5209914d633f6e4b39db10b5862691d588a1448b47697042&ipo=images")`,
      backgroundRepeat: 'repeat, no-repeat',
      backgroundSize: 'auto, cover'
    }}>
      {/*Title*/}
      <div className="text-center pt-8 md:pt-10">
        <p className="text-sm md:text-base text-dbm-lb-200 font-bold inline-block">
          10 October 2024 <span className="text-dbm-pr-100">/</span> Capstone Blog
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
        
        <h1 className="font-bold break-normal text-3xl md:text-5xl">Post #5 </h1>
      </div>
  {/*image*/}
  <div
    className="container w-full max-w-6xl mx-auto bg-dbm-w bg-cover bg-center mt-8 rounded"
    style={{
      backgroundImage:
        'url("https://www.ed.ac.uk/files/styles/landscape_breakpoints_theme_uoe_mobile_1x/public/thumbnails/image/carl_acronym_600x600_0.png?itok=vj_QlWRt")',
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
          <p className="text-2xl md:text-3xl mb-5 lora-font">
            📝 
            Blog Post #5 - Wrapping Up "Butterfly"
          </p>
          <hr/>
          <p className="pt-6 text-2xl lora-font">
          As I reach the end of my capstone journey, I’ve spent the final weeks polishing, testing, and preparing the Butterfly app for distribution. This phase primarily focused on refining the user experience through the app's final packaging, creating branding elements, and capturing its visual identity through hero shots.
          </p>
          <p className="pt-6 text-2xl lora-font">Context:
          </p>
          <p className="py-6"> This phase marked the culmination of months of work. The goal was to finalize and package the app so that it could run seamlessly on both Mac and Windows platforms. Alongside technical aspects, I also focused on branding by designing the final logo and app icon, ensuring they captured Butterfly's essence of calm, productivity, and accessibility. High-quality screenshots, known as hero shots, were another priority, as they serve as a key visual representation of the app’s functionality and interface.</p>
          
          <p className="pt-6 text-2xl lora-font">Action:</p>

          <p className="py-6">

          First, I turned my attention to the packaging process, ensuring that Butterfly could be run as a standalone app. Using Electron, I finalized the app builds for Mac and Windows, testing for any platform-specific issues. Debugging minor glitches, such as UI responsiveness and ensuring smooth AI task creation, was crucial during this phase. <br/> <br/>
          Next came the visual branding—an area I wanted to polish with a professional touch. After refining the logo multiple times throughout the project, I settled on a design that represents simplicity and lightness, reflecting the app’s purpose of helping ADHD professionals "fly" through their tasks. The app icon followed a similar design principle, ensuring it was recognizable yet minimal. <br/> <br/>
          Finally, I took several hero shots. This involved carefully capturing the key screens in high resolution, aiming to show the app’s accessible interface, clean design, and easy-to-use features. The shots were carefully selected to highlight the task management system, calendar integration, and AI features—all core elements of Butterfly.

          </p>
          <p className="pt-6 text-2xl lora-font">Result:</p>

          <p className="py-6">
          Through this process, I successfully built, tested, and packaged the app for both platforms. The logo and app icon now align with Butterfly’s brand identity, offering a professional yet approachable visual representation. The hero shots visually communicate the essence of the app, showcasing the clean, user-friendly design that I’ve spent so much time refining.

          </p>

          <p className="pt-6 text-2xl lora-font">Learning:</p>

          <p className="py-6">
          One of the most significant lessons from this phase was the importance of attention to detail when finalizing a product. From app packaging to visual branding, every small decision influences how users experience the app. I also learned that creating visual assets, such as hero shots, requires thoughtful planning to effectively convey the app’s core features in a clear and appealing way.

          </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
