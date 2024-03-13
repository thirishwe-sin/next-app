"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {

  const DownloadButton = () => {
    const onButtonClick = () => {
      const pdfUrl = "/public/ThiriShweSinCV.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "thirishwesincv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button className="px-3 py-3 mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full text-white border border-white hover:text-secondary hover:bg-accent mt-3" onClick={onButtonClick}>
        Download CV
      </button>
    );
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 p-5">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-4xl lg:text-5xl mb-4 font-extrabold">
            <span
            style={{color: 'linear-gradient(90deg, rgba(2,0,36,1) 0%,'}}
            className="text-transparant bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello! I am{" "}
            </span>
            <TypeAnimation
              sequence={[
                'Thiri',
                1000,
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', color: 'rgb(56 189 248)'}}
              repeat={Infinity}
            />
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
            <button className="px-3 py-3 mr-4 w-full sm:w-fit bg-gradient-to-r from-blue-400 to-green-500 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 rounded-full text-white border border-white hover:text-secondary hover:bg-accent mt-3">
              Hire Me
            </button>
            <DownloadButton />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-3 lg:mt-0">
          <div className="w-[400px] h-[400px] relative lg:w-[600px] lg:h-[600px]">
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
