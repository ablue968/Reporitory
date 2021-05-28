import React from 'react'
import '../styles/services.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <div className="services text-center pb-4">
        <h1 className="py-5 text-uppercase"> My services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mobile-fix">
                        <div className="box p-3 mb-4 rounded-3">
                            <div className="circle rounded-circle m-auto position-relative">
                                <FontAwesomeIcon className="icon position-absolute top-50 start-50 translate-middle" icon={faDesktop} size="2x" />
                            </div>
                            <h3>Web Design</h3>
                            <p>Personal approach to each project and always focused on the result</p>
                        </div>
                    </div>
                    {/*----------------------------------- */}
                    <div className="col-md-3 col-sm-6 mobile-fix">
                        <div className="box p-3 mb-4 rounded-3">
                            <div className="circle rounded-circle m-auto position-relative">
                                <FontAwesomeIcon className="icon position-absolute top-50 start-50 translate-middle" icon={faFileCode} size="2x" />
                            </div>
                            <h3>Web Development</h3>
                            <p>Your website will be build with the very best and proven technologies</p>
                        </div>
                    </div>
                    {/*----------------------------------- */}
                    <div className="col-md-3 col-sm-6 mobile-fix">
                        <div className="box p-3 mb-4 rounded-3">
                            <div className="circle rounded-circle m-auto position-relative">
                                <FontAwesomeIcon className="icon position-absolute top-50 start-50 translate-middle" icon={faFacebookF} size="2x" />
                            </div>
                            <h3>Facebook Adds</h3>
                            <p>Your website will skyrocket with us offering your services or products on facebook</p>
                        </div>
                    </div>
                    {/*-------------------------------------- */}
                    <div className="col-md-3 col-sm-6 mobile-fix">
                        <div className="box p-3 mb-4 rounded-3">
                            <div className="circle rounded-circle m-auto position-relative">
                                <FontAwesomeIcon className="icon position-absolute top-50 start-50 translate-middle" icon={faGoogle} size="2x" />
                            </div>
                            <h3>Google Adds</h3>
                            <p>Your service or product will appear at the top of the Google search</p>
                        </div>
                    </div>
                    {/*-- -------------------------------------*/}
                </div>
            </div>
        </div>
    )
}

export default Services
