import React from "react";
import "./head5.css"
import npml from "./npml.png"
import git from "./github-logo.png"

const Head5 = () => {
    return(
        <div className="head5">
            <div className="h5c1">
            <img src={npml} alt="npml"/>
            <img src={git} alt="git"/>
            </div>
            <div className=" com3 h5c2">
                <p className="com1">Support</p>
                <a href="" className="com2">Help</a>
                <a href="" className="com2">Advisories</a>
                <a href="" className="com2">Status</a>
                <a href="" className="com2">Contact npm</a>
            </div>
            <div className="com3 h5c3">
                <p className="com1">Company</p>
                <a href="" className="com2">About</a>
                <a href="" className="com2">Blog</a>
                <a href="" className="com2">Press</a>
            </div>
            <div className=" com3 h5c4">
                <p className="com1">Terms & Policies</p>
                <a href="" className="com2">Policies</a>
                <a href="" className="com2">Terms of Use</a>
                <a href="" className="com2">Code of Conduct</a>
                <a href="" className="com2">Privacy</a>
            </div>
            <div className="hc hcf"></div>
        </div>
    )
}

export default Head5