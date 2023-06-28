export default function Att() {
    return(
        <>
  {/*Title*/}
  <div className="text-center pt-16 md:pt-32">
    <p className="text-sm md:text-base text-green-500 font-bold">
      March 2023 <span className="text-gray-900">/</span> University Project
    </p>
    <h1 className="font-bold break-normal text-3xl md:text-5xl">AT Tamariki</h1>
  </div>
  {/*image*/}
  <div
    className="container w-full max-w-6xl mx-auto bg-white bg-cover bg-center mt-8 rounded"
    style={{
      backgroundImage:
        'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvoakl.files.wordpress.com%2F2020%2F09%2Fbusway-photo.jpg&f=1&nofb=1&ipt=d761465170149aeebdf8010e177a91c6a3e08a4c02aadc70b5b2fbfc3bbd9fec&ipo=images")',
      height: "75vh"
    }}
  />
  {/*Container*/}
  <div className="container max-w-5xl mx-auto -mt-32">
    <div className="mx-0 sm:mx-6">
      <div
        className="bg-gray-100 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal rounded-xl"
        style={{ fontFamily: "Georgia,serif" }}
      >
        {/*Post Content*/}
        {/*Lead Para*/}
        <p className="text-2xl md:text-3xl mb-5">
          🚍 Auckland Transit Reimagined for Youth
        </p>
        <p className="py-6">
          In the fast-paced world of mobile applications, it's crucial to adapt
          and cater to the needs of diverse user groups. One such user group
          that often gets overlooked is children. Recognizing this gap, I made a
          simplified version of the AT Mobile app. AT Tamariki is a redesigned
          and kid-friendly version of the popular AT Mobile app developed by
          Auckland Transit. With a focus on simplicity and accessibility, AT
          Tamariki is designed to empower young users and make their journey
          through the city more enjoyable and engaging. This app marks the first
          time I used figma and provided a great learning opportunity, now I
          feel much more versed and can make something of much higher fidelity
          for the next time.
        </p>
        <p className="py-6">
          The first thing you'll notice when using AT Tamariki is its vibrant
          and playful user interface. The app features a visually appealing
          design with colourful icons, intuitive navigation, and age-appropriate
          content. By incorporating elements that resonate with children, I
          aimed to create an app that is engaging and easy to use, fostering a
          positive experience right from the start.
        </p>
        <p className="py-6">
          Navigating public transportation can be challenging for anyone, let
          alone children. AT Tamariki simplifies this process by providing
          precise, easy-to-understand bus schedules and routes. Young users can
          quickly find their desired route, view upcoming bus times, and set
          reminders for their preferred trips. The app's intuitive search
          functionality allows children to explore the city and plan their
          journeys independently, boosting their confidence and sense of
          autonomy.
        </p>
        <p className="py-6">
          AT Tamariki goes beyond just providing bus schedules. It includes a
          range of educational content tailored to children's interests. The app
          aims to educate and inspire young minds through interactive quizzes,
          fun facts about public transportation, and engaging stories. By
          combining learning with practical information, AT Tamariki encourages
          children to develop an understanding of public transportation while
          keeping them entertained.
        </p>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width={800}
          height={450}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fy15kCDENuNUAGG56Nay6pp%2FAT-Tamariki%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D0-3%26viewport%3D510%252C379%252C0.69%26scaling%3Dscale-down%26starting-point-node-id%3D0%253A3%26mode%3Ddesign"
          allowFullScreen=""
        />
        <p className="py-6">
          I understand that safety is paramount for children using mobile
          applications. AT Tamariki offers robust parental controls, enabling
          caregivers to set appropriate usage limits and monitor their child's
          interactions with the app. Additionally, the app includes safety
          features such as emergency contacts, real-time notifications, and
          clear instructions on what to do in case of any unforeseen
          circumstances. With AT Tamariki, parents can have peace of mind while
          allowing their children to navigate the city independently.
        </p>
        <p className="py-6">
          AT Tamariki is a game-changer for young users, making public
          transportation accessible, engaging, and educational. By redesigning
          the AT Mobile app with children in mind, Auckland Transit has taken a
          significant step towards creating a more inclusive and user-friendly
          transportation experience. Whether it's exploring new bus routes,
          learning about public transportation, or navigating the city, AT
          Tamariki empowers children to become confident and independent
          travelers. With its simple interface, interactive maps, and
          educational content, AT Tamariki ensures that children have a
          delightful journey through the city, fostering a lifelong love for
          public transportation and urban exploration.
        </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
</>

    )
}
