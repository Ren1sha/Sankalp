import React from "react";
import { useState } from "react";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    rollNo: "",
    regName: "",
    hostelLocal: "",
    groupName: "",
  });
  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col items-center bg-black text-white px-6 py-10">
      {/* Header Image */}
      <div className="w-full flex justify-center">
        <img
          src="/components/Group 124.png"
          alt="Code Crusade 3.0"
          className="max-w-full md:w-2/3 lg:w-1/2 h-auto mx-auto"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-10 w-full">
        {/* Left Section - Event Info */}
        <div className="bg-[#693B14] text-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-bold text-orange-400">
            ctrl + win showdown
          </h2>
          <p className="mt-2 text-gray-300">
            1st game:- two pair game (eg. jenga, chess, ludo or other custom
            game of your choice)
            <br></br>
            2nd game:- quiz round (with buzzer) <br></br>
            3rd :- surprise round
          </p>
        </div>

        {/* Right Section - Registration Form */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <div>
                <label htmlFor="firstName" className="block font-semibold">
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  value={data.name}
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
                  placeholder="youremail@gmail.com"
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
                  onChange={(e) =>
                    setData({ ...data, rollNumber: e.target.value })
                  }
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
                  onChange={(e) =>
                    setData({ ...data, regNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="hostelLocal" className="block font-semibold">
                  Hostelite/Localite
                </label>
                <select
                  id="hostelLocal"
                  className="w-full p-3 border rounded-lg bg-gray-100"
                  onChange={(e) =>
                    setData({ ...data, hostelLocal: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="hostelite">Hostelite</option>
                  <option value="localite">Localite</option>
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
