import React from "react";
import { BsLinkedin, BsTelephone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./contect.css";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-auto bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/00694daa-2e41-4d72-bc09-211946f9e6db"
        className="flex flex-col max-w-[600px] w-full mt-8"
      >
        <div>
          <div style={{ marginTop: "100px" }}>
            <p
              style={{ float: "left", marginTop: "100px" }}
              className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300"
            >
              Contact
            </p>
          </div>
        </div>
        {/* <div style={{ marginTop: "30px" }}> */}
        <input
          className="bg-[#ccd6f6] p-2 mt-5"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        {/* </div> */}
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send Feedback
        </button>
        <div
          className="contect"
          // class="flex flex-row justify-center items-center"
          // style={{ backgroundColor: "#0a192f", width: "100%" }}
          // className=" bg-[#0a192f] flex justify-center items-center p-4"
        >
          <div>
            <a
              href="mailto:aakarshpatel84@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineMailOutline color="white" size={36} />
            </a>
          </div>
          <div>
            {" "}
            <a
              href="https://github.com/aakarshpatel84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="white" size={30} />
            </a>
          </div>
          <div>
            {" "}
            <a href="tel:8770043650" target="_blank" rel="noopener noreferrer">
              <BsTelephone color="white" size={29} />
            </a>
          </div>
          <div>
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
      {/* <br />   */}
    </div>
  );
};

export default Contact;
