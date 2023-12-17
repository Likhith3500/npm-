import React from "react";
import pic from "./pic.png";
import "./head4.css";

const Head4=() =>{
    return(
        <div className="head4">
            <img src={pic} alt="pic"/>
            <div className="h4c1">Bring the best of open source to you, your team, and your company</div>
            <div className="h4c2">Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</div>
        </div>
    )
}

export default Head4;