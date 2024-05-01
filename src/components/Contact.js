import React, { useState } from "react";
import AppWrap from "../utils/AppWrap";
import MotionWrap from "../utils/MotionWrap";
import emailjs from '@emailjs/browser';


import '../styles/Contact.css'
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setIsLoading] = useState(false);

    const { email, message, subject, name } = formData;

    const handleChangeInput = (e) => {
        const { name: fieldName, value } = e.target;

        setFormData((prev) => {
            return { ...prev, [fieldName]: value };
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        if(!formData.name || !formData.email || !formData.message || !formData.subject) {
            return toast.error('please complete all fields')
        };

        setIsLoading(true);
        emailjs
            .send(
                'service_h9slcyg',
                'template_oarulvv',
                {
                    from_name: formData.name,
                    to_name: "Hassan Ahmed",
                    from_email: formData.email,
                    to_email: "hassan1132005@gmail.com",
                    message: formData.message,
                    from_subject: formData.subject
                },
                'IW6_6siGryFqzCDac'
            )
            .then((result) => {
                toast.success('mail send successfully');
                setIsFormSubmitted(true)
            }, (error) => {
                console.log('server busy');
            });

        setFormData(
            {
                name: "",
                email: "",
                subject: "",
                message: "",
            }
        )

        setIsLoading(false)
    }


    return (
        <>
            <h2 className="head-text">
                Take a coffee & <span>chat</span> with <span>me</span>
            </h2>

            <div className="app__contact-cards">
                <div className="app__contact-card">
                    <img src="/assets/email.png" alt="email" />
                    <a href="mailto:coder.hassan.ahmed@gmail.com" className="p-text">
                        coder.hassan.ahmed@gmail.com
                    </a>
                </div>
                <div className="app__contact-card">
                    <img src="/assets/mobile.png" alt="mobile" />
                    <a href="tel: +880 1841162203" className="p-text">
                        +880 1841162203
                    </a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__contact-form app__flex">
                    <div className="app__flex">
                        <input
                            type="text"
                            className="p-text"
                            placeholder="Your Name"
                            value={name}
                            onChange={handleChangeInput}
                            name="name"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="email"
                            className="p-text"
                            placeholder="Your Email"
                            value={email}
                            onChange={handleChangeInput}
                            name="email"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="text"
                            className="p-text"
                            placeholder="Subject"
                            value={subject}
                            onChange={handleChangeInput}
                            name="subject"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        type="button"
                        className=" portfolio-button"
                        onClick={handleSubmit}
                    >
                        {loading ? "Sending Message" : "Send Message"}

                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in <span>Touch!</span>
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Contact, "app__contact"),
    "contact",
    "app__whitebg"
);
