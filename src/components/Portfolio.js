import React from 'react'
import '../styles/portfolio.scss'
import primera from '../multimedia/GifProjects/primera.jpg'
import segunda from '../multimedia/GifProjects/segunda.jpg'
import tercera from '../multimedia/GifProjects/tercera.jpg'
import cuarta from '../multimedia/GifProjects/cuarta.jpg'

//FontAwesome imports-------------

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

//REACT popupbox---------------
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";



const linkToProject1 = "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
const linkToProject2 = "https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs"
const linkToProject3 = "https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU"
const linkToProject4 = "https://i.picsum.photos/id/1055/5472/3648.jpg?hmac=1c293cGVlNouNQsjxT8y3nsYO-7qLCaOBEGvih0ibEU"

function Portfolio() {

    const openPopupboxFirstOne = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={primera} alt="primera" />
                <p>description about the project 1</p>
                <b>GitHub:</b><a className="hyper-link" onClick={() => { window.open(linkToProject1) }}>"put in here the link as text"</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "First one"
                },

            },
        });
    }

    const config1 = {
        titleBar: {
            enable: true,
            text: "First one"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    ////////////---------------------------------segundo-----------------
    const openPopupboxtSecondOne = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={segunda} alt="segundo" />
                <p>description about the project 2</p>
                <b>GitHub:</b><a className="hyper-link" onClick={() => { window.open(linkToProject2) }}>"put in here the link as text"</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Second one"
                },

            },
        });
    }

    const config2 = {
        titleBar: {
            enable: true,
            text: "Second one"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    /////////////----------------------------------------------tercero ------------
    const openPopupboxThirdOne = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={tercera} alt="tercero" />
                <p>description about the project 3</p>
                <b>GitHub:</b><a className="hyper-link" onClick={() => { window.open(linkToProject3) }}>"put in here the link as text"</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Third one"
                },
            },
        });
    }

    const config3 = {
        titleBar: {
            enable: true,
            text: "Third one"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    ///////////////-----------------------------------cuarto proyecto-----------

    const openPopupboxFourtOne = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={cuarta} alt="cuarto" />
                <p>description about the project 4</p>
                <b>GitHub:</b><a className="hyper-link" onClick={() => { window.open(linkToProject4) }}>"put in here the link as text"</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Forth one"
                },
            },
        });
    }

    const config4 = {
        titleBar: {
            enable: true,
            text: "Forth one"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="porfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5"> Portfolio</h1>
                <div className="image-box-wrapper d-flex justify-content-evenly">{/* acá debo cambiar esto para que pueda estar en row*/}
                    <div className="portfolio-image-box" onClick={openPopupboxFirstOne}>
                        <img className="portfolio-image" src={primera} alt="primero" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxtSecondOne}>
                        <img className="portfolio-image" src={segunda} alt="segunda" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxThirdOne}>
                        <img className="portfolio-image" src={tercera} alt="tercera" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxFourtOne}>
                        <img className="portfolio-image" src={cuarta} alt="cuarta" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer  {...config1} />
            <PopupboxContainer  {...config2} />
            <PopupboxContainer  {...config3} />
            <PopupboxContainer  {...config4} />
        </div>
    )
}

export default Portfolio
