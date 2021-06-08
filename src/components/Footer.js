import React from 'react'
import '../styles/footer.scss'

///-----------react share import/

import { 
    FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    RedditShareButton, 
    RedditIcon, 
    LinkedinShareButton, 
    LinkedinIcon, 
    WhatsappShareButton, 
    WhatsappIcon
 } from "react-share"

 
const Footer = () => {
    return (
        <div className="footer">
            <div classNmae="container">
                <div className="row">
                    <div className=" col-lg-4 col-md-sm-6">
                        <div className="d-flex">
                            <p>vivo por acá</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:722-27-04-47">(+34)722-27-04-47</a>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">ablue968@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row text-center">
                            <div className="col">
                                <a className="footer-nav"> Home</a>
                                <br/>
                                <a className="footer-nav"> About me</a>
                                <br/>
                                <a className="footer-nav"> Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav"> Experience</a>
                                <br/>
                                <a className="footer-nav"> Portfolio</a>
                                <br/>
                                <a className="footer-nav"> Contact me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 d-flex align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.linkedin.com/in/jpereirad/"}
                                quote={"FullStack Developer"}
                                hashtag="#Javascript #React #Python #MySQL"
                            >
                                <FacebookIcon className="mx-2 rounded-circle" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.linkedin.com/in/jpereirad/"}
                                quote={"FullStack Developer"}
                                hashtag="#Javascript #React #Python #MySQL"
                            >
                                <TwitterIcon className="mx-2 rounded-circle" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.linkedin.com/in/jpereirad/"}
                                quote={"FullStack Developer"}
                                hashtag="#Javascript #React #Python #MySQL"
                            >
                                <RedditIcon className="mx-2 rounded-circle" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/jpereirad/"}
                                quote={"FullStack Developer"}
                                hashtag="#Javascript #React #Python #MySQL"
                            >
                                <LinkedinIcon className="mx-2 rounded-circle" size={36}/>
                            </LinkedinShareButton>
                            <    WhatsappShareButton

                                url={"https://www.linkedin.com/in/jpereirad/"}
                                quote={"FullStack Developer"}
                                hashtag="#Javascript #React #Python #MySQL"
                            >
                                <WhatsappIcon className="mx-2 rounded-circle" size={36}/>
                            </    WhatsappShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

