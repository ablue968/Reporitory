import React from 'react';
import author from "../multimedia/photoPortfolio.jpg";
import '../styles/aboutMe.scss';

//  REACT font-awsome icon import //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFlask } from "@fortawesome/free-solid-svg-icons"
import { faBootstrap, faCss3, faFreeCodeCamp, faGit, faHtml5, faJs, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="container py-5">
                <div className="row">
                    <div className=" col-lg-4 col-xm-6 m-auto">
                        <div className="photo-wrap text-center">
                            <img className="profile-img " src={author} alt="This is a photo of me" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-xm-6">
                        <h1 className='about-h1 mt-1 fw-bolder' >About me</h1>
                        <p>Hi! Welcome to my little cave A.K.A portfolio.<br/>
                            My name is Jhon and I'm coding since 2020. The Technologies and Science
                            in general have always been of my interest, thats why I did a jump from
                            administration <b className="marker-icon" > to code (AND IT FEELS AMAZING!)</b>, of course this happened with a lot of work and
                            wasn't a choice that I took without further thought. I started looking for 
                            some sites to learn by myself such as <b className="marker-icon">freecodecamp<FontAwesomeIcon  className="ms-1" icon={faFreeCodeCamp} /></b><br/>
                            When I found a flaw on my learning progress I thought about having some actual guidance to learn, that's
                            where <b className="marker-icon">4Geeks Academy</b> came to the ecuation and helped me greatly to have a better understanding
                            about the front-end and back-end, so... that's what we call a <b className="marker-icon">FullStack Developer</b><br />
                            I have other interests such as learn new ways to comunicate, I have a <b className="marker-icon">B1 in French</b> and do well on my <b className="marker-icon">English</b> (I'm looking foward to certificate this one), you 
                            can count me in if there is a basketball game! And things as culture and history have always time in may day to learn something new.<br/>
                            <b className="marker-icon" >My Technologies at the moment:</b>
                        </p>
                        
                    </div>
                </div>
                <div className="text-center">
                    <FontAwesomeIcon className="technologies" icon={faReact} />
                    <FontAwesomeIcon className="technologies" icon={faJs} />
                    <FontAwesomeIcon className="technologies" icon={faHtml5} />
                    <FontAwesomeIcon className="technologies" icon={faCss3} />
                    <FontAwesomeIcon className="technologies" icon={faSass} />
                    <FontAwesomeIcon className="technologies" icon={faBootstrap} />
                    <FontAwesomeIcon className="technologies" icon={faPython} />
                    <FontAwesomeIcon className="technologies" icon={faFlask} />
                    <FontAwesomeIcon className="technologies" icon={faGit} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
