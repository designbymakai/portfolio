
export default function FloodCheck() {
    return(
<>
  <div className="text-center pt-16 md:pt-32">
    <p className="text-sm md:text-base text-green-500 font-bold">
      May 2023 <span className="text-gray-900">/</span> University Project
    </p>
    <h1 className="font-bold break-normal text-3xl md:text-5xl">
      Flood Check Workshop Series
    </h1>
  </div>

  <div
    className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
    style={{
      backgroundImage: 'url("https://i.ibb.co/6JgwnDB/image.png")',
      height: "75vh"
    }}
  />

  <div className="container max-w-5xl mx-auto -mt-32">
    <div className="mx-0 sm:mx-6">
      <div
        className="bg-gray-100 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal rounded-xl"
        style={{ fontFamily: "Georgia,serif" }}
      >

        <p className="text-2xl md:text-3xl mb-5">
          🚧 Preparing the Auckland Community for the Worst
        </p>
        <p className="py-6">
          A goal-oriented interactive workshop that is tailor-made for the local
          Auckland community. Centred around engaging in activities that inform
          the participants of safety measures and precautions involving floods.
        </p>
        <p className="py-6">
          This project stemmed from a design brief to create a workshop for the
          local community. My group and I executed a test version of the
          workshop with a small group of participants and received great
          feedback.
        </p>
        <p className="py-6">
          The topic of flooding has been highly prevalent as Auckland has been
          hit with a few sizable floods in the past few years, and many people
          still need clarification on what to do if they were to be in such a
          situation.
        </p>
        <p className="py-6">
          In association with my team, we developed a comprehensive document to
          illustrate the workshop's purpose, process, and outcome.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1T1aR9H7OO_HBoithFjBW9UmPeIPcfILK/preview?usp=embed_googleplus"
          className="w-full h-screen"
        />
        <p className="py-6">
          The design brief had another aspect taking place after the workshop
          was conducted, involving the creation of social media posts to
          advertise the workshop.
        </p>
        <p className="py-6">
          The brief specified two posts, one as a static image and one as a
          video or animation. My group and I split the workload, me working on
          the video as I had experience, and they worked to create a static
          post. However, we met to film the video together, where I wrote a
          script, directed the shooting, and later edited it to be a mock news
          segment.
        </p>
        <iframe
          className="w-full"
          height={500}
          src="https://www.youtube.com/embed/bEyUUaTIy4k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
      </div>
    </div>
  </div>
</>

    )
}