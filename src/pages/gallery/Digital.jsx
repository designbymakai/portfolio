export default function Digital() {
  const Images = [
    "https://www.imgbly.com/ib/KRyH254E6I.jpg",
    "https://www.imgbly.com/ib/Zl4KnCCUs3.jpg",
    "https://www.imgbly.com/ib/ipRXzMX3GX.jpg",
    "https://www.imgbly.com/ib/jqlzcns3vH.jpg",
    "https://www.imgbly.com/ib/2mgPGWLTRt.jpg",
    "https://www.imgbly.com/ib/tKVRMJVsYW.jpg",
    "https://www.imgbly.com/ib/OUr9TJnzVa.jpg",
    "https://www.imgbly.com/ib/R6XaDgW6Zx.jpg",
    "https://www.imgbly.com/ib/NNMCBUoWi9.jpg",
    "https://www.imgbly.com/ib/A9h8FTizu1.jpg",
    "https://www.imgbly.com/ib/vZAnEjljfB.jpg",
    "https://www.imgbly.com/ib/BqHsdrCw4E.jpg",
    "https://www.imgbly.com/ib/lyfNjViESM.jpg",
    "https://www.imgbly.com/ib/NlChaDZnTc.jpg",
    "https://www.imgbly.com/ib/vA1goTXNo3.jpg",
    "https://www.imgbly.com/ib/qk4nTcrb18.jpg",
    "https://www.imgbly.com/ib/vzvEqzIfz8.jpg",
    "https://s12.gifyu.com/images/SQjxn.gif",
  ]
    return(
<section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto bg-gray-200 rounded-t">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Digital Art
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      A small collection of some of the digital art I've done. A majority of the works were completed on Procreate on my iPad. Though I don't value myself too much as a artist when it comes to drawing and sketching, it is something I love to do as a creative outlet.  
      </p>
    </div>
    <div className="container mx-auto">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {Images.map((image, index) => (
          <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md hover:scale-125" src={image}/>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    )
}
