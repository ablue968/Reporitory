import React from 'react';
import '../styles/header.scss';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1 className="fw-bolder">web developement in process</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Desing", "Web Development", "Games"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
                <a href="#" className="btn-main-offer"> contact me!"</a>
            </div>
        </div>
    )
}

export default Header
