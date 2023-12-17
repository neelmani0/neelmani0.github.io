import React from "react";
import { TbExternalLink } from "react-icons/tb";
import "../Styles/Contact.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
export default function Contact() {
  function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }

  return (
    <div className="contactContainer" id="contact">
      <h1 className="headingC">Let's Connect</h1>
      <hr className="lineC" />
      <p className="paraC">
        Get in touch with me through below links and build something together.{" "}
      </p>

      <div className="formBox">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="https://getform.io/f/6a69dcb2-4762-478f-8b5d-ab7930c3baf3"
          className="Form"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="inputBox"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="inputBox"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            required
            className="textArea"
          ></textarea>

          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
      </div>

      <div className="cBox" style={{
        border:"0px solid red"
      }}>
        <div className="commonCBox"style={{   
        textAlign:"center"
      }}>
          <a
            href="https://www.linkedin.com/in/neel-mani-2114591b2/"
            target="_blank"
            rel="noreferrer"
            f
          >
            <AiFillLinkedin className="iconss" />
          </a>
          <p>
            <a
              href="https://www.linkedin.com/in/neel-mani-2114591b2/"
              target="_blank"
              rel="noreferrer"
              id="contact-linkedin"
            >
              LinkedIn <TbExternalLink />
            </a>
          </p>
        </div>
        <div className="commonCBox" style={{   
        textAlign:"center"
      }} >
          <a
            href="https://github.com/neelmani0"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="iconss" />
          </a>
          <p>
            <a
              href="https://github.com/neelmani0"
              target="_blank"
              rel="noreferrer"
              id="contact-github"
            >
              Github <TbExternalLink />
            </a>
          </p>
        </div>
        <div className="commonCBox" style={{   
        textAlign:"center"
      }}>
          <AiOutlineMail className="iconss" />
          <a  href="mailto:neelmanibcet@gmail.com"
              target="_blank"
              rel="noreferrer"
            id="contact-email">
            
            <p >neelmanibcet@gmail.com </p>
            </a>
        </div>
        <div className="commonCBox" style={{   
        textAlign:"center"
      }}>
          <AiOutlineWhatsApp className="iconss" />
        
          <p  id="contact-phone">7031219880</p>
        </div>
      </div>
    </div>
  );
}
