import React from 'react';
import author from "../multimedia/photoPortfolio.jpg";
import '../styles/aboutMe.scss';


const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className=" col-lg-4 col-xm-6">
                    <div className="photo-wrap text-center">
                        <img className="profile-img " src={author} alt="This is a photo of me" />
                    </div>
                </div>
                <div className="col-lg-8 col-xm-6">
                    <h1 className='text-center about-h1 mt-1 fw-bolder' >About me</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                         of Lorem Ipsum-cambio.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
