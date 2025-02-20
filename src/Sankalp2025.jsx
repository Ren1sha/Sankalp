import React from "react";

const Sankalp2025 = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      <img src="/components/header.png" alt="Sankalp 2025" className="w-48 mb-6" />
      
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        Code. <span className="text-red-500">Compete.</span> <span className="text-pink-500">Conquer.</span>
        <span className="ml-2">🚀</span>
      </h1>
      
      <p className="text-center text-gray-300 mt-4 max-w-2xl">
        Club Excel brings tech and fun to Sankalp 2025! Join us for an electrifying experience of coding battles, tech challenges, and interactive events.
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 mt-10 w-full max-w-4xl">
        <img src="/components/sankalplogo.png" alt="Logo 1" className="w-24" />
        <img src="/components/udbhav.png" alt="Logo 2" className="w-24" />
        <img src="/components/sankalplogo.png" alt="Logo 3" className="w-24" />
      </div>
    </div>
  );
};

export default Sankalp2025;
