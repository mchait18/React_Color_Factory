import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Colors.css"

function ColorDetail() {
    const { color } = useParams()
    return (
        <div>
            <div className="colorPage" style={{ backgroundColor: color }}>
                <h1>THIS IS {color.toUpperCase()}.</h1></div>
            <div className="colorPage" style={{ backgroundColor: color }}>
                <h1>ISN'T IT BEAUTIFUL?</h1></div>
            <div className="colorPage" style={{ backgroundColor: color }}>
                <Link style={{ color: "white" }} to="/colors"><h1 >GO BACK</h1></Link>
            </div>
        </div >
    );
}


export default ColorDetail