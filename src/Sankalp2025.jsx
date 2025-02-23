import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);

  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden relative">




      

      <div className="flex flex-col items-center justify-center px-4 mt-16 md:px-6">
      <motion.img 
          src="/components/header.png" 
          alt="Sankalp 2025" 
          className="w-48 mb-10 -mt-5 md:w-80"
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
            Code. <span className="text-red-500">Compete.</span> <span className="text-pink-500">Conquer.</span>
            <span className="ml-2">🚀</span>
          </motion.h1>

          <motion.p 
            className="text-gray-300 mt-4 max-w-2xl text-sm md:text-base mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Club Excel brings tech and fun to Sankalp 2025! Join us for an electrifying experience of coding battles, tech challenges, and interactive events.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full max-w-4xl -mb-20 md:gap-8 px-4 md:px-0">
  <motion.div 
    className="w-1/3 px-2 md:w-auto"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <img src="/components/sankalplogo.png" alt="Logo 1" className="w-full md:w-48" />
  </motion.div>

  <motion.div 
    className="w-1/3 px-2 md:w-auto"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <img src="/components/clublogo.gif" alt="Logo 2" className="w-full md:w-40 mt-5" />
  </motion.div>

  <motion.div 
    className="w-1/3 px-2 md:w-auto"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <img src="/components/udbhav.png" alt="Logo 3" className="w-full md:w-48" />
  </motion.div>
</div>

      </div>

      <section className="flex flex-col justify-center items-start min-h-screen px-4 md:px-8">
      <motion.h1 
          className="text-5xl font-extrabold md:text-6xl mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "#f88e43" }}>SANKALP</span> 2025
        </motion.h1>

        <motion.h2 
          className="text-6xl font-extrabold mt-4 md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          BIGGEST <span style={{ color: "#F88E43" }}>EVENT</span>
        </motion.h2>


        <motion.button
          className="mt-6 border border-orange-500 text-orange-500 px-4 py-2 text-base font-semibold md:px-6 md:py-2 md:text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToEvents}
        >
          INTERESTED ?
        </motion.button>
      </section>

      <section className="relative flex justify-center mt-12 w-full overflow-hidden">


        <img src="/components/bgimage.png" alt="Event Highlight" className="w-full max-w-6xl" />
        <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            CLUB <span className="text-white">EXCEL</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-gray-300 md:text-base">
            Club Excel brings tech and fun to Sankalp 2025! Join us for an electrifying experience of coding battles, tech challenges, and interactive events.
          </p>
        </div>
      </section>

      <section ref={eventSectionRef} className="mt-12 px-6 text-center md:mt-20 md:px-11">
      <motion.h2 
  className="text-4xl mt-12 font-extrabold text-right font-[Anton] md:mt-20 md:text-6xl"
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
                CRUSADE <span className="bg-green-500 text-white px-2 py-1 rounded">CODE 3.0</span>
              </h3>

              <p className="mt-2 text-sm md:text-base">It's a coding competition. Get ready to unleash your coding skills at Code Crusade 3.0</p>
              <img src="/components/students.png" alt="Event 1" className="mt-4 w-full" />
              <p className="text-sm mt-2 font-extrabold text-white">
                <span className="text-lg text-gray-700 shadow-md bg-gradient-to-r from-gray-500 to-gray-800 px-2 py-1 rounded-md">28 MAR 2025</span> &nbsp;
                <span className="text-xl font-extrabold text-orange-700 underline hover:text-orange-400 transition duration-300">
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
      CTR + WIN SHOWDOWN
    </h3>
    <p className="mt-2 text-sm md:text-base">
      It's a coding competition. Get ready to unleash your coding skills at Code Crusade 3.0
    </p>
    <img src="/components/newstud.jpg" alt="Event 2" className="mt-4 w-full" />
    <p className="text-sm mt-2 font-extrabold text-black">
      <span className="text-lg text-blue-600 tracking-widest">1 MAR 2025</span> &nbsp;
      <span className="text-xl font-extrabold text-red-600 underline hover:text-red-500 transition duration-300">
        REGISTER
      </span>
    </p>
  </div>
</a>

        </section>
      </section>

      <section className="relative flex justify-center mt-12">
        <img src="/components/event.png" alt="Event Highlight" className="w-full max-w-6xl" />
        <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
          <h2 className="text-3xl font-bold md:text-5xl">CODE CRUSADE</h2>
          <h3 className="text-2xl font-bold text-gray-500 md:text-4xl">CTR + WIN SHOWDOWN</h3>
        </div>
      </section>
    </div>
  );
};

export default Sankalp2025;
