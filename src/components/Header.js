import React from 'react';
import '../styles/header.scss';
import Typed from "react-typed";

import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1 className="fw-bolder">Web developement in process</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Desing", "Web Development", "Games"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
                <Link smooth={true} to="contact" offset={-88} className="btn-main-offer">Contact me!</Link>
            </div>
        </div>
    )
}

export default Header
