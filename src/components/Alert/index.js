import React from "react";
import "./Alert.css";

const Alert = (props) => {
    return(
    <div className="default" style={props.style}>
        {props.message ? (
            <p>{props.message}</p>
        ) : (
            <p className="default-msg black"> Click a pic to start!</p>
        )}
    </div>
    )
}

export default Alert;