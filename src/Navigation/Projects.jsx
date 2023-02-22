import { React, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      id: 1,
      headingOne: "PERSONAL",
      headingTwo: "PROJECTS",
      card_one: {
        projectImg: "../assets/HTML 5 Boilerplate - 8 November 2022.gif",
        headingOne: "HTML/CSS/ALGORITHM",
        headingTwo: "VANILLA-JAVASCRIPT",
      },
      card_two: {
        projectImg: "../assets/Select new_user t_change.gif",
        headingOne: "AUTHENTICATION SYSTEM",
        headingTwo: "REACT-NATIVE/DJANGO",
      },
      card_three: {
        projectImg: "../assets/VID-20230122-WA0000.gif",
        headingOne: "AUTHENTICATION SYSTEM",
        headingTwo: "REACT/NODE.JS/MONGODB",
      },
      card_four: {
        projectImg: "../assets/VID-20230122-WA0001.gif",
        headingOne: "FULL-STACK-MOBILE-APP",
        headingTwo: "REACT-NATIVE/DJANGO/MYSQL",
      },
      card_five: {
        projectImg:
          "../assets/localhost_6660_create-user - 8 November 2022.gif",
        headingOne: "FULL-STACK-MOBILE-APP",
        headingTwo: "REACT-NATIVE/DJANGO/MYSQL",
      },
    },
  ];

  return (
    <>
      {projects.map((item) => (
        <div className="project-container" key={item}>
          <Zoom>
            <div className="project-one">
              <h1 className="inter-font-bold project-heading-one">
                {item.headingOne}
              </h1>
              <h1 className="inter-font-light project-heading-two">
                {item.headingTwo}
              </h1>
            </div>
          </Zoom>
          <Zoom>
            <div className="project-two">
              <img
                className="large-project-image"
                src={require("../assets/HTML 5 Boilerplate - 8 November 2022.gif")}
                alt="my-gif-01"
              />
              <h1 className="large-project-text-two">
                {item.card_one.headingOne}
              </h1>
              <h1 className="large-project-text-one">
                {item.card_one.headingTwo}
              </h1>
            </div>
          </Zoom>
          <Zoom>
            <div className="project-three">
              <img
                className="small-project-image"
                src={require("../assets/Select new_user t_change.gif")}
                alt="my-gif-02"
              />
              <h1 className="small-project-text-two">
                {item.card_two.headingOne}
              </h1>
              <h1 className="small-project-text-one">
                {item.card_two.headingTwo}
              </h1>
            </div>
          </Zoom>
          <Zoom>
            <div className="project-four">
              <img
                className="small-project-image"
                src={require("../assets/localhost_6660_create-user - 8 November 2022.gif")}
                alt="my-gif-03"
              />
              <h1 className="small-project-text-two">
                {item.card_three.headingOne}
              </h1>
              <h1 className="small-project-text-one">
                {item.card_three.headingTwo}
              </h1>
            </div>
          </Zoom>
          <div
            data-aos="zoom-in"
            data-aos-duration="4000"
            className="project-five"
          >
            <img
              className="small-project-image-for-mobile"
              src={require("../assets/VID-20230122-WA0000.gif")}
              alt="my-gif-04"
            />
            <h1 className="small-project-text-two-mobile">
              {item.card_four.headingOne}
            </h1>
            <h1 className="small-project-text-one-mobile">
              {item.card_four.headingTwo}
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="4000"
            className="project-six"
          >
            <img
              className="small-project-image-for-mobile"
              src={require("../assets/VID-20230122-WA0001.gif")}
              alt="my-gif-05"
            />
            <h1 className="small-project-text-two-mobile">
              {item.card_five.headingOne}
            </h1>
            <h1 className="small-project-text-one-mobile">
              {item.card_five.headingTwo}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
