import React from 'react';
import backText from "../../IMG/homeText.svg"
import backIMG from "../../IMG/HomeImg.svg";
import $ from "jquery";

function Section1() {

  return (
      <section className="Section1">
          <img id="backIMG" src={backIMG}/>
          <img id="backText" src={backText}/> 
      </section>
  )
}

export default Section1
