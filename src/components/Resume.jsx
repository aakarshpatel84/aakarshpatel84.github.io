import React from "react";
import resume from "./Aakarsh-Patel-Resume.pdf";
// import {Aakarsh-Patel-Resume} from "./"
function Resume() {
  return (
    <div>
      {/* <a href="Aakarsh-Patel-Resume.pdf" attributes-list download> */}
      <a
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1WIQ8OtR8-KIBaeXX84Xa6I8MjvmlsWh6/view?usp=sharing",
            "_blank"
          )
        }
        href={resume}
        attributes-list
        download
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        Resume{" "}
      </a>
    </div>
  );
}

export default Resume;
