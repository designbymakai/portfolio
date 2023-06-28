export default function Progress(){
    var h = document.documentElement,
		  b = document.body,
		  st = 'scrollTop',
		  sh = 'scrollHeight',
		  progress = document.querySelector('#progress'),
		  scroll;
	var scrollpos = window.scrollY;
	var header = document.getElementById("header");

	document.addEventListener('scroll', function() {

		/*Refresh scroll % width*/
		scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
		progress.style.setProperty('--scroll', scroll + '%');

		/*Apply classes for slide in bar*/
		scrollpos = window.scrollY;

    if(scrollpos > 100){
      header.classList.remove("hidden");
	  header.classList.remove("fadeOutUp");
	  header.classList.add("slideInDown");
    }
    else {
	  header.classList.remove("slideInDown");
      header.classList.add("fadeOutUp");
	  header.classList.add("hidden");
    }

	});
    return(
        <>
  <div
    id="header"
    className="bg-white fixed w-full z-10 top-0 hidden animated"
    style={{ opacity: ".95" }}
  >
    <div className="bg-white">
      <div className="flex flex-wrap items-center content-center">
        <div className="flex w-1/2 justify-start text-white font-extrabold">
          <a
            className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
            href="#"
          >
            <span className="hidden w-0 md:w-auto md:block pl-1">
              Flood Check Workshop
            </span>
          </a>
        </div>
      </div>
    </div>
    <div
      id="progress"
      className="h-1 bg-white shadow"
      style={{
        background:
          "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)"
      }}
    />
  </div>
</>

    )
}