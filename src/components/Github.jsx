import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full   ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Github
          </p>
        </div>
        <div style={{ padding: "10px" }}>
          {/* <img
            src="https://rukminim1.flixcart.com/image/612/612/l3929ow0/book/j/c/r/something-i-m-waiting-to-tell-you-the-sequel-to-the-national-original-imagef8jtzwcdrtz.jpeg?q=70"
            alt=""
          /> */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=aakarshpatel84"
            alt=""
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=aakarshpatel84"
            alt=""
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aakarshpatel84&theme=radical"
            alt=""
          />
        </div>
        <div>
          <GitHubCalendar username="aakarshpatel84" />
        </div>
      </div>
    </div>
  );
};

export default Github;
