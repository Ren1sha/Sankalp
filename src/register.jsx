import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col items-center bg-black text-white px-6 py-10">
        


      {/* Header Image */}
      <div className="w-full flex justify-center">
        <img 
          src="/components/Group 16.png" 
          alt="Code Crusade 3.0" 
          className="max-w-full md:w-2/3 lg:w-1/2 h-auto mx-auto"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-10 w-full">
        {/* Left Section - Event Info */}
        <div className="bg-[#693B14] text-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-bold text-orange-400">
            Code Crusade is a coding competition.
          </h2>
          <p className="mt-2 text-gray-300">
            Get ready to unleash your coding skills at Code Crusade 3.0! Club
            Excel brings tech and fun to Sankalp 2025. Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </p>
        </div>

        {/* Right Section - Registration Form */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold">Student Email</label>
              <input
                type="email"
                placeholder="youremail@nist.edu"
                className="w-full p-2 border rounded-lg bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold">Roll Number</label>
              <input
                type="text"
                placeholder="Enter Roll Number"
                className="w-full p-2 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
                <label htmlFor="phone" className="block font-semibold">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
