import React from 'react';
import logo from "../multimedia/logo.png";
import '../styles/navbar.scss';

import { Link } from "react-scroll";

//  REACT font-awsome icon import //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand"><img className="logo" src={logo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><FontAwesomeIcon icon={faBars}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="aboutMe" offset={-88} className="nav-link">About me</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth={true} to="services" offset={-88} className="nav-link">Services</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-88} className="nav-link">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-88} className="nav-link">Portfolio</Link>
                        </li>
                        <li className="nav-item active">
                            <Link smooth={true} to="contact" offset={-88} className="nav-link">Contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
