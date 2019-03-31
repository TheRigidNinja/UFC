import React from 'react';
import backText from "../../IMG/homeText.svg"
import backIMG from "../../IMG/HomeImg.svg";
import social from "../../IMG/Social.svg";
import logo from "../../IMG/Logo.svg";
import menu from "../../IMG/menuB.svg";
import close from "../../IMG/close.svg";
import search from "../../IMG/search.svg";
import $ from "jquery";

function Section1() {

  const OpenOptions = (mode) =>{
    console.log(mode)

    if(mode == "close"){
      $("#menu").animate({"transform":"rotate(60deg)","opacity":0},()=>{
        $("#menu").css("display","none");
        $("#close").css({"display":"block","opacity":1})
      });
    }else{
      $("#close").animate({"transform":"rotate(60deg)","opacity":0},()=>{
        $("#close").css({"display":"none","opacity":0})
        $("#menu").css({"display":"block","opacity":1})
      });
    }
    // 

    // })
      //   $("#menu").removeClass("close")
      //   console.log("Yes")
      // });
  }

  return (
      <section className="Section1">
          <img id="backIMG" src={backIMG}/>
          <img id="backText" src={backText}/>

          <div className="media">
            <img id="search" src={search}/>
            <img id="social" src={social}/>
          </div>
          
          <div className="nav">
            <img id="menu" src={menu} onClick={()=>OpenOptions("close")}/>
            <img id="close" src={close} onClick={()=>OpenOptions("open")}/>
            <img id="logo" src={logo}/>
          </div>   
      </section>
  )
}

export default Section1
