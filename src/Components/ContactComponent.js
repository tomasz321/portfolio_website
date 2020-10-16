import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return (
      <div className="section">
          <div className="contact">
              <div className="section-content">
                  <h1 className="contact-element">Contact</h1>
                  <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
              </div>
          </div>
          <div className="social-media-icons">
              <SocialIcon classnName="social-media-icon" url="https://www.linkedin.com/in/tomasz-dentko-40a8b6160/" />
              <SocialIcon classnName="social-media-icon" url="https://github.com/tomasz321" />
              <SocialIcon classnName="social-media-icon" url="mailto:tomaszdentko@gmail.com" />
          </div>
      </div>
  );
}