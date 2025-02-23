import React from "react";
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    rollNumber: "",
    regNumber: "",
    hostelLocal: "",
    groupName: "",
  });
  const roll = data.rolln;
  const sub = roll.substring(0,4);
  let gn;
  console.log(sub);
  if (sub=="2024") {
    gn = "Group1"
  }
  else if (sub == "2023"){
    gn = "Group2"
  }
  else if(sub == "2022") {
    gn="Group3"
  }

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Student Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@nist.edu"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="rollNumber" className="block font-semibold">
                  Roll Number
                </label>
                <input
                  id="rollNumber"
                  type="text"
                  placeholder="Enter Roll Number"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, rollNumber: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="regNumber" className="block font-semibold">
                  Registration Number
                </label>
                <input
                  id="regNumber"
                  type="text"
                  placeholder="Enter Registration Number"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, regNumber: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="hostelLocal" className="block font-semibold">
                  Hostelite/Localite
                </label>
                <select
                  id="hostelLocal"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, hostelLocal: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="hostelite">Hostelite</option>
                  <option value="localite">Localite</option>
                </select>
              </div>
              {/* Group */}
              <div>
                <label htmlFor="groupName" className="block font-semibold">
                  Group Name
                </label>
                <select
                  id="groupName"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) => setData({ ...data, groupName: {gn} })}
                >
                  <option value="">Select</option>
                  <option value="">Group 1</option>
                  <option value="">Group 2</option>
                  <option value="">Group 3</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
