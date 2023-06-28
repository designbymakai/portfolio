export default function Photography() {
const Images = [
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/4b2ae0b2-bda0-4b4e-8953-7fc5da36a8b6_rw_3840.jpg?h=b9dbd8ba0787119fb6112e6208ce61b9",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/c5d71ead-a4de-420c-9fa2-aa57f6ed77c0_rw_3840.jpg?h=bba125e9d9dc06be383d1b5e7370e3f6",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/1b285e79-eb91-4c67-a07b-e1cd7c9774b2_rw_1920.jpg?h=32da8547579207f8401358e4cdddf9fa",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/8e85d9fb-ba70-4f17-8815-ec35b0b0e465_rw_1920.jpg?h=1780572c64e7cc2592534f6c5e11b778",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/98582360-3d16-46b3-8586-8bcada0d0f11_rw_1920.jpg?h=607ebf89ebdf023f3234cf0fb006d815",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/48e4e855-27b7-4582-885d-38d7c8174a71_rw_1920.jpg?h=cdeefbbf5327b66ebbff4839a20bf99e",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/3ee2575d-901c-4c48-8f76-5ff230c1927e_rw_1920.jpg?h=7a62a37b4a85f57a77203b8faf348d63",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/e498a70f-c3f3-4d8b-ba36-d5ccfda95f8d_rw_1920.jpg?h=82f8243d30761312bd95a2a689870cd4",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/37278eb2-8c0e-40a0-828c-ad6a79e0f777_rw_1920.jpg?h=8560519c92559eeded2c8fdac754031f",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/8844f9c1-968f-4ee9-9826-9e8297d678c2_rw_1920.jpg?h=8a8044002d2a7685e319cdb2101554d8",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/9706b8ca-f8a0-4c85-b4c6-a9125a938ba0_rw_1920.jpg?h=cdaf54912d05ff5458b1352907818e0d",
    "https://cdn.myportfolio.com/d0b39041-e2d6-42f6-85d4-1b29e59467de/a8360b06-d510-489c-8355-e275717e45e8_rw_1920.jpg?h=fd1017af5a5e6bbe2f95f7a3f5e283bf",
    ]
    return(
<section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto bg-gray-200 rounded-t">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Photography
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      A small collecition of my photography including some of my personal favorites. I shoot on my Nikon D3500 as a hobby, but have taken my photography experience into quite a few projects. To unwind I love to go on long walks and bring my camera with me and capture everything I see.
      </p>
    </div>
    <div className="container mx-auto">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {Images.map((image, index) => (
          <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md hover:scale-150" src={image}/>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    )
}
