export default function Happy() {
    return(
    <>
  {/*Title*/}
  <div className="text-center pt-16 md:pt-32">
    <p className="text-sm md:text-base text-green-500 font-bold">
      June 2022 <span className="text-gray-900">/</span> University Project
    </p>
    <h1 className="font-bold break-normal text-3xl md:text-5xl">
      Happy, Healthy, and Clean?
    </h1>
  </div>
  {/*image*/}
  <div
    className="container w-full max-w-6xl mx-auto bg-white bg-cover bg-center mt-8 rounded"
    style={{
      backgroundImage: 'url("https://www.imgbly.com/ib/Y5bqfQhlc8.png")',
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
          ♻️ A Critical Look at Waste Management
        </p>
        <p className="py-6">
          'Happy, Healthy, &amp; Clean' is a zine I wrote and illustrated
          shedding light on innovative solutions addressing waste management and
          water scarcity issues. These articles discuss the potential of the
          automatic pneumatic waste collection system (PWCS), solar compacting
          trashcans, and greywater recycling as practical approaches to
          minimising environmental impact and promoting sustainability.
        </p>
        <p className="py-6">
          The first article highlights the detrimental consequences of
          consumerism, leading to excessive waste generation. It introduces the
          automatic pneumatic waste collection system (PWCS), which employs
          interlocking pipes to collect and transport waste for processing. This
          system offers a convenient and efficient alternative to traditional
          waste collection methods, reducing overflowing trash receptacles and
          curbing littering. PWCS aims to minimise environmental pollution
          caused by mismanaged waste by making waste disposal easier.
        </p>
        <p className="py-6">
          The second article emphasises the importance of convenience in waste
          disposal. It introduces solar compacting trashcans, utilising
          renewable solar energy to compact and store significantly more trash
          than standard bins. By reducing collection frequency and cutting
          emissions, these trashcans discourage overflowing and promote
          responsible waste disposal in high-density areas. Additionally, these
          devices have the potential to power monitors or wireless hotspots,
          further enhancing their functionality.
        </p>
        <p className="py-6">
          The third article addresses the water scarcity crisis. It emphasises
          the limited availability of fresh water and the strain caused by a
          growing population and excessive water usage. Greywater recycling
          emerges as a solution, enabling wastewater reuse from activities like
          showering and laundry for non-potable purposes such as toilet
          flushing, irrigation, and landscaping. This recycling system has the
          potential to significantly reduce residential and non-residential
          water consumption, thereby conserving our most essential resource.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1q15q2iFpac0h6bEFhWeVcDunrv4ymL1R/preview?usp=embed_googleplus"
          className="w-full h-screen"
        />
        <p className="py-6">
          These articles highlight innovative approaches to waste management and
          water conservation. While they do not entirely solve the issues of
          consumerism, waste, and water scarcity, they offer practical and
          sustainable solutions. The automatic pneumatic waste collection
          system, solar compacting trashcans, and greywater recycling systems
          all minimise environmental impact and promote responsible behaviour.
          By adopting these innovative technologies, we can work towards a more
          sustainable future where waste is effectively managed, and water
          resources are conserved for generations.
        </p>
        {/*/ Post Content*/}
      </div>
    </div>
  </div>
</>
    )
}
