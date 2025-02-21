import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);

  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden relative">
      {/* <header className="flex items-center justify-between p-4 absolute top-0 left-0 w-full">
        <div className="flex-grow">
          <img src="/components/excellogo.png" alt="Logo 2" className="w-24" />
        </div>
      </header> */}

      <div className="flex flex-col items-center justify-center px-4 mt-16 md:px-6 h-screen">
        <img
          src="/components/header.png"
          alt="Sankalp 2025"
          className="w-48 mb-4 -mt-5 md:w-60"
        />

        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-500 md:text-4xl leading-tight">
            Code. <span className="text-red-500">Compete.</span>{" "}
            <span className="text-pink-500">Conquer.</span>
            <span className="ml-2">🚀</span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            Club Excel brings tech and fun to Sankalp 2025! Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full max-w-4xl -mb-20 md:gap-8 px-4 md:px-0">
          <div className="w-1/3 px-2 md:w-auto">
            <img
              src="/components/sankalplogo.png"
              alt="Logo 1"
              className="w-full md:w-48"
            />
          </div>
          <div className="w-1/3 px-2 md:w-auto">
            <img
              src="/components/club excel.png"
              alt="Logo 2"
              className="w-full md:w-48"
            />
          </div>
          <div className="w-1/3 px-2 md:w-auto">
            <img
              src="/components/udbhav.png"
              alt="Logo 3"
              className="w-full md:w-48"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col justify-center items-start min-h-screen px-4 md:px-8">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          <span style={{ color: "#f88e43" }}>SANKALP</span> 2025
        </h1>

        <h2 className="text-6xl font-extrabold mt-4 md:text-8xl">
          BIGGEST <span style={{ color: "#F88E43" }}>EVENT</span>
        </h2>

        <button
          className="mt-6 border border-orange-500 text-orange-500 px-4 py-2 text-base font-semibold md:px-6 md:py-2 md:text-lg"
          onClick={scrollToEvents}
        >
          INTERESTED ?
        </button>
      </section>

      <section className="relative flex justify-center">
        <img
          src="/components/bgimage.png"
          alt="Event Highlight"
          className="w-full max-w-6xl"
        />
        <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            CLUB <span className="text-white">EXCEL</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-gray-300 md:text-base">
            Club Excel brings tech and fun to Sankalp 2025! Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </p>
        </div>
      </section>

      <section
        ref={eventSectionRef}
        className="mt-12 px-6 text-center md:mt-20 md:px-11"
      >
        <h2 className="text-4xl mt-12 font-extrabold text-right font-[Anton] md:mt-20 md:text-6xl">
          OUR EVENTS
        </h2>
        <section className="flex flex-col items-center gap-8 mt-16 px-4 md:flex-row md:justify-center md:px-8">
          <a
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-130 transition duration-300 hover:scale-105"
          >
            <div className="bg-[#f88e43] text-white p-4">
              <h3 className="text-3xl font-black uppercase md:text-4xl">
                CRUSADE{" "}
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  CODE 3.0
                </span>
              </h3>

              <p className="mt-2 text-sm md:text-base">
                It's a coding competition. Get ready to unleash your coding
                skills at Code Crusade 3.0
              </p>
              <img
                src="/components/students.png"
                alt="Event 1"
                className="mt-4 w-full"
              />
              <p className="text-sm mt-2 font-extrabold text-white">
                <span className="text-lg text-yellow-400 tracking-widest">
                  28 FEB 2025
                </span>{" "}
                &nbsp;
                <span className="text-xl font-extrabold text-orange-700 underline hover:text-orange-400 transition duration-300">
                  REGISTER
                </span>
              </p>
            </div>
          </a>

          <a
            href="/register2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-130 transition duration-300 hover:scale-105"
          >
            <div className="bg-gray-200 text-black p-4">
              <h3 className="text-2xl font-bold md:text-3xl">
                CTR + WIN SHOWDOWN
              </h3>
              <p className="mt-2 text-sm md:text-base">
                It's a coding competition. Get ready to unleash your coding
                skills at Code Crusade 3.0
              </p>
              <img
                src="/components/students.png"
                alt="Event 2"
                className="mt-4 w-full"
              />
              <p className="text-sm mt-2 font-extrabold text-black">
                <span className="text-lg text-blue-600 tracking-widest">
                  1 MAR 2025
                </span>{" "}
                &nbsp;
                <span className="text-xl font-extrabold text-red-600 underline hover:text-red-500 transition duration-300">
                  REGISTER
                </span>
              </p>
            </div>
          </a>
        </section>
      </section>

      <section className="relative flex justify-center mt-12">
        <img
          src="/components/event.png"
          alt="Event Highlight"
          className="w-full max-w-6xl"
        />
        <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
          <h2 className="text-3xl font-bold md:text-5xl">CODE CRUSADE</h2>
          <h3 className="text-2xl font-bold text-gray-500 md:text-4xl">
            CTR + WIN SHOWDOWN
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Sankalp2025;
