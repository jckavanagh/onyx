import React from "react";
import Lottie from "react-lottie";
import lottie from "../animations/lottie";
import "../styles/Dove.css";

const Dove = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={75} width={75} />;
    </div>
  );
};

export default Dove;
