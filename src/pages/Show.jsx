export default function Show() {
  return (
    <section className="w-full text-gray-600 body-font bg-dbm-w-100">
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          May 2023 <span className="text-gray-900">/</span> University Project
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          Flood Check Workshop Series
        </h1>
      </div>
      <div
        className="w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          backgroundImage: 'url("https://i.ibb.co/6JgwnDB/image.png")',
          height: "75vh"
        }}
      />
      <div className="w-full max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-gray-100 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal rounded-xl"
            style={{ fontFamily: "Georgia,serif" }}
          >
            {/* Content */}
          </div>
        </div>
      </div>
    </section>
  );
}