import React from "react";
import './style.css';
import img from "../../components/imgs/bg-desktop-light.jpg";

const Home = () =>{

    function changeMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return(
        <div className="home-container">
            <div id="container">
                <h1>Light / Dark Mode Toggle</h1>
                <label className="switch">
                    <input type="checkbox" onClick={() => changeMode()} />
                        <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default Home;
