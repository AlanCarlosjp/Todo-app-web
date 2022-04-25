import React from "react";
import './style.css';


const DarkModeButton = () => {

    function changeMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return(
        <div className="dark-mode-button">
            <label className="switch">
                <input type="checkbox" onClick={() => changeMode()} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default DarkModeButton;
