import React from "react";
import "./Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ReactImg from "./img/react.png";
import Html5Img from "./img/html5.png";
import FirebaseImg from "./img/firebase.png";
import CssImg from "./img/css3.png";
import AmazonGif from "./img/amazon.gif";
import NetflixGif from "./img/netflix.gif";
import RecipeGif from "./img/recipe_app.gif";
import MemeGif from "./img/meme_generator.gif";

function Projects() {
  return (
    <div className="projects__container">
      <p className="project__title">Projects</p>
      <div className="project__">
        <img
          id="amazon"
          src={AmazonGif}
          alt="amazon img"
          className="project__image"
        ></img>
        <p className="title">Amazon Clone</p>
        <p className="technologies__used">Technologies Used:&nbsp;&nbsp;</p>
        <div className="link__container">
          <img src={ReactImg} alt="" className="made__with" />
          <img src={Html5Img} alt="" className="made__with" />
          <img src={CssImg} alt="" className="made__with" />
          <img src={FirebaseImg} alt="" className="made__with" />
        </div>
        <div className="link__container">
          <GitHubIcon />
          <a
            className="text_link"
            href="https://github.com/jaycacacha/amazon-clone"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Github Repo</span>
          </a>
        </div>
        <div className="link__container">
          <LiveTvIcon />
          <a
            className="text_link"
            href="https://clone-f6d1b.web.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Live Demo</span>
          </a>
        </div>
      </div>
      <div className="project__">
        <img
          id="recipe"
          src={RecipeGif}
          alt="recipe img"
          className="project__image"
        ></img>
        <p className="title">Recipe App</p>
        <p className="technologies__used">Technologies Used:&nbsp;&nbsp;</p>
        <div className="link__container">
          <img src={ReactImg} alt="" className="made__with" />
          <img src={Html5Img} alt="" className="made__with" />
          <img src={CssImg} alt="" className="made__with" />
        </div>
        <div className="link__container">
          <GitHubIcon />
          <a
            className="text_link"
            href="https://github.com/jaycacacha/recipe-app"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Github Repo</span>
          </a>
        </div>
        <div className="link__container">
          <LiveTvIcon />
          <a
            className="text_link"
            href="https://recipe-app-2021.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Live Demo</span>
          </a>
        </div>
      </div>
      <div className="project__">
        <img
          id="netflix"
          src={NetflixGif}
          alt="netflix img"
          className="project__image"
        ></img>
        <p className="title">Netflix Clone</p>
        <p className="technologies__used">Technologies Used:&nbsp;&nbsp;</p>
        <div className="link__container">
          <img src={ReactImg} alt="" className="made__with" />
          <img src={Html5Img} alt="" className="made__with" />
          <img src={CssImg} alt="" className="made__with" />
          <img src={FirebaseImg} alt="" className="made__with" />
        </div>
        <div className="link__container">
          <GitHubIcon />
          <a
            className="text_link"
            href="https://github.com/jaycacacha/netflix-clone"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Github Repo</span>
          </a>
        </div>
        <div className="link__container">
          <LiveTvIcon />
          <a
            className="text_link"
            href="https://netflix-clone-5dc96.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Live Demo</span>
          </a>
        </div>
      </div>
      <div className="project__">
        <img
          id="meme"
          src={MemeGif}
          alt="meme img"
          className="project__image"
        ></img>
        <p className="title">Meme Generator Clone</p>
        <p className="technologies__used">Technologies Used:&nbsp;&nbsp;</p>
        <div className="link__container">
          <img src={ReactImg} alt="" className="made__with" />
          <img src={Html5Img} alt="" className="made__with" />
          <img src={CssImg} alt="" className="made__with" />
        </div>
        <div className="link__container">
          <GitHubIcon />
          <a
            className="text_link"
            href="https://github.com/jaycacacha/meme-generator-clone"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Github Repo</span>
          </a>
        </div>
        <div className="link__container">
          <LiveTvIcon />
          <a
            className="text_link"
            href="https://jaycacacha.github.io/meme-generator-clone/"
            target="_blank"
            rel="noreferrer"
          >
            <span>&nbsp;&nbsp;Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
