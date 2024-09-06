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

export default function Post3() {
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
          9 September 2024 <span className="text-dbm-pr-100">/</span> Capstone Blog
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
        
        <h1 className="font-bold break-normal text-3xl md:text-5xl">Post #3 </h1>
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
            Blog Post #3 - Iterating Features and Branding for "Butterfly"
          </p>
          <hr/>
          <p className="pt-6 text-2xl lora-font">Context:
          </p>
          <p className="py-6"> In the past few weeks, I’ve been diving deeper into the development of my capstone app, Butterfly, which focuses on productivity for adults with ADHD. A key part of this process has been iterating on core features like the calendar system and integrating the ChatGPT API. In addition, I have refined the visual branding of the app, focusing on design strategies that cater to neurodivergent audiences. I’ve also spent time refining my capstone report, making significant adjustments to the abstract and positionality sections, while reviewing my literature review.</p>
          
          <p className="pt-6 text-2xl lora-font">Action:</p>

          <p className="py-6">

          I tackled several major technical challenges, starting with implementing a calendar system using the React Big Calendar library. This involved extensive research and going through documentation and YouTube tutorials to ensure I could build out a customizable event creation system. I also incorporated a drag-and-drop feature, which aligns with my goal of maintaining user-friendly interactions. In parallel, I integrated ChatGPT into the app by using its API, a process that took several attempts before I successfully established a working interaction system. <br/> <br/>  
          
          On the design side, I solidified the app’s branding by finalizing the color scheme, inspired by principles for designing for neurodivergent users. I focused on subtle color contrasts and consistent, bright color usage to create an inviting and easy-to-navigate interface. The tentative title Butterfly felt like a perfect fit, symbolizing the flighty nature of ADHD attention while remaining light-hearted and memorable. <br/> <br/> 

          For the report, I rewrote my abstract and positionality to better align with the project’s focus on ADHD. The literature review has also undergone some refinement, although I’m still determining if additional material is needed.

            
          </p>
          <p className="pt-6 text-2xl lora-font">Result:</p>

          <p className="py-6">
          Both the calendar system and ChatGPT API integration are now functioning, though they still need refinement. I’m particularly proud of the drag-and-drop event feature in the calendar, as it simplifies interaction, which is essential for my target audience. The app’s branding feels cohesive, and the use of neurodivergent-friendly design principles strengthens the overall accessibility. As for the report, the revised abstract and positionality better reflect my personal connection to the project and ADHD, which is a more honest representation of my goals.
          </p>

          <p className="pt-6 text-2xl lora-font">Learning:</p>

          <p className="py-6">
          This phase of the project taught me a lot about perseverance in problem-solving, especially when dealing with complex technical integrations like the ChatGPT API. Spending hours on documentation and tutorials was tedious but rewarding in the long run, as I now have a solid base to refine. Similarly, working on the branding helped me see the importance of not just aesthetics but intentional design choices that meet the needs of my neurodivergent audience. Through revising my capstone report, I also learned the importance of aligning the project’s written components with my own experiences, which strengthens the authenticity of the work.
          </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
