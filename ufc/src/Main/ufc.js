import React, { Component } from 'react';
import Section1 from "./Pages/Section1";
// import Section2 from "../Pages/Section2";
// import Section3 from "../Pages/Section3";
// import Section4 from "../Pages/Section4";
// import Section5 from "../Pages/Section5";
// import Section7 from "../Pages/Section7";
// import Section8 from "../Pages/Section8";
import $ from "jquery";
import '../IMG/HomeImg.png';


class ufc extends Component {
    state = {

    }

    render(){
        return(
            <div className="Container">
                <Section1/>
            </div>
        )
    }


}


export default ufc
