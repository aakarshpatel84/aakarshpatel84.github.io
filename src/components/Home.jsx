import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img
          src="https://avatars.githubusercontent.com/u/103603587?v=4"
          alt=""
          style={{
            borderRadius: "80%",
            width: "25%",
            marginLeft: "10%",
            marginTop: "50px",
          }}
        />
        <p className="text-pink-600 pb-1">Hi, my name is _ </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aakarsh Patel
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full stack web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a href="Aakarsh_Patel_Resume.pdf" download>
              Resume
            </a>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
