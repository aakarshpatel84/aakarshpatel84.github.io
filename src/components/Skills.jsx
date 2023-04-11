import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongodb.png";
import Typescript from "../assets/typescript.png";
import Redux from "../assets/redux.png";
import Bootstrap from "../assets/bootstrap.png";
import Postman from "../assets/postman.png";
import Netlify from "../assets/netlify.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div style={{ marginTop: "70px" }}>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-5 text-center py-8">
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Redux} alt="HTML icon" />
            <p className="my-4">Redux</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>

          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>

          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="HTML icon" />
            <p className="my-4">Typescript</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div style={{ marginTop: "70px" }}>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Tools
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-5 text-center py-8">
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4 text-center">Bootstrap</p>
          </div>

          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4 text-center">FireBase</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Postman} alt="HTML icon" />
            <p className="my-4 text-center">Postman</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Netlify} alt="HTML icon" />
            <p className="my-4 text-center">Netlify</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
