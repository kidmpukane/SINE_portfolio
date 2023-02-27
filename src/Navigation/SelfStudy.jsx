import React from "react";
import constructionImage from "../assets/mathieu-stern-tv7GF92ZWvs-unsplash.jpg";

function SelfStudy() {
  return (
    <div className="self-study-container">
      <img
        className="construction-image"
        src={constructionImage}
        alt="construction-image"
      />
      <h1 className="con-self-study-heading-one inter-font-bold">
        PAGE IS UNDER
      </h1>
      <h1 className="con-self-study-heading-two inter-font-light">
        CONSTRUCTION
      </h1>
      <div className="con-self-study-button-container">
        <span className="con-self-study-button" />
        <span className="con-self-study-button" />
        <span className="con-self-study-button" />
        <span className="con-self-study-button" />
        <span className="con-self-study-button" />
      </div>
    </div>
  );
}

export default SelfStudy;
