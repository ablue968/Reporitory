import React from 'react';
import author from "../multimedia/photoPortfolio.jpg";
import '../styles/aboutMe.scss';


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className=" col-lg-6 col-xm-6">
                    <div className="photo-wrap">
                        <img className="profile-img" src={author} alt="This is a photo of me"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-6">
                    <h1>hola</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
