import React from "react";
import "../Styles/Projects.css";
import kfc from "../Images/kfc.png";
import dailyobj from "../Images/dailyobj.jpeg";


import { useState } from "react";
export default function Projects() {
  const [showP2, setShowP2] = useState(false);
  const projects = [
    {
      image: dailyobj,
      name: "Daily Lifestyle",
      desc: "A group major project. It is an e-commerce website to delivers different types of products like electronic gadgets and bags etc.",
      techStack: "HTML | CSS | JavaScript | JSON Server /API",
      github: `https://github.com/neelmani0/internal-mark-2946`,
      demo: `https://dreamy-fenglisu-427c70.netlify.app/index.html`,
    }
  ];
  const projects2 = [
    
    {
      image: kfc,
      name: "KFC clone",
      desc: " A clone of KFC US website, built with JavaScript, HTML5, CSS. User can signup, login, explore the menu, add items to the cart and buy them.",
      techStack: "HTML | CSS | Javascript",
      github: `https://github.com/neelmani0/KFC-clone`,
      demo: `https://dainty-pothos-549df3.netlify.app/`,
    }
  ];

  return (
    <div id="projects" className="pro">
      <h1 className="headingPro">My Projects</h1>
      <hr className="linePro" />
      {projects.map((item) => (
        <div key={item.name} className="commonContainer">
          <img className="commonPic" src={item.image} alt={item.name} />
          <div className="projectDetails">
            <h1 className="projectHeading">{item.name}</h1>
            <p className="projectPara">{item.desc}</p>
            <p className="teckStack">
              <span className="teckSpan">Tech Stack: </span>
              {item.techStack}
            </p>
            <div className="linkingBtn">
              <button className="live">
                <a
                  className="atag"
                  href={`${item.demo}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Demo
                </a>
              </button>
              <button className="live">
                <a
                  className="atag"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        {showP2 &&
          projects2.map((item) => (
            <div key={item.name} className="commonContainer">
              <img className="commonPic" src={item.image} alt={item.name} />
              <div className="projectDetails">
                <h1 className="projectHeading">Name: {item.name}</h1>
                <p className="projectPara">{item.desc}</p>
                <p className="teckStack">
                  <span className="teckSpan">Tech Stack: </span>
                  {item.techStack}
                </p>
                <div className="linkingBtn">
                  <button className="live">
                    <a
                      className="atag"
                      href={`${item.demo}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      Demo
                    </a>
                  </button>
                  <button className="live">
                    <a
                      className="atag"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer">
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        <button
          className={`live atag`}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick={() => setShowP2(!showP2)}>
          {showP2 ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
