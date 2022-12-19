import React from "react";
import { BsLinkedin, BsTelephone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          <a href="mailto:aakarshpatel84@gmail.com">Send Feedback</a>
        </button>
        <div class="flex flex-row justify-center items-center p-4">
          <h1 className="p-5">
            <a
              href="mailto:aakarshpatel84@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineMailOutline color="white" size={36} />
            </a>
          </h1>
          <div className="p-5">
            {" "}
            <a
              href="https://github.com/aakarshpatel84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="white" size={30} />
            </a>
          </div>
          <div className="p-5">
            {" "}
            <a href="tel:8770043650" target="_blank" rel="noopener noreferrer">
              <BsTelephone color="white" size={29} />
            </a>
          </div>
          <div className="p-5">
            {" "}
            <a
              href="https://www.linkedin.com/in/aakarsh-patel-0b1422217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin color="white" size={29} />
            </a>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};

export default Contact;
