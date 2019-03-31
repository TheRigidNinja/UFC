import React from 'react';
import backIMG2 from "../../IMG/HomeImg2.svg"
// import backIMG from "../../IMG/HomeImg.svg";
// import social from "../../IMG/Social.svg";
// import logo from "../../IMG/Logo.svg";
// import menu from "../../IMG/menuB.svg";
// import close from "../../IMG/close.svg";

import $ from "jquery";

function Section2() {

  return (
      <section className="Section2"> 
        <img id="backIMG2" src={backIMG2}/>
        <div className="row">
            <div className="nav1 col-lg-3">
                <div className="container">
                    <div className="empty"></div>
                    <div className="links">
                        <span><a href="##">SCHEDULE <i class="fas fa-plus"></i></a></span>
                        <span><a href="##">TICKETS</a></span>
                        <span><a href="##">FIGHTERS <i class="fas fa-plus"></i></a></span>
                        <span><a href="##">NEWS <i class="fas fa-plus"></i></a></span>
                        <span><a href="##">VIDEO <i class="fas fa-plus"></i></a></span>
                        <span><a href="##">TUF</a></span>
                        <span><a href="##">FIGHTPASS</a></span>
                    </div>

                    <div className="Sublinks">
                        <span><a href="##">SHOP <i class="fas fa-plus"></i></a></span>
                        <span><a href="##">HELP</a></span> 
                    </div>
                </div>

            </div>
            <div className="nav2 col-lg-4">
                <div className="links">
                    <span><a href="##">WEIGHT CLASSES</a></span>
                    <span><a href="##">Flyweight</a></span>
                    <span><a href="##">Banatamweight</a></span>
                    <span><a href="##">Featherweight</a></span>
                    <span><a href="##">Lightweigth</a></span>
                    <span><a href="##">Welterweight</a></span>
                    <span><a href="##">Light Heavyweight</a></span>
                    <span><a href="##">Heavyweight</a></span>
                    <span><a href="##">Women's Strawweight</a></span>
                    <span><a href="##">Women's Bantamweight</a></span>
                    <span><a href="##">Women's Featherweight</a></span>
                </div>
            </div>
            <div className="nav3 col-lg-5">
                <div className="breifInfo">
                    <h4>FEATURED FIGHTER</h4>
                    <h1>Conor McGregor</h1>
                    <h6>155lbs. -21-3-0</h6>
                    <span><a href="##">More <i class="fas fa-caret-right"></i></a></span>

                    <div id="circle"></div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Section2
