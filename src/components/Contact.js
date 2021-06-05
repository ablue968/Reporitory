import React, { useState } from 'react'
import '../styles/contact.scss'

//-----------email.js----------
import emailjs from "emailjs-com";

//------------react useForm hook----
import { useForm } from "react-hook-form";


const Contact = () => {

    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit,  formState: { errors } } = useForm();
   
    const serviceId = "service_ID";
    const templateId = "template_ID"
    const userId = "user_6xkqMeStr23EhUpTUrMSq"

    const onSubmit = ( data, reset ) => {
        sendEmail(
            serviceId,
            templateId,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userId
            )
            reset.target.reset();
    }

    const sendEmail = (serviceId, templateId, variables, userId) => {
    
        emailjs.send(serviceId, templateId, variables, userId)
          .then( () => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible")
          })
          .catch( err => console.error(`Something went wrong: ${err}`));
      }


    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1 className="fw-bolder text-uppercase">Contact me!</h1>
                <p className="fs-5">Please fill out the form and I'll contact you as soon as possible.</p>
                <span className="success-message fw-bolder">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input 
                                    className="form-control fw-bold"  
                                    type="text"  
                                    placeholder="Name" 
                                    name="name" 
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name with less than 20 characters"
                                        }
                                    }) 
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.name && errors.name.message}</span>
                            <div className="text-center">
                                <input 
                                    className="form-control fw-bold"  
                                    type="text"  
                                    placeholder="Phone number" 
                                    name="phone"
                                    {...register("phone", {
                                        required: "Please add your full number",
                                    }) 
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.phone && errors.phone.message}</span>
                            <div className="text-center">
                                <input 
                                    className="form-control fw-bold"  
                                    type="email" 
                                    placeholder="Email" 
                                    name="email"
                                    {...register("email", {
                                        required: "Please enter your email",
                                        pattern :{
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email"
                                        }
                                    }) 
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.email && errors.email.message}</span>
                            <div className="text-center">
                                <input 
                                    className="form-control fw-bold"  
                                    type="text"  
                                    placeholder="Subject" 
                                    name="subject"
                                    {...register("subject", {
                                        required: "OOPS! you forgot to add the subject",
                                    }) 
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.subject && errors.subject.message}</span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                type="text"
                                className="form-control fw-bold"
                                placeholder="Please write your message in here... "
                                name="message"
                                {...register("message", {
                                    required: "Don't forget to add some text!",
                                }) 
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.message && errors.message.message}</span>
                            <button className="btn-main-offer contact-btn" type="submit">Contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
