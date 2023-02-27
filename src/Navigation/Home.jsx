import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="heading-container">
      <div className="slideInLeft">
        <h1
          onClick={() => {
            navigate("/about-me");
          }}
          className="inter-font-bold home-heading1"
        >
          ABOUT ME!
        </h1>
      </div>
      <div className="slideInRight">
        <h1
          onClick={() => {
            navigate("/projects");
          }}
          className="inter-font-light home-heading2"
        >
          MY PROJECTS
        </h1>
      </div>
    </div>
  );
}

export default Home;
