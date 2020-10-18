/** @jsx jsx */
import React from "react";
import { jsx, css} from '@emotion/core'
import aptiv_logo from "../Images/aptiv_logo.png"
import diet_ai_logo from "../Images/diet-ai-logo.PNG"
import jeppesen_logo from "../Images/jeppesen-logo.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const button_style = css`
    background-color: #333;
    &:hover {
        background-color: ${'white'};
    }
`

export default function MyProjects() {
  return (
      <div className="section section-dark">
          <div className="MyProjects">
              <div css={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
              }}
                  >
                  <h1>My projects</h1>
                  <p>In this section I will talk more about my projects</p>
                  <div css={{
                      display: 'flex',
                      justifyContent: 'center'
                  }}
                      className="projects">
                      <Popup trigger={
                          <button css={button_style}>
                              <img src={aptiv_logo}/>
                          </button>
                      } position="right center"
                             modal
                      >
                          <h1>Aptiv</h1>
                          <p>
                              I started my journey in IT as a data analyst intern, I was responsible for analysing large datasets
                              comming from autonomus vehicles. After two months I was promoted to a Junior Data Science Engineer,
                              and after another two months I became a Regular Data Science Engineer. Durin those few months,
                              I was mostly working with Python and focusing on automating as much of repetitive work as possible.
                              After eight months I was promoted to a Product Owner position, I was responsible for machine learning
                              team, focusing on implementing object, traffic signs and lines detection and tracking.
                          </p>
                      </Popup>
                      <Popup trigger={
                          <button css={button_style}>
                              <img src={diet_ai_logo} />
                          </button>
                      } position="right center"
                             modal
                      >
                          <h1>Diet-AI</h1>
                          <p>
                              During my time in Diet-AI I was responsible for implementing knowledge-based recommendation system
                              from scratch. In order to do that, whole data pipeline was created, database was designed and
                              implemented.
                          </p>
                      </Popup>
                      <Popup trigger={
                          <button css={button_style}>
                              <img src={jeppesen_logo} />
                          </button>
                      } position="left center"
                             modal
                      >
                          <h1>Jeppesen, a Boeing Company</h1>
                          <p>
                              Started this April, I'm part of a team, that is responsible for obstacle data management system.
                              We gather information about obstacles around the world and put them into large database, that
                              is later used in many applications.
                          </p>
                      </Popup>

                  </div>
              </div>
          </div>
      </div>
  );
}