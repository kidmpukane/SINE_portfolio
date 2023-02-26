import { React, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Aos from "aos";
import "aos/dist/aos.css";
import profilePic from "../assets/IMG_20220326_010638.jpg";
import myCv from "../assets/Lwandiso_Zwane_Resume_26-02-2023-21-33-59.pdf";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import { useNavigate } from "react-router-dom";

const MY_CV = myCv;

function About() {
  const navigate = useNavigate();
  const downloadCv = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  const about = [
    {
      id: 1,
      headingOne: "LWANDISO",
      headingTwo: "ZWANE",
      aboutImg: {
        img: profilePic,
      },
      links: {
        heading: "GET IN",
        headingOne: "TOUCH",
        text: "Hi, my name is Sinethemba, I am a junior fullstack developer from South Africa, with experience mostly developing front end applications. I am fueled by my passion for understanding the nuances and complexities of web development.",
      },
      qualification: {
        text: "I consider myself a 'forever student', eager to both and learn build on my foundations, and I stay in tune with the latest web development trends and technologies through continued coursework.",
      },
    },
  ];

  return (
    <>
      {about.map((item) => (
        <>
          <div className="about-page-container">
            <Zoom>
              <div className="about-heading-container">
                <h1 className="inter-font-bold about-heading-1">
                  {item.headingOne}
                </h1>
                <h1 className="inter-font-light about-heading-2">
                  {item.headingTwo}
                </h1>
              </div>
            </Zoom>

            <Zoom>
              <div className="my-image">
                <img
                  className="profile-image"
                  src={item.aboutImg.img}
                  alt="my-gif"
                />
              </div>
            </Zoom>
            <Zoom>
              <div className="side-bar">
                <h1 className="side-bar-header-font-bold">
                  {item.links.heading}
                </h1>
                <h1 className="side-bar-header-font-light">
                  {item.links.headingOne}
                </h1>
                <Zoom>
                  <span className="side-bar-body-font-light">
                    {item.links.text}
                  </span>
                </Zoom>

                <Zoom>
                  <div className="get-in-touch-button-container">
                    <button
                      onClick={() => {
                        window.open(
                          "https://twitter.com/SineZwa97?t=SWBvRj7-kVc-0-8jmzNzVA&s=08 "
                        );
                      }}
                      className="twitter-button"
                    >
                      <TwitterIcon fontSize="large"></TwitterIcon>
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/sinethemba-zwane-056292211"
                        );
                      }}
                      className="linked-in-button"
                    >
                      <LinkedInIcon fontSize="large"></LinkedInIcon>
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://github.com/MarkOdeBeast");
                      }}
                      className="git-hub-button"
                    >
                      <GitHubIcon fontSize="large"></GitHubIcon>
                    </button>
                    <button
                      onClick={() => [
                        navigator.clipboard.writeText("+27829571804"),
                        alert("Phone Number Copied To Clip Board"),
                      ]}
                      className="ringer-button"
                    >
                      <WhatsAppIcon fontSize="large"></WhatsAppIcon>
                    </button>
                    <button
                      onClick={() => [
                        navigator.clipboard.writeText(
                          "njabulosbzwane25@gmail.com"
                        ),
                        alert("Email Copied To Clip Board"),
                      ]}
                      className="g-mail-button"
                    >
                      <EmailIcon fontSize="large"></EmailIcon>
                    </button>
                  </div>
                </Zoom>

                <Zoom>
                  <h1 className="side-bar-header-font-bold-2">FULL-STACK</h1>
                  <h1 className="side-bar-header-font-light-2">DEVELOPER</h1>
                </Zoom>
                <Zoom>
                  <button
                    className="side-bar-button"
                    onClick={() => {
                      downloadCv(MY_CV);
                    }}
                  >
                    <span className="side-bar-button-font-bold">
                      Download CV
                    </span>
                  </button>
                </Zoom>
              </div>
              <div className="qualification-section">
                <Zoom>
                  <h1 className="qualification-header-font-bold">CONTINUOUS</h1>
                  <h1 className="qualification-header-font-light">
                    SELF-STUDY
                  </h1>
                  <span className="qualification-body-font-light">
                    {item.qualification.text}
                  </span>
                </Zoom>
                <Zoom>
                  <button
                    onClick={() => {
                      navigate("/continuous-self-study");
                    }}
                    className="self-study-button"
                  >
                    <span className="qualification-button-font-bold side-bar-button-font-bold">
                      See More
                    </span>
                  </button>
                </Zoom>
              </div>
            </Zoom>
            <div className="second-heading">
              <h1 className="inter-font-bold card-header-info card-header-font-bold">
                COMPETENCIES
              </h1>
              <h1 className="inter-font-light card-header-info card-header-font-light">
                SKILLS & ABILITIES
              </h1>
            </div>
          </div>

          <div className="more-info-cards">
            <Zoom>
              <div className="more-info-card">
                <h1 className="inter-font-bold card-heading-info card-font-bold">
                  TECH
                </h1>
                <h1 className="inter-font-light card-heading-info card-font-light">
                  STACKS
                </h1>
                <li className="list-item-inter-font-bold">HTML/CSS</li>
                <li className="list-item-inter-font-bold">JavaScript</li>
                <li className="list-item-inter-font-bold">React.JS</li>
                <li className="list-item-inter-font-bold">React Native</li>
                <li className="list-item-inter-font-bold">Express.JS</li>
                <li className="list-item-inter-font-bold">Node.JS</li>
                <li className="list-item-inter-font-bold">Python</li>
                <li className="list-item-inter-font-bold">Django</li>
                <li className="list-item-inter-font-bold">MongoDB</li>
                <li className="list-item-inter-font-bold">mySQL</li>
              </div>
            </Zoom>
            <Zoom>
              <div className="more-info-card">
                <h1 className="inter-font-bold card-heading-info card-font-bold">
                  TOOLS &
                </h1>
                <h1 className="inter-font-light card-heading-info card-font-light">
                  OTHER SKILLS
                </h1>
                <li className="list-item-inter-font-bold">Git</li>
                <li className="list-item-inter-font-bold">GitHub</li>
                <li className="list-item-inter-font-bold">Postman</li>
                <li className="list-item-inter-font-bold">Android Studio</li>
                <li className="list-item-inter-font-bold">Figma</li>
                <li className="list-item-inter-font-bold">Graphic Designer</li>
                <li className="list-item-inter-font-bold">UI/UX designer</li>
                <li className="list-item-inter-font-bold">Photo Shop</li>
              </div>
            </Zoom>

            <Zoom>
              <div className="more-info-card">
                <h1 className="inter-font-bold card-heading-info card-font-bold">
                  TRAITS &
                </h1>
                <h1 className="inter-font-light card-heading-info card-font-light">
                  SOFT SKILLS
                </h1>
                <li className="list-item-inter-font-bold">Hardworking</li>
                <li className="list-item-inter-font-bold">Good Communicator</li>
                <li className="list-item-inter-font-bold">Proactive</li>
                <li className="list-item-inter-font-bold">Self Motivated</li>
                <li className="list-item-inter-font-bold">Progress Driven</li>
                <li className="list-item-inter-font-bold">Forever Student</li>
                <li className="list-item-inter-font-bold">Creative</li>
                <li className="list-item-inter-font-bold">Team Player</li>
              </div>
            </Zoom>
          </div>
        </>
      ))}
    </>
  );
}

export default About;
