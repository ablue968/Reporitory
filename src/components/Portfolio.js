import React from 'react'
import '../styles/portfolio.scss'
import aroundSpain from '../multimedia/GifProjects/aroundSpain.gif'
import segunda from '../multimedia/GifProjects/segunda.jpg'
import tercera from '../multimedia/GifProjects/tercera.jpg'
import cuarta from '../multimedia/GifProjects/cuarta.jpg'

//FontAwesome imports-------------

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

//REACT popupbox---------------
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";



const linkToAroundSpain = "https://github.com/ablue968/AroundSpain"
const herokuAroundSpain = "https://aroundspain.herokuapp.com/"
const linkToProject2 = "https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs"
const linkToProject3 = "https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU"
const linkToProject4 = "https://i.picsum.photos/id/1055/5472/3648.jpg?hmac=1c293cGVlNouNQsjxT8y3nsYO-7qLCaOBEGvih0ibEU"

function Portfolio() {

    const openAroundSpain = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={aroundSpain} alt="aroundSpain" />
                <p className="portfolio-p-popupbox">Web aplication focused on delivering to the user basic infomation about new places to visit such as population, wiki info and temperatura (all from public's API), you have to login to unlock the post comment's section and favorite button</p>
                <b>GitHub:</b><a className="hyper-link" onClick={() => { window.open(linkToAroundSpain) }}> https://github.com/ablue968/AroundSpain</a>
                <br />
                <b>Heroku:</b><a className="hyper-link" onClick={() => { window.open(herokuAroundSpain) }}> https://aroundspain.herokuapp.com</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "AroundSpain"
                },

            },
        });
    }

    const config1 = {
        titleBar: {
            enable: true,
            text: "AroundSpain"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    ////////////---------------------------------segundo-----------------
    const openPopupboxtSecondOne = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={segunda} alt="segundo" />
                <p>description about the project 2. acá iría un texto un poco largo así que vamo a inventa</p>
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
                <p>description about the project 3. acá iría un texto un poco largo así que vamo a inventa</p>
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
                <p>description about the project 4. acá iría un texto un poco largo así que vamo a inventa</p>
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
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5 fw-bolder"> Portfolio</h1>
                <div className="image-box-wrapper row ">{/* acá debo cambiar esto para que pueda estar en row*/}
                    <div className="portfolio-image-box col " onClick={openAroundSpain}>
                        <img className="portfolio-image rounded" src={aroundSpain} alt="aroundSpain" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box col" onClick={openPopupboxtSecondOne}>
                        <img className="portfolio-image rounded" src={segunda} alt="segunda" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box col" onClick={openPopupboxThirdOne}>
                        <img className="portfolio-image rounded" src={tercera} alt="tercera" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box col" onClick={openPopupboxFourtOne}>
                        <img className="portfolio-image rounded" src={cuarta} alt="cuarta" />
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
