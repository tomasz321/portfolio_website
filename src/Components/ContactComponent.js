/** @jsx jsx */
import React from "react";
import { SocialIcon } from 'react-social-icons';
import { jsx, css } from '@emotion/core'

const social_media_icon_style = css`
  margin: 15px;
`

export default function Contact() {
  return (
      <div className="section">
          <div className="contact">
              <div className="section-content">
                  <h1 className="contact-element">Contact</h1>
                  <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
              </div>
          </div>
          <div
              css={{
                  display: 'flex',
                  justifyContent: 'center',
              }}
          >
              <SocialIcon css={social_media_icon_style} url="https://www.linkedin.com/in/tomasz-dentko-40a8b6160/"/>
              <SocialIcon css={social_media_icon_style} url="https://github.com/tomasz321" />
              <SocialIcon css={social_media_icon_style} url="mailto:tomaszdentko@gmail.com" />
          </div>
      </div>
  );
}