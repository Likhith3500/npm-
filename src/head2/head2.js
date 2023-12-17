import React from "react";
import "./head2.css"
import logo from "./Npm.png"

const Head2 = () => {
    return(
        <div className="head2">
            <span><img src={logo} alt="logo" style={{height:"80px",position:"absolute",top:"10px",left:"20px"}}/></span>
            <span className="h2s1">
                <input type="text" className="h2s1s" placeholder="Search packages"/>
                <button className="h2s1b">Search</button>
            </span>
            <span className="h2s2">
                <button className="h2s2b1">Sign Up</button>
                <button className="h2s2b2">Sign In</button>
            </span>
        </div>
    )
}

export default Head2;