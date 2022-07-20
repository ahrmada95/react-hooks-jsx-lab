import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      <h1 style={{color:"firebrick"}}>{ name } is a Web Developer from { city }</h1> {/*double curly is needed because first indicates transition to javascript logic , second is attributing value to object (param shit)*/}    </div>
  )
}

export default Home;
