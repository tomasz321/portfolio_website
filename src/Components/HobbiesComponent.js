import React from "react";
import snowboard from "../Images/snowboard.jpg"

export default function Hobbies() {
  return (
      <div className="section">
          <div className="Hobbies">
              <div className="section-content">
                  <h1>Hobbies</h1>
                  <p>In this section I will talk more about hobbies</p>
                  <h1>Snowboard</h1>
                  <p>I love snowboarding, it is one of my biggest passion</p>
                  <img src={snowboard} width="500" alt="Snowboard"/>
              </div>
          </div>
      </div>
  );
}