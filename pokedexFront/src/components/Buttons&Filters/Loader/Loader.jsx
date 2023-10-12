import spinner from "./pokeball.png";
import React from "react";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
