import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold">
            <span className="text-transparant bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello! I am{" "}</span> 
            Thiri
          </h1>
          <p className="text-lighten sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            mollitia sint? Tenetur esse nesciunt expedita non quibusdam
            laboriosam, nostrum quidem. Cupiditate obcaecati molestias
            inventore! Ipsa possimus quisquam sit beatae molestias?
          </p>
          <div 
        //   className="grid grid-cols-2 lg:grid-cols-12 md:grid-cols-6"
          >
            <button className="px-3 py-3 mr-4 w-full sm:w-fit bg-gradient-to-r from-blue-400 to-green-500 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 rounded-full text-white border border-white hover:bg-white hover:text-primary mt-3">
            Hire Me
            </button>
            <button className="px-3 py-3 mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full text-white border border-white hover:bg-white hover:text-primary mt-3">
            Download CV
            </button>

          </div>
        </div>
        <div className="col-span-5 place-self-center mt-3 lg:mt-0">
          <div 
          className="w-[400px] h-[400px] relative lg:w-[600px] lg:h-[600px]"
          >
            <Image
              src="/assets/images/coder.png"
              alt="coder image"
              width={700}
              height={900}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
