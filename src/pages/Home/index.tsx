import React from "react";
import './style.css';
import DarkModeButton from "../../components/DarkModeButton";


const Home = () =>{

    return(
        <div className="home-container">
            <div id="container">
               <DarkModeButton />


            </div>
        </div>
    );
}

export default Home;
