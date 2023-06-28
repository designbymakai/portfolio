export default function Modeling() {
    const Images = [
        "https://i.ibb.co/RTS8Nrb/beauty-rend-side.png",
        "https://i.ibb.co/GJFz48p/beauty-rend-monitor.png",
        "https://i.ibb.co/Tm3CQT6/beauty-rend-frontangle.png",
        "https://i.ibb.co/kJ8zHkz/beauty-rend-coverpage.png",
        "https://i.ibb.co/34BxDH5/basic-render.png",
        "https://i.ibb.co/tm8RB3Q/beauty-rend-top.png",
        "https://i.ibb.co/2jZWpXc/beauty-rend-upside.png",
        "https://i.ibb.co/Gxsbfdk/beauty-rend-longlegs.png",
       "https://i.ibb.co/B24QddB/Screen-Shot-2023-03-26-at-2-04-11-PM.png",
        "https://i.ibb.co/x8Kg1bX/Screen-Shot-2023-03-26-at-2-05-35-PM.png",
        "https://i.ibb.co/T22Jqrf/Screen-Shot-2023-03-26-at-2-05-48-PM.png",
        "https://i.ibb.co/4471RL6/Screen-Shot-2023-03-26-at-2-06-18-PM.png",
        "https://i.ibb.co/F7cF7ss/Screen-Shot-2023-03-26-at-2-07-26-PM.png",
        "https://i.ibb.co/cvt93DF/Screen-Shot-2023-03-23-at-1-59-50-PM.png",
        "https://i.ibb.co/2dPr4Pp/Good-Render-EVE-1.png",
        "https://i.ibb.co/SRNzMyB/render-white-lcd.png",
        "https://i.ibb.co/QPYfR47/render-lighting-no-lcd.png",
        "https://i.ibb.co/Fzjwmxb/render-lighting-no-lcd.jpg",
        "https://i.ibb.co/gPMGhjk/lego-poster-final.jpg",
        "https://i.ibb.co/ThLyLZV/cutting-board-use3.png",
        "https://i.ibb.co/Pz90mJH/cutting-board-use2.png",
        "https://i.ibb.co/tMxF1PB/cutting-board-use.png",
        "https://i.ibb.co/Y8hxkmT/back-cycle.png",
        "https://i.ibb.co/xXJDgTp/front-view.png",
        "https://i.ibb.co/MBVX3Xk/front-view-cycle.png",
        "https://i.ibb.co/KbmnHSm/compare.png",
        
    ]
      return(
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-6 mx-auto bg-gray-200 rounded-t">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          3D Modeling
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        These are some pictures taken as documentation for projects I was working on for University. Therefore, there are many more projects I have 3D modeled for fun that I didn't take the time to render out properly. I use Blender for all my work as it is quite versatile, though I belive I could pick up another program quite fast if needed.
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
  