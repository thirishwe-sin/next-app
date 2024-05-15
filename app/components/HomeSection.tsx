"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from './page.module.css'

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
      <button
        className="px-3 py-3 mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full  hover:from-pink-500 hover:to-yellow-500 text-white border border-white hover:text-secondary hover:bg-accent mt-3"
        onClick={onButtonClick}
      >
        Download CV
      </button>
    );
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mx-auto min-h-screen">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl mb-4 font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello! I am{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Thiri",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block", color: "rgb(56 189 248)" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-400  sm:text-lg mb-6 lg:text-xl">
            I am an enthusiastic and self-motivated developer with over 2 years
            of experience in web development and mobile development. I possess a
            strong ability to work and communicate effectively with diverse
            teams. Thriving under pressure, I am a fast learner, eager to
            contribute my skills and expertise to your company. I am confident
            that my background and experience make me a valuable asset, and I am
            excited about the opportunity to contribute to the success of your
            team.
          </p>
          <div
          //   className="grid grid-cols-2 lg:grid-cols-12 md:grid-cols-6"
          >
            <button className="px-3 py-3 mr-4 w-full sm:w-fit bg-gradient-to-r from-blue-400 to-green-500 hover:bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 rounded-full text-white border border-white hover:text-secondary hover:bg-accent mt-3">
              Hire Me
            </button>
            <DownloadButton />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-3 lg:mt-0">
          {/* <div className="w-[300px] h-[300px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src="/assets/images/profile.jpg"
              alt="coder image"
              width={600}
              height={600}
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-auto rounded-tr-[100px] rounded-bl-[100px] border border-sky-500 outline outline-offset-2 outline-blue-500"
              className="box"
            />
          </div> */}
          <div
            className={`${styles.imageContainer} ${styles.animatedBorder}`}
          >
            <Image
              src="/assets/images/profile.jpg"
              alt="coder image"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <Carousel className="w-full max-w-screen">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HomeSection;
