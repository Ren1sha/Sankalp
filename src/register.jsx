import React from "react";

const Register = () => {
  return (
    <div className="register-page">
      <h2>Registration Form</h2>
      <form className="customform">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Your Phone" />
        <input type="text" placeholder="Your College" />
        <select>
          <option value="python">Python Challenge</option>
          <option value="webdev">Web Development</option>
          <option value="datasci">Data Science</option>
          <option value="algo">Algorithm Contest</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;