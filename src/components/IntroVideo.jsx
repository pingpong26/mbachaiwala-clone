import video from "../assets/MBA Chai Wala.mp4";
import React from "react";

const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;
