import React from 'react'
import '../styles/experience.scss'


const Experience = () => {
    return (
        <div className="experience ">
            <div className="d-flex justify-content-center my-5 text-uppercase">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper overflow-hidden p-5">
                <div className="timeline-block float-end">
                    <div className="marker float-start me-2"></div>
                    <div className="timeline-content">
                        <h3>2014-2015</h3>
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