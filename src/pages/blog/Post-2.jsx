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
        
      >
        {/*Post Content*/}
          {/*Lead Para*/}
          <p className="text-2xl md:text-3xl mb-5 lora-font">
            📝 
            Blog Post #2 - CARL Framework
          </p>
          <hr/>
          <p className="pt-6 text-2xl lora-font">Context:
          </p>
          <p className="py-6"> In developing my capstone project, a productivity app for your computer aimed at enhancing productivity for adults with ADHD through an AI-assisted calendar/todo app, I’ve encountered various challenges and received valuable feedback that has significantly influenced the project’s direction. My project initially aimed to incorporate a broad range of features to address the diverse needs of individuals with ADHD, but the feedback has prompted me to refine my approach. Originally, I wanted to incorporate many smaller tools for productivity and to help neurodivergent workers to make the app a multipurpose tool that can be used throughout the day. After coming to realise the scope of building an app with all these extra features bundled together I had to take them out of my plan so I could work on something more feasible.  </p>
          
          <p className="pt-6 text-2xl lora-font">Action:</p>

          <p className="py-6">

          The most impactful feedback highlighted the need to prioritize core features over extra tools, ensuring that the application remains simple and accessible. This advice led me to narrow the project’s scope, focusing on the essential functionality of the app—streamlining task management and improving focus. I also began to consider how I might train the AI model to better assist users with task management, taking into account the unique challenges faced by individuals with ADHD. <br/> <br/>  
          
          Another crucial piece of feedback suggested incorporating design strategies that cater specifically to neurodiverse individuals, such as thoughtful use of color, typography, and overall design elements. This has prompted me to research and integrate design principles that enhance the user experience for those with ADHD, ensuring that the app is not only functional but also visually appealing and easy to navigate. 
            
          </p>
          <p className="pt-6 text-2xl lora-font">Result:</p>

          <p className="py-6">
          By narrowing the scope, I’ve been able to concentrate on refining the core features, such as task prioritization, reminders, and calendar integration, which should make it more robust and user-friendly. The decision to focus on simplicity and accessibility has led to a more intuitive interface, reducing the cognitive load on users. Additionally, the integration of neurodiversity-friendly design principles has the potential to improve the overall usability of the app, making it more engaging for users with ADHD. <br/>  <br/>

          Considering how to train the AI model has also been a critical step. I’ve started exploring how machine learning can be used to personalize task management for each user, adapting to their unique needs and preferences over time. This has opened up new possibilities for creating a more tailored and effective productivity tool with the user being able to create more personalized assistants. </p>
          <p className="pt-6 text-2xl lora-font">Learning:</p>

          <p className="py-6">
          Through this process, I’ve learned the importance of balancing ambition with practicality. While it’s tempting to include as many features as possible, focusing on the essentials has led to a more polished and functional product. The feedback I received also underscored the importance of user-centered design, particularly when designing for neurodiverse populations. I’ve gained a deeper understanding of how design choices can impact the user experience, especially for those with ADHD, and how crucial it is to involve users in the design process. <br/>  <br/>

          Moving forward, I will continue to refine the app based on user feedback and further testing, with a strong emphasis on maintaining simplicity, accessibility, and neurodiversity-friendly design. 


          </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
