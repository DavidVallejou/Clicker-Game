import React from "react";
import "./style.css";

const NavBar = props => (
    <div className="sticky-nav">
        <div className="nav-title">
            <h1 id="status">{props.status}</h1>
            <a className="nav-restart" href="/">Restart</a>
            <div className="scores">
            
            <div className="score" > | Top Score: {props.topScore}</div>
            <div className="score" >Current Score: {props.currentScore}</div>
            </div>
        </div>
    </div>
)

export default NavBar;