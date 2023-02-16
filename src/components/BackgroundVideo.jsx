import React, { useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      className="blur-sm"
      style={{
        position: "absolute",
        top:0,
        left:0,
        zIndex: "-1",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      src={require("/Users/darrellthomas/Downloads/bootcamp/AnitaMaidSite/src/images/Untitled00000273.mov")}
      
    />
  );
}
export default BackgroundVideo;