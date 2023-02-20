import React from "react";

function About() {
  const about = [
    {
      id: 1,
      headingOne: "SINETHEMBA",
      headingTwo: "ZWANE",
      aboutImg: {
        img: "https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?resize=620,413",
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
            <div className="about-heading-container">
              <h1 className="inter-font-bold about-heading1">
                {item.headingOne}
              </h1>
              <h1 className="inter-font-light about-heading2">
                {item.headingTwo}
              </h1>
            </div>

            <div className="my-image">
              <img
                className="profile-image"
                src={item.aboutImg.img}
                alt="my-gif"
              />
            </div>
            <div className="side-bar">
              <h1 className="side-bar-header-font-bold">
                {item.links.heading}
              </h1>
              <h1 className="side-bar-header-font-light">
                {item.links.headingOne}
              </h1>
              <span className="side-bar-body-font-light">
                {item.links.text}
              </span>

              <div className="get-in-touch-button-container">
                <button className="twitter-button">Twitter</button>
                <button className="linked-in-button">LinkedIn</button>
                <button className="git-hub-button">GitHub</button>
                <button className="ringer-button">Ringer</button>
                <button className="g-mail-button">Gmail</button>
              </div>

              <h1 className="side-bar-header-font-bold-2">FULL-STACK</h1>
              <h1 className="side-bar-header-font-light-2">DEVELOPER</h1>

              <button className="side-bar-button">
                <span className="side-bar-button-font-bold">Download CV</span>
              </button>
            </div>
            <div className="qualification-section">
              <h1 className="qualification-header-font-bold">CONTINUOUS</h1>
              <h1 className="qualification-header-font-light">SELF-STUDY</h1>
              <span className="qualification-body-font-light">
                {item.qualification.text}
              </span>
              <button className="self-study-button">
                <span className="qualification-button-font-bold side-bar-button-font-bold">
                  See More
                </span>
              </button>
            </div>

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
          </div>
        </>
      ))}
    </>
  );
}

export default About;
