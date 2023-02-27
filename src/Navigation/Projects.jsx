import React from "react";
import Zoom from "react-reveal/Zoom";
import MovieIcon from "@mui/icons-material/Movie";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SearchIcon from "@mui/icons-material/Search";

function Projects() {
  return (
    <div>
      <div className="project-grid-container">
        <Zoom>
          <div className="current-project">
            <h1 className="inter-font-bold project-heading-one">CURRENT</h1>
            <h1 className="inter-font-light project-heading-two">PROJECT</h1>
          </div>
        </Zoom>
        <div className="project-description">
          <div className="description-top-section">
            <Zoom>
              <div className="description-names">
                <h2 className="my-name inter-font-bold">FULL-STACK</h2>
                <h2 className="my-surname inter-font-light">
                  REACT-NATIVE/DJANGO
                </h2>
              </div>
            </Zoom>

            <Zoom>
              <div className="button-and-date">
                <span className="date-style space-font">25/06/2023:</span>
                <button
                  onClick={() => {
                    window.open(
                      "https://twitter.com/SineZwa97?t=SWBvRj7-kVc-0-8jmzNzVA&s=08 "
                    );
                  }}
                  className="button-top-right space-font"
                >
                  Follow Progress
                </button>
              </div>
            </Zoom>
          </div>
          <Zoom>
            <div className="middle-portion-center">
              <h1 className="description-main-text space-font">mk-01</h1>
              <span className="project-description-body-text space-font">
                This is a little demonstration of a production app that I am
                currently working on. When finished it will be an e-com market
                place/social app where users can share and buy clothes.
              </span>
            </div>
          </Zoom>
        </div>
        <Zoom>
          <div className="mobile-view-one">
            <img
              className="mobile-view-project"
              src={require("../assets/VID-20230122-WA0000.gif")}
              alt="my-gif-04"
            />
          </div>
        </Zoom>
        <Zoom>
          <div className="mobile-view-two">
            <img
              className="mobile-view-project"
              src={require("../assets/VID-20230122-WA0001.gif")}
              alt="my-gif-05"
            />
          </div>
        </Zoom>
        <Zoom>
          <div className="project-view">
            <img
              className="small-project-image"
              src={require("../assets/Select new_user t_change.gif")}
              alt="my-gif-02"
            />
          </div>
        </Zoom>
        <Zoom>
          <div className="notice-text">
            <h1 className="notice-heading space-font">NOTE:</h1>
            <span className="notice-body space-font">
              The following is a display of the current unfinished state of the
              project. Stay tuned for the beta that will be releasing soon.
            </span>
          </div>
        </Zoom>
      </div>

      <div className="second-project-grid">
        <Zoom>
          <div className="completed-project">
            <h1 className="inter-font-bold project-heading-one">COMPLETED</h1>
            <h1 className="inter-font-light project-heading-two">PROJECTS</h1>
          </div>
        </Zoom>
        <Zoom>
          <div className="project-video-one">
            <img
              className="large-project-image"
              src={require("../assets/HTML 5 Boilerplate - 8 November 2022.gif")}
              alt="my-gif-01"
            />
          </div>
        </Zoom>
        <Zoom>
          <div className="section-explanation">
            <h1 className="section-heading inter-font-bold">
              DATA STRUCTURES, ALGORITHMS & LOGIC BASED PROJECTS
            </h1>
            <span className="section-text inter-font-light">
              The following is a display of the of my ability to solve problem
              by using algorithms and data structures, bellow i have include the
              a couple of games that I have created, some using the terminal.
              Below this block I have also included a back end MongoDB, and AWS3
              project that is logic heavy, it's an authentication app built from
              scratch without A0uth, complete with tokens and cookies it allows
              users to upload photos that are then sent a cloud server and are
              tracked using a link that is stored inside the data base.
            </span>
          </div>
        </Zoom>
        <Zoom>
          <div
            onClick={() => {
              window.open("https://github.com/MarkOdeBeast/Film-Finder");
            }}
            className="dsa-project-one"
          >
            <div className="dsa-project-top-section">
              <div className="description-names">
                <h2 className="name-dsa-1 inter-font-bold">THE FILM</h2>
                <h2 className="name-dsa-2 inter-font-light">FINDER APP</h2>
              </div>

              <MovieIcon className="dsa-icon" fontSize="large" />
            </div>
            <div className="body-text">
              <span className="dsa-body-text">
                In this project, we’ll use HTTP requests and asynchronous
                JavaScript to create a movie discovery app that will recommend
                random movies by genre.
              </span>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div
            onClick={() => {
              window.open(
                "https://github.com/MarkOdeBeast/theOdinProjects_Etch_A_Sketch"
              );
            }}
            className="dsa-project-two"
          >
            <div className="dsa-project-top-section">
              <div className="description-names">
                <h2 className="my-name-dsa inter-font-bold">ETCH A</h2>
                <h2 className="name-dsa-3 inter-font-light">SKETCH</h2>
              </div>

              <BorderColorIcon className="dsa-icon" fontSize="large" />
            </div>
            <div className="body-text">
              <span className="dsa-body-text">
                In this project I we built a CSS/JS and HTML dom-manipulation
                game where an event listener would use the hover of a mouse to
                draw a picture onto the screen project.
              </span>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div
            onClick={() => {
              window.open(
                "https://github.com/MarkOdeBeast/JS-Searching-Sorting-Algorithms"
              );
            }}
            className="dsa-project-three"
          >
            <div className="dsa-project-top-section">
              <div className="description-names">
                <h2 className="name-dsa-4 inter-font-bold">SORTING</h2>
                <h2 className="name-dsa-2 inter-font-light">ALGORITHMS</h2>
              </div>

              <SortByAlphaIcon className="dsa-icon" fontSize="large" />
            </div>
            <div className="body-text">
              <span className="dsa-body-text">
                These are a collection a couple of algorithms that I plan to use
                on the mk-01 project, and some that I read about and recreated
                in Javascript for practice.
              </span>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div
            onClick={() => {
              window.open(
                "https://github.com/MarkOdeBeast/JS-Searching-Sorting-Algorithms"
              );
            }}
            className="dsa-project-four"
          >
            <div className="dsa-project-top-section">
              <div className="description-names">
                <h2 className="my-name-dsa-white inter-font-bold">SEARCHING</h2>
                <h2 className="my-surname-dsa-white inter-font-light">
                  ALGORITHMS
                </h2>
              </div>

              <SearchIcon className="dsa-icon-white" fontSize="large" />
            </div>
            <div className="body-text">
              <span className="dsa-body-text-white">
                These are a collection a couple of algorithms that I plan to use
                on the mk-01 project, and some that I read about and recreated
                in Javascript for practice.
              </span>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="project-video-two">
            <img
              className="small-project-image"
              src={require("../assets/localhost_6660_create-user - 8 November 2022.gif")}
              alt="my-gif-03"
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Projects;
