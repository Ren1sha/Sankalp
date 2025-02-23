import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);
  const eventSectionRef1 = useRef(null);
  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEvents1 = () => {
    eventSectionRef1.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden relative ">
      <div
        className="flex flex-col items-center justify-center px-4 mt-auto mb-auto md:px-6 h-screen "
        ref={eventSectionRef1}
      >
        <motion.img
          src="/components/header.png"
          alt="Sankalp 2025"
          className="w-96 mb-10 -mt-5 md:w-80  ml-auto mr-auto max-sm:mt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="text-center">
          <motion.h1
            className="text-3xl font-bold text-orange-500 md:text-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Code. <span className="text-red-500">Compete.</span>{" "}
            <span className="text-pink-500">Conquer.</span>
            <span className="ml-2">🚀</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 mt-4 max-w-2xl text-sm md:text-base mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Club Excel brings tech and fun to Sankalp 2025! Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full max-w-4xl -mb-20 md:gap-8 px-4 md:px-0 max-sm:flex-col max-sm:items-center max-sm:mt-2">
          <motion.div
            className="w-1/3 px-2 md:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/components/sankalplogo.png"
              alt="Logo 1"
              className=" md:w-48"
              style={{
                width: "15rem",
              }}
            />
          </motion.div>

          <motion.div
            className="w-1/3 px-2 md:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/components/clublogo.gif"
              alt="Logo 2"
              className="w-full md:w-40 mt-5"
              style={{
                width: "14rem",
              }}
            />
          </motion.div>

          <motion.div
            className="w-1/3 px-2 md:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/components/udbhav.png"
              alt="Logo 3"
              className="w-full md:w-48"
              style={{
                width: "15rem",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bigest event section  */}
      <section className="min-h-screen px-4 md:px-8">
        <div className="flex flex-row justify-end mr-10 max-sm:mt-60">
          <div>
            <img
              src="/components/udbhav.png"
              alt="Event Highlight"
              className="w-36 max-w-6xl"
            />
          </div>
          <div className="w-28 text-[10px] mt-6  ">
            Get ready for an electrifying blend of knowledge, culture, and
            entertainment – SANKALP 2025 is here to ignite your passion!..
          </div>
        </div>
        <div className="flex flex-row  gap-40 items-center max-sm:flex-col max-sm:gap-1">
          <motion.h1
            className="text-5xl font-extrabold md:text-6xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: "#f88e43" }}>SANKALP</span> 2025
          </motion.h1>
          <motion.button
            className="border my-4 border-orange-500 text-orange-500 px-6 py-1 text-base font-semibold md:px-6 md:py-2 md:text-lg mt-10 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToEvents}
          >
            INTERESTED ?
          </motion.button>
        </div>

        <motion.h2
          className="text-6xl font-bold md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full flex flex-row gap-10 max-sm:flex-col">
            <span className="lg:text-[200px]">BIGGEST</span>
            <span style={{ color: "#F88E43" }} className="lg:text-[200px]">
              EVENT
            </span>{" "}
          </div>
        </motion.h2>

        <div className="relative flex justify-center mt-12 w-full overflow-hidden">
        <img
          src="/components/bgimage.png"
          alt="Event Highlight"
          className="w-full max-w-6xl"
        />
        <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
          <motion.div
            className="text-left font-bold leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-white text-3xl md:text-4xl tracking-wide">
              CLUB
            </span>
            <span
              className="block text-white text-9xl md:text-7xl font-black font-bold max-sm:text-6xl"
              style={{ letterSpacing: "-1px" }}
            >
              EXCEL
            </span>
          </motion.div>

          <p className="mt-2 max-w-md text-sm text-gray-300 md:text-base">
            Club Excel brings tech and fun to Sankalp 2025! Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </p>
        </div>
        </div>
      </section>


      {/* our event section */}
      <section
        ref={eventSectionRef}
        className="mt-12 px-6 text-center md:mt-20 md:px-11"
      >
        <motion.h2
          className="text-9xl mt-12 font-extrabold text-right font-[Anton] md:mt-20 md:text-6xl max-sm:text-5xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          OUR EVENTS
        </motion.h2>
        <section className="flex flex-col items-center gap-8 mt-10 px-4 md:flex-row md:justify-center md:px-8">
          <a
            href="/register"
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
                <span className="text-lg text-black-400 tracking-widest">
                  28 FEB 2025
                </span>{" "}
                &nbsp;
                <span className="text-xl font-extrabold text-orange-700 underline hover:text-orange-900 transition duration-300">
                  REGISTER
                </span>
              </p>
            </div>
          </a>

          <a
            href="/register2"
            rel="noopener noreferrer"
            className="w-full md:w-130 transition duration-300 hover:scale-105"
          >
            <div className="bg-gray-200 text-black p-4">
              <h3 className="text-2xl font-bold text-gray-500 md:text-4xl p-2">
                CTRL + WIN SHOWDOWN
              </h3>
              <p className="mt-2 text-sm md:text-base">
                It's a coding competition. Get ready to unleash your coding
                skills at Code Crusade 3.0
              </p>
              <img
                src="/components/newstud.jpg"
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

      <section className="flex flex-col justify-center items-center p-2 mt-10">
        <div>
          <img
            src="/components/image.png"
            alt="Event Highlight"
            className="h-[349px] w-[1550px] rounded aspect-3/2 px-8 py-4"
          />
        </div>
        <div className="flex flex-row  justify-between items-center gap-[50rem] p-4 max-sm:flex-col max-sm:gap-0 max-md:gap-0 max-md:flex-col max-lg:flex-col max-lg:gap-0">
          <motion.button
            className="border my-4 border-orange-500 text-orange-500 px-4 py-2 text-base font-semibold md:px-6 md:py-2 md:text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToEvents1}
          >
            INTERESTED ?
          </motion.button>
          <div className=" text-white md:bottom-10 md:left-10 flex flex-col items-end ml-auto mr-8">
            <h2 className="text-3xl font-bold md:text-5xl">CODE CRUSADE</h2>
            <h3 className="text-2xl font-bold text-gray-500 md:text-4xl">
              CTRL + WIN SHOWDOWN
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sankalp2025;
