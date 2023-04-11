import React from "react";
// import resume from "./fp04_452-Aakarsh-Patel-Resume.pdf";
// import {Aakarsh-Patel-Resume} from "./"
function Resume() {
  return (
    <div>
      <a
        style={{ fontSize: "15px" }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1WIQ8OtR8-KIBaeXX84Xa6I8MjvmlsWh6/view?usp=sharing",
            "_blank"
          )
        }
        href="fp04_452-Aakarsh-Patel-Resume.pdf"
        attributes-list
        download="fp04_452-Aakarsh-Patel-Resume.pdf"
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
