import React from "react";
import { data } from "../data/data.js";
import "./Work.css";
// import HTML from "../assets/html.png";
// import CSS from "../assets/css.png";
// import JavaScript from "../assets/javascript.png";
// import ReactImg from "../assets/react.png";
// import Node from "../assets/node.png";
// import FireBase from "../assets/firebase.png";
// import GitHub from "../assets/github.png";
// import Tailwind from "../assets/tailwind.png";
// import Mongo from "../assets/mongo.png";
// import Typescript from "../assets/typescript.png";
// import Redux from "../assets/redux.png";
// import Bootstrap from "../assets/bootstrap.png";
const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto">
        <div>
          <div style={{ marginTop: "50px" }}>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mt-10">
              Projects
            </p>
          </div>
          {/* <p className="py-6">// Check out some of my recent work</p> */}
        </div>

        {/* container for projects */}
        <div
          className="w-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4"
          style={{ marginTop: "50px" }}
        >
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              // className="w-full bg-black"
              className="gridProject"
              key={index}
              // style={{ backgroundImage: `url(${item.image})` }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  textAlign: "center",
                  height: "200px",
                  width: "100%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <div>
                <p style={{ textAlign: "center", margin: "10px" }}>
                  {item.name}
                </p>
              </div>
              <div className="btn">
                <div>
                  <button
                  // style={{
                  //   paddimg: "2",
                  //   marginTop: "5",
                  //   backgroundColor: "grey",
                  //   borderRadius: "5px",
                  //   color: "white",
                  //   fontWeight: "bold",
                  //   marginLeft: "10px",
                  // }}
                  >
                    <a
                      className="m-5"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p style={{ width: "50px", height: "-5px" }}>Github</p>
                    </a>
                  </button>
                </div>
                <div>
                  <button
                  // style={{
                  //   paddimg: "2",
                  //   marginTop: "5",
                  //   fontWeight: "bold",
                  //   backgroundColor: "grey",
                  //   color: "white",
                  //   borderRadius: "5px",
                  //   marginLeft: "10px",
                  // }}
                  >
                    <a
                      className=" p-10"
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p style={{ width: "50px" }}>Live</p>
                    </a>
                  </button>
                </div>
              </div>
              <div>
                <p style={{ textAlign: "center", padding: "5px" }}>
                  {item.detail}
                </p>
              </div>
              <div className="flexTech">
                {item.stack.map((el) => {
                  return (
                    <div>
                      <img src={el} alt="" width={"20px"} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
