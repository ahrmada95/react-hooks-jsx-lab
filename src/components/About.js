import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>A computer science major currently trying to find work. I write on the side. I live in NYC. I love an engrossing story.</p>
      <img src={ image } alt={"I made this"}/>
    </div>
  );
}

export default About;

