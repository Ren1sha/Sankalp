import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);

  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <header className="flex items-center justify-between p-4 absolute top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md">
        <div className="text-xl font-bold">Sankalp 2025</div>
        <nav className="hidden md:flex gap-4">
          <Link to="/register" className="hover:text-gray-400">Register</Link>
          <button onClick={scrollToEvents} className="hover:text-gray-400">Events</button>
        </nav>
        <div className="md:hidden flex items-center">
          <button className="text-white text-2xl">☰</button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Sankalp 2025</h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Join us for an amazing experience with events, workshops, and more.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </main>

      <section ref={eventSectionRef} className="py-12 px-4 bg-gray-900">
        <h2 className="text-3xl md:text-4xl text-center">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-gray-800 rounded-lg">Event 1</div>
          <div className="p-6 bg-gray-800 rounded-lg">Event 2</div>
          <div className="p-6 bg-gray-800 rounded-lg">Event 3</div>
        </div>
      </section>
    </div>
  );
};

export default Sankalp2025;