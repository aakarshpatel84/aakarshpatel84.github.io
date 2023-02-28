import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div style={{ marginTop: "200px" }}>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          {/* <p className="py-6">// Check out some of my recent work</p> */}
        </div>

        {/* container for projects */}
        <div
          className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          style={{ marginTop: "50px" }}
        >
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              className="w-full bg-black"
              key={index}
              // style={{ backgroundImage: `url(${item.image})` }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  textAlign: "center",
                  height: "260px",
                  display: "block",
                  margin: "auto",
                }}
              />
              <div>
                <p style={{ textAlign: "center", margin: "10px" }}>
                  {item.name}
                </p>
              </div>
              <div>
                <button
                  style={{
                    paddimg: "2",
                    marginTop: "5",
                    backgroundColor: "grey",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                    margin: "auto",
                  }}
                >
                  <a
                    className="m-5"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gihub link
                  </a>
                </button>
                <span>
                  <button
                    style={{
                      paddimg: "2",
                      marginTop: "5",
                      fontWeight: "bold",
                      backgroundColor: "grey",
                      color: "white",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <a
                      className=" p-10"
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </button>
                </span>
              </div>
              <div>
                <p style={{ textAlign: "center", padding: "5px" }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
