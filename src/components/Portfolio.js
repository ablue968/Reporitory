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
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";





const linkToProject = "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"

function Portfolio() {
    //Primera
    const openPopupboxFirstOne = ()=>{
        console.log("llamando")
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={primera} alt="primera"/>
                <p>description about the project</p>
                <b>GitHub:</b><a className="hyper-link" onClick={()=>{window.open(linkToProject)}}>"put in here the link as text"</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigFirstOne ={

    }

    return (
        <div className="porfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5"> Portfolio</h1>
                <div className="image-box-wrapper d-flex justify-content-evenly">
                    <div className="portfolio-image-box" onClick={openPopupboxFirstOne}>
                        <img className="portfolio-image" src={primera} alt="primero" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/> 
                    </div>
                    <div className="portfolio-image-box" >
                        <img className="portfolio-image" src={segunda} alt="segunda" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/> 
                    </div>
                    <div className="portfolio-image-box" >
                        <img className="portfolio-image" src={tercera} alt="tercera" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/> 
                    </div>
                    <div className="portfolio-image-box" >
                        <img className="portfolio-image" src={cuarta} alt="cuarta" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/> 
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFirstOne}/>
        </div>
    )
}

export default Portfolio
