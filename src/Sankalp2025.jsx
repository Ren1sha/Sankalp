import React, { useRef } from "react";
import { Link } from "react-router-dom";



const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);
  

  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden relative">
      {/* Navigation Bar */}
      
      {/* Additional Info Section */}
      <div className="flex flex-col items-center justify-center px-6 mt-16">
        <img src="/components/header.png" alt="Sankalp 2025" className="w-60 mb-4 -mt-5" />
        
        <h1 className="text-4xl font-bold text-orange-500 text-center">
          Code. <span className="text-red-500">Compete.</span> <span className="text-pink-500">Conquer.</span>
          <span className="ml-2">🚀</span>
        </h1>
        
        <p className="text-center text-gray-300 mt-4 max-w-2xl">
          Club Excel brings tech and fun to Sankalp 2025! Join us for an electrifying experience of coding battles, tech challenges, and interactive events.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mt-10\\ w-full max-w-4xl -mb-20">
  <img src="/components/sankalplogo.png" alt="Logo 1" className="w-48" />  
  <img src="/components/club excel.png" alt="Logo 2" className="w-48" />
  <img src="/components/udbhav.png" alt="Logo 3" className="w-48" />
</div>
      </div>

      <header className="flex items-center justify-between p-4 absolute top-0 left-0 w-full">
      <img src="/components/excellogo.png" alt="Logo 2" className="w-24" />
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-start min-h-screen px-8 md:px-16">
        <h1 className="text-6xl font-extrabold">
          <span style={{ color: "#f88e43" }}>SANKALP</span> 2025
        </h1>

        <h2 className="text-8xl font-extrabold mt-4">
          BIGGEST <span style={{ color: "#F88E43" }}>EVENT</span>
        </h2>

        <button 
          className="mt-6 border border-orange-500 text-orange-500 px-6 py-2 text-lg font-semibold"
          onClick={scrollToEvents}
        >
          INTERESTED ?
        </button>
      </section>

      {/* Event Highlight Image */}
      <section className="relative flex justify-center">
        <img src="/components/bgimage.png" alt="Event Highlight" className="w-full max-w-6xl" />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-5xl font-bold">CLUB <span className="text-white">EXCEL</span></h2>
          <p className="mt-2 max-w-md text-gray-300">
            Club Excel brings tech and fun to Sankalp 2025! Join us for an electrifying experience of coding battles, tech challenges, and interactive events.
          </p>
        </div>
      </section>

      <section ref={eventSectionRef} className="mt-20 px-11 text-center">
      

      {/* Our Events Section */}
        
        <h2 className="text-6xl mt-20 font-extrabold text-right font-[Anton]">OUR EVENTS</h2>
        <section className="flex justify-center gap-8 mt-16 px-8">
        <div className="bg-[#f88e43] text-white p-6 w-130">
          <h3 className="text-4xl font-black uppercase">
            CRUSADE <span className="bg-green-500 text-white px-2 py-1 rounded">CODE 3.0</span>
          </h3>

          <p className="mt-2">It's a coding competition. Get ready to unleash your coding skills at Code Crusade 3.0</p>
          <img src="/components/students.png" alt="Event 1" className="mt-4 w-full" />
          <p className="text-sm mt-2 font-extrabold text-white">
  <span className="text-lg text-yellow-400 tracking-widest">28 FEB 2025</span> &nbsp;
  <a href="/register" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-xl font-extrabold text-orange-500 underline hover:text-orange-400 transition duration-300">
    REGISTER
  </a>
</p>

        </div>

        <div className="bg-gray-200 text-black p-6 w-130">
          <h3 className="text-3xl font-bold">CTR + WIN SHOWDOWN</h3>
          <p className="mt-2">It's a coding competition. Get ready to unleash your coding skills at Code Crusade 3.0</p>
          <img src="/components/students.png" alt="Event 2" className="mt-4 w-full" />
          <p className="text-sm mt-2 font-extrabold text-black">
  <span className="text-lg text-blue-600 tracking-widest">1 MAR 2025</span> &nbsp;
  <a href="/register2" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-xl font-extrabold text-red-600 underline hover:text-red-500 transition duration-300">
    REGISTER
  </a>
</p>

        </div>
      </section>
        
      </section>

      {/* Event Highlight Image */}
      <section className="relative flex justify-center mt-12">
        <img src="/components/event.png" alt="Event Highlight" className="w-full max-w-6xl" />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-5xl font-bold">CODE CRUSADE</h2>
          <h3 className="text-4xl font-bold text-gray-500">CTR + WIN SHOWDOWN</h3>
        </div>
      </section>
    </div>
  );
};

export default Sankalp2025;
