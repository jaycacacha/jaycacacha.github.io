import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import FacebookImg from "./img/facebook.png";
import LinkedInImg from "./img/linkedin.png";
import CallImg from "./img/call.png";
import GithubImg from "./img/github.png";

function Contact() {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const template_id = "template_x57bjod";
  const service_id = "service_kzcvqsg";
  const user_id = "user_Udnh06vuOL3VPfnWS0N6M";

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        setStatus(result.text);
      },
      (error) => {
        setErrorMessage(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div className="contact__container">
      <div className="contact__left">
        <p className="socialmedia__title">Get in touch with me through</p>
        <div className="social__img">
          <img src={CallImg} alt="call-img"></img>
          <p>&nbsp;&nbsp;&nbsp;+63 9457212143</p>
        </div>
        <div className="social__img">
          <img src={FacebookImg} alt="fb-img"></img>
          <a
            className="img__link"
            href="https://facebook.com/jcacacha"
            target="_blank"
            rel="noreferrer"
          >
            <p>&nbsp;&nbsp;&nbsp;Facebook</p>
          </a>
        </div>
        <div className="social__img">
          <img src={GithubImg} alt="github-img"></img>
          <a
            className="img__link"
            href="https://github.com/jaycacacha"
            target="_blank"
            rel="noreferrer"
          >
            <p>&nbsp;&nbsp;&nbsp;Github</p>
          </a>
        </div>
        <div className="social__img">
          <img src={LinkedInImg} alt="linkedin-img"></img>
          <a
            className="img__link"
            href="https://www.linkedin.com/in/jay-cacacha/"
            target="_blank"
            rel="noreferrer"
          >
            <p>&nbsp;&nbsp;&nbsp;LinkedIn</p>
          </a>
        </div>
      </div>
      <div className="contact__right">
        <p>or Send me an Email</p>
        <form className="contact__form" onSubmit={sendEmail}>
          <input
            type="email"
            className="input__field"
            placeholder="Your email address"
            name="email"
            required={true}
          />
          <input
            type="text"
            className="input__field"
            placeholder="Subject"
            name="subject"
            required={true}
          />
          <textarea
            className="message__field"
            placeholder="Your message"
            name="message"
            required={true}
          ></textarea>
          <input
            type="submit"
            className="input__field"
            value="Send Message"
          ></input>
        </form>
        <p className="status__text">
          {status.length > 0 ? "Email Sent successfully" : errorMessage}
        </p>
      </div>
    </div>
  );
}

export default Contact;
