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

export default function Post4() {
  const { previousPost, nextPost } = getPostLinks('post-3');

  return (
    <div className="bg-dbm-db" style={{
      backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F24-247272_background-pattern-s-white-background-pattern-png.png&f=1&nofb=1&ipt=c3ab985f59c9a27f5209914d633f6e4b39db10b5862691d588a1448b47697042&ipo=images")`,
      backgroundRepeat: 'repeat, no-repeat',
      backgroundSize: 'auto, cover'
    }}>
      {/*Title*/}
      <div className="text-center pt-8 md:pt-10">
        <p className="text-sm md:text-base text-dbm-lb-200 font-bold inline-block">
          23 September 2024 <span className="text-dbm-pr-100">/</span> Capstone Blog
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
        
        <h1 className="font-bold break-normal text-3xl md:text-5xl">Post #4 </h1>
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
            Blog Post #3 - Fine-Tuning Features and Early User Feedback
          </p>
          <hr/>
          <p className="pt-6 text-2xl lora-font">Context:
          </p>
          <p className="py-6"> As I progress with my capstone project, Butterfly, I’ve focused extensively on refining the app’s features, particularly in relation to its AI-powered task management system. Initially, I had aimed to integrate calendar and mail functions that would allow the app to import events from external sources. However, due to time constraints and complexity, I shifted my focus toward making the AI more capable of creating, listing, and altering events directly within the app. In addition, I have been working on the visual identity of the app by designing a new logo and updating the color scheme. I also ran an initial round of user testing with classmates to gather feedback on the current state of the app.</p>
          
          <p className="pt-6 text-2xl lora-font">Action:</p>

          <p className="py-6">

          One of the biggest challenges I faced was getting the AI to manage tasks more intuitively. While I managed to get it to create and alter events, the interactions require very specific phrasing, making it less fluid than I had hoped. However, I learned a lot about how to structure these interactions and will continue refining them. On the design front, I developed a logo that better represents the app’s identity and adjusted the color scheme to be more cohesive. Furthermore, I conducted initial user testing with classmates, allowing me to observe how others interact with the app and get early impressions of its functionality and design.

            
          </p>
          <p className="pt-6 text-2xl lora-font">Result:</p>

          <p className="py-6">
          The AI is now able to create and modify events, though it still requires fine-tuning to make the interaction more natural and adaptable to varied user inputs. The feedback from classmates during testing was mostly positive, with several noting that the interface is user-friendly and the branding is appealing. However, there are still several features that need work, including making the AI more intuitive and improving the integration of the calendar system. The updated logo and color scheme were well-received, and I feel that they better reflect the tone and purpose of Butterfly.

          </p>

          <p className="pt-6 text-2xl lora-font">Learning:</p>

          <p className="py-6">
          This stage of the project has reinforced the importance of iteration. While I was initially frustrated by the difficulty of making the AI handle event management smoothly, the process of troubleshooting taught me valuable lessons about how users might interact with the app. The early user testing also showed me how crucial it is to gather external feedback as early as possible, as it highlighted areas that I hadn’t considered before. Overall, while the project still has a way to go, I’m confident that with continued refinement, the core functionality will become more reliable and intuitive for users.

          </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
