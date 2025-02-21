import React, { useRef } from "react";
import sankallogo from "./assets/Sankalp Logo-text 1.png";
import sankallogo1 from "./assets/Sankalp Logo - Full 1.png";
import clublogo from "./assets/clublogo.gif";
import udbhav from "./assets/udv wo glow 1.png";
import bigevent from "./assets/sankalp111.png";
import student from "./assets/image.png";
import eventnight from "./assets/sankalp222.png"
const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);

  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden relative">
      <div className="flex flex-col items-center justify-center px-4 mt-auto mb-auto md:px-6 h-screen ml-auto mr-auto relative bottom-16">
        {/* Main Logo */}
        <img
          src={sankallogo}
          alt="Sankalp 2025"
          className="mb-4 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[500px] object-contain"
        />

        {/* Text Section */}
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-orange-500 md:text-4xl leading-tight">
            Code. <span className="text-red-500">Compete.</span>{" "}
            <span className="text-pink-500">Conquer.</span>
            <span className="ml-2">🚀</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-justify">
            Club Excel brings tech and fun to Sankalp 2025! Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </p>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-10 w-full max-w-4xl -mb-20">
          {/* Logo 1 */}
          <div className="w-auto flex justify-center">
            <img
              src={sankallogo1}
              alt="Logo 1"
              className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[220px] object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="w-auto flex justify-center">
            <img
              src={clublogo}
              alt="Logo 2"
              className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[220px] object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="w-auto flex justify-center">
            <img
              src={udbhav}
              alt="Logo 3"
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[220px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-8 lg:flex-col xl:flex-col h-screen">
        <div className="flex flex-col items-center md:w-1/2 text-left gap-5 py-8 md:py-0 relative right-[20%]">
          <div className="flex flex-row justify-between md:flex-row w-full md:items-center gap-96 relative left-[45%] bottom-[10%]">
            <div className="relative right-[50%]">
              <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
                <span style={{ color: "#f88e43" }}>SANKALP</span> 2025
              </h1>
              <button
                className="mt-4 md:mt-0 border border-orange-500 text-orange-500 px-4 py-2 text-base font-semibold md:px-6 md:py-2 md:text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 relative left-[60%] "
                onClick={scrollToEvents}
              >
                INTERESTED ?
              </button>
            </div>
            <div className="flex flex-row items-center text-center ml-auto gap-4">
              <img
                src={udbhav}
                alt="Sankalp 2025"
                className="max-w-lg h-28 md:h-44 lg:h-56 xl:h-56 object-contain"
              />
              <p
                className="ml-4 text-justify md:text-base lg:text-lg xl:text-xl"
                style={{ fontSize: "10px", width: "160px" }}
              >
                Get ready for an electrifying blend of knowledge, culture, and
                entertainment – SANKALP 2025 is here to ignite your passion!..
              </p>
            </div>
          </div>
        </div>
        <div className="mr-auto mb-9 flex w-full justify-between">
          <h2 className="text-5xl font-extrabold mt-6 md:text-7xl lg:text-8xl xl:text-9xl">
            BIGGEST
            <span
              className="text-5xl font-abold md:text-7xl lg:text-8xl xl:text-9xl"
              style={{ color: "#F88E43", fontSize: "100px" }}
            >
              EVENT
            </span>
          </h2>
        </div>

        <div className="relative flex justify-center w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src={bigevent}
            alt="Event Highlight"
            className="object-contain"
            style={{
              width: "100%", // Responsive width
              maxWidth: "600px", // Limits max size
              minWidth: "250px", // Prevents it from being too small
            }}
          />
          <div className="absolute bottom-4 left-4 ml-10 text-white md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 xl:bottom-16 xl:left-16">
            <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              CLUB <span className="text-white">EXCEL</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-300 md:text-base lg:text-lg xl:text-xl">
              Club Excel brings tech and fun to Sankalp 2025! Join us for an
              electrifying experience of coding battles, tech challenges, and
              interactive events.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen md:mt-5 px-4">
        <h2 className="text-5xl mt-12 font-extrabold text-center font-[Anton] md:mt-20 md:text-6xl">
          OUR EVENTS
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-16 md:flex-nowrap md:justify-center">
          {/* Event 1 - Code Crusade 3.0 */}
          <div className="bg-[#f88e43] text-white p-4 rounded-lg shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-[45%] w-full">
            <h3 className="text-3xl font-black uppercase md:text-4xl">
              CRUSADE{" "}
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                CODE 3.0
              </span>
            </h3>
            <p className="mt-2 text-sm md:text-base">
              Get ready to unleash your coding skills at Code Crusade 3.0!
            </p>
            <img
              src={student}
              alt="Code Crusade Event"
              className="mt-4 w-full h-auto max-w-[450px] rounded"
            />
            <p className="text-sm mt-2 font-extrabold">
              <span className="text-lg text-yellow-400 tracking-widest">
                28 FEB 2025
              </span>{" "}
              &nbsp;
              <span className="text-xl font-extrabold text-orange-700 underline hover:text-orange-400 transition duration-300"
           
              >
                REGISTER
              </span>
            </p>
          </div>

          {/* Event 2 - CTR + WIN SHOWDOWN */}
          <div className="bg-gray-200 text-black p-4 rounded-lg shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-[45%] w-full">
            <h3 className="text-2xl font-bold md:text-3xl">
              CTR + WIN SHOWDOWN
            </h3>
            <p className="mt-2 text-sm md:text-base">
              Compete and showcase your skills in the ultimate coding showdown!
            </p>
            <img
              src={student}
              alt="CTR + WIN Event"
              className="mt-4 w-full h-auto max-w-[450px] rounded"
            />
            <p className="text-sm mt-2 font-extrabold">
              <span className="text-lg text-blue-600 tracking-widest">
                1 MAR 2025
              </span>{" "}
              &nbsp;
              <span className="text-xl font-extrabold text-red-600 underline hover:text-red-500 transition duration-300">
                REGISTER
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center mt-12 h-screen flex-col items-center">
        <div className=" mr-auto
         ">
          <button
            className="mt-4 md:mt-0 border border-orange-500 text-orange-500 px-4 py-2 text-base font-semibold md:px-6 md:py-2 md:text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 relative left-[60%] "
            onClick={scrollToEvents}
          >
            INTERESTED ?
          </button>
        </div>
        <div className="mt-14">
          <img
            src={eventnight}
            alt="Event Highlight"
            className=" max-w-6xl rounded-2xl "
            style={{
              width: "100vw",
              height: "50%",
            }}
          />
        </div>
        <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            CODE CRUSADE <br />
            code 3.0
          </h2>
          <h3 className="text-2xl font-bold text-gray-500 md:text-4xl">
            CTR + WIN SHOWDOWN
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sankalp2025;
