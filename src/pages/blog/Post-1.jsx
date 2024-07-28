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
    <div className="bg-dbm-db" >
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
        
      >
        {/*Post Content*/}
          {/*Lead Para*/}
          <p className="text-2xl md:text-3xl mb-5 lora-font">
            📝 
            The Integrated Reflective Cycle: Reflection on Developing a Productivity App for Adults with ADHD 
          </p>
          <hr/>
          <p className="pt-6 text-2xl lora-font">The Experience
          </p>
          <p className="py-6">
          This week, I focused on researching existing websites and products that align with my goal of creating a tool to aid adults with ADHD in the workplace. My aim is to develop a comprehensive productivity app that combines the best features of existing time management, calendar, and to-do apps. The goal is to address task paralysis by breaking down larger projects into smaller, manageable tasks, thereby boosting user confidence and momentum.  <br/>  <br/>

My initial idea is to incorporate AI to automate and streamline workflow, integrating with users' emails, calendars, and other work-related software. The AI will compile and organize tasks, creating daily lists and timelines to enhance productivity.          </p>
<p className="pt-6 text-2xl lora-font">Reflection on Action </p>


          <p className="py-6">
          In this phase, I've identified several challenges and successes. One significant challenge is learning how to manage multiple inbound API connections, which is essential for the app's functionality. While there are apps that handle one or two features of my envisioned app, none integrate all aspects with AI. <br/>  <br/>

I've also recognized the need for more research to validate the efficacy of my solution. My approach has been influenced by my own experience with ADHD, so I've begun reaching out to others with ADHD to gather their input and ensure I'm not missing any crucial features. <br/>  <br/>

Building the prototype poses another challenge, especially regarding AI and app integration. Despite this, my background in JavaScript and front-end web design gives me confidence. I'm considering using Node.js, React JS, Electron JS, and TailwindCSS to create a lightweight, universally compatible desktop application. <br/>  <br/>

The Field Guide to Human-Centered Design by IDEO is guiding my design process. Currently, I'm in the Inspiration phase, focused on understanding users and their context. My research has revealed that adults with ADHD struggle with poor self-confidence, distractibility, stress, and ADHD paralysis. These insights have shaped my solution to break down larger tasks and incorporate elements of gamification to enhance engagement and reduce anxiety.

          </p>
          <p className="pt-6 text-2xl lora-font">Theory</p>

          <p className="py-6">
          From a broader perspective, this project ties into existing professional literature on ADHD and productivity tools. Many productivity apps aim to streamline workflow, but few are tailored specifically for adults with ADHD. My project seeks to fill this gap by addressing the unique needs of this user group.<br/>  <br/>

The Human-Centered Design framework, while basic, allows flexibility and creativity. However, its broad steps require me to create detailed sub-tasks to ensure thorough completion of each phase. This structured approach is crucial for developing a tool that truly meets the needs of adults with ADHD.          </p>
          <p className="pt-6 text-2xl lora-font">Preparation</p>

          <p className="py-6">
          Moving forward, I need to maintain objectivity to avoid biases influenced by my personal experience with ADHD. It's essential to design for a diverse user base, considering that many individuals with ADHD also have comorbidities such as dyslexia, anxiety, and autism.<br/>  <br/>

I plan to continue gathering feedback from other adults with ADHD and refine my app based on their input. Additionally, I'll delve deeper into learning about AI and API integrations to overcome the technical challenges I've identified.<br/>  <br/>

Reflecting on this experience has highlighted the importance of empathy and thorough research in the design process. I've learned to balance personal motivation with professional objectivity, ensuring my solution is both effective and inclusive. Going forward, I will strive to maintain this balance, continually seeking feedback and refining my approach to create a tool that genuinely benefits adults with ADHD in the workplace.


          </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
 <div/>
</div>

    )
}
