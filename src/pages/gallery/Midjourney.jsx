export default function Midjourney() {
    const Images = [
      "https://www.imgbly.com/ib/b3wwT3Zhy0",
      "https://www.imgbly.com/ib/V7b60WDNaF",
      "https://www.imgbly.com/ib/mjDu7NRWsy",
      "https://www.imgbly.com/ib/pzzqPeIpIC",
      "https://www.imgbly.com/ib/2c1EEIyqSz",
      "https://www.imgbly.com/ib/qjkKFjB8Pf",
      "https://www.imgbly.com/ib/4UgsZljjgv",
      "https://www.imgbly.com/ib/BHs04j2eXm",
      "https://www.imgbly.com/ib/8DFVV9Suxt",
      "https://www.imgbly.com/ib/CdIbJcNeNP",
      "https://www.imgbly.com/ib/5rehBesBQS",
      "https://www.imgbly.com/ib/PYQ19eipwi",
      "https://www.imgbly.com/ib/iKPazuuGQB",
      "https://www.imgbly.com/ib/AT0FGw36j6",
      "https://www.imgbly.com/ib/4nTPtGUSbL",
      "https://www.imgbly.com/ib/KA4WF9bAbj",
      "https://www.imgbly.com/ib/I4Yc7KqLAC",
      "https://www.imgbly.com/ib/ncAQAXOHGk",
      "https://www.imgbly.com/ib/36W7PFXW6t",
      "https://www.imgbly.com/ib/C9FBsGg0W9",
      "https://www.imgbly.com/ib/XD74vvPzB4",
      "https://www.imgbly.com/ib/tnisQBrcFC",
      "https://www.imgbly.com/ib/BXG8DDCER4",
      "https://www.imgbly.com/ib/ft8HrtmRBy",
      "https://www.imgbly.com/ib/T8LbTwkgAK",
      "https://www.imgbly.com/ib/tdiupPeLxE",
      "https://www.imgbly.com/ib/T7nS8C1WAH",
    ]
      return(
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-6 mx-auto bg-gray-200 rounded-t">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          AI Generated Art
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        A great way to get inspiration for projects or to draw up things directly from my imagination. I use Midjourney and Stable Diffusion as the source of my AI image generations. As one of my hobbies, I quite like to read fantasy novels and even am trying a hand at writing my own. I often use Midjourney to help me get visuals monsters, scenes, and characters in my book.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {Images.map((image, index) => (
            <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
              <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md hover:scale-150" src={image + ".png"}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
      )
  }
  