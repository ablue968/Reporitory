import React from 'react'
import '../styles/experience.scss'


const Experience = () => {
    return (
        <div id="experience" className="experience ">
            <div className="d-flex justify-content-center py-5 text-uppercase">
                <h1 className=" fw-bolder">experience</h1>
            </div>
            <div className="container experience-wrapper overflow-hidden p-5">
                <div className="timeline-block float-end">
                    <div className="marker float-start me-2"></div>
                    <div className="timeline-content">
                        <h3>2014-2018</h3>
                        <h6>CEO</h6>
                        <p>
                            I had my own company around these years, where I sold  medical-surgical 
                            material directly to clinics and doctors. Since the beginning I had to be
                            in charge of accounting, inventory, getting the materials to deliver  
                            the product to the client and selling.<br />
                        </p>
                        <ul>
                            Thanks to this experience:
                            <li>I learned how to talk to potencial clients and
                            reach an agreement to the selling point.</li>  
                            <li>Reinvent myself to reach the clients demands about a product.</li>
                            <li>Follow the market needs to adapt and offer better service at general.</li>
                        </ul>

                    </div>
                </div>
                {/*-------------------------------------------------------------- */}
                <div className="timeline-block">
                    <div className="marker float-start me-2"></div>
                    <div className="timeline-content left">
                        <h3>2015-2016</h3>
                        <p>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                {/*-------------------------------------------------------------- */}
                <div className="timeline-block float-end">
                    <div className="marker float-start me-2"></div>
                    <div className="timeline-content">
                        <h3>2016-2017</h3>
                        <p>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                {/*-------------------------------------------------------------- */}
                <div className="timeline-block">
                    <div className="marker float-start me-2"></div>
                    <div className="timeline-content left">
                        <h3>2017-2018</h3>
                        <p>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                {/*-------------------------------------------------------------- */}
            </div>
        </div>
    )
}

export default Experience