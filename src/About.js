import React from "react";
import "./About.css";
import ReactImg from "./img/react.png";
import Html5Img from "./img/html5.png";
import CssImg from "./img/css3.png";
import JavaScriptImg from "./img/javascript.png";
import BootstrapImg from "./img/bootstrap.png";

function About() {
  return (
    <div className="about__container">
      <div className="about__title">
        <p className="about__me">About me</p>
        <p className="about__description">
          Hi, my name's Jay and i have a degree in Computer Engineering from
          National College of Science & Technology.
        </p>
        <p className="about__description2">
          I am pursuing an opportunity to begin my career in web development
          industry and looking for a company that share the same interest with
          me.
        </p>
        <p className="about__description3">
          I mainly focus on front-end web development and i am very passionate
          about learning and adapting new technologies for web development.
        </p>
        <p className="about__skills">Skills:</p>
        <div className="about__footer">
          <img src={ReactImg} alt="" className="skills__img" />
          <img src={Html5Img} alt="" className="skills__img" />
          <img src={CssImg} alt="" className="skills__img" />
          <img src={BootstrapImg} alt="" className="skills__img" />
          <img src={JavaScriptImg} alt="" className="skills__img" />
        </div>
      </div>
    </div>
  );
}

export default About;
