import React from "react";
import resume from "./Aakarsh-Patel-Resume.pdf";
// import {Aakarsh-Patel-Resume} from "./"
function Resume() {
  return (
    <div>
      {/* <a href="Aakarsh-Patel-Resume.pdf" attributes-list download> */}
      <a href={resume} attributes-list download>
        {" "}
        Resume{" "}
      </a>
    </div>
  );
}

export default Resume;
