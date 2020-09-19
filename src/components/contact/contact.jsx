import React, { useState } from "react";
import axios from "axios";
import "./contact.sass";
import Reaptcha from "reaptcha";
import Button from "@material-ui/core/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { StaticGoogleMap, Marker } from "react-static-google-map";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [verified, setVerified] = useState(false);
    const [recaptchaRes, setRecaptchaRes] = useState("");
    const [loading, setLoading] = useState(false);
    const [showNotSentMessage, setShowNotSentMessage] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [recaptcha, setRecaptcha] = useState(null);

    const onVerify = (recaptchaResponse) => {
        setVerified(true);
        setRecaptchaRes(recaptchaResponse);
    };

    const onExpire = () => {
        setRecaptchaRes("");
        setVerified(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // eslint-disable-next-line
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(regEx)) {
            setShowEmailError(true);
            return;
        }

        setLoading(true);

        await axios
            .post("https://fitzgeraldspinesports.herokuapp.com/contact", {
                name: name,
                email: email,
                message: message,
                recaptchaRes,
            })
            .then((response) => {
                if (response.data.status === "success") {
                    setVerified(false);
                    setRecaptchaRes("");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setLoading(false);
                    setMessageSent(true);
                    setShowEmailError(false);
                    recaptcha.reset();
                } else if (response.data.status === "fail") {
                    setVerified(false);
                    setRecaptchaRes("");
                    setShowNotSentMessage(true);
                    setLoading(false);
                    setMessageSent(false);
                    setShowEmailError(false);
                    recaptcha.reset();
                }
            });
    };

    // eslint-disable-next-line
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const enabled =
        email.length > 0 && name.length > 0 && message.length > 0 && verified;
    const showtickEmail = email.match(regEx);
    const showtickMessage = message.trim().length > 0;
    const showtickName = name.trim().length > 0;
    const showcrossEmail = !email.match(regEx) && !email.trim().length < 1;

    const noCheck =
        email.length > 0 || name.length > 0 || message.length > 0 || verified;

    return (
        <div className="contact">
            <h1 className="title">CONTACT US</h1>
            <div className="contact-wide">
                <div className="contact-box">
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <label htmlFor="name" className="contact-label">
                            Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            className="contact-input"
                        />
                        {showtickName && (
                            <div className="showtick-container">
                                <FontAwesomeIcon
                                    className="showtick-tick"
                                    icon={faCheck}
                                />
                            </div>
                        )}
                        <label htmlFor="email" className="contact-label">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            className={
                                showEmailError && !showtickEmail
                                    ? "error-input"
                                    : "contact-input"
                            }
                        />
                        {showtickEmail && (
                            <div className="showtick-container">
                                <FontAwesomeIcon
                                    className="showtick-tick"
                                    icon={faCheck}
                                />
                            </div>
                        )}
                        {showcrossEmail && (
                            <div className="showtick-container">
                                <FontAwesomeIcon
                                    className="showtick-tick"
                                    icon={faTimes}
                                />
                            </div>
                        )}
                        {showEmailError && !showtickEmail && (
                            <p className="error-message">
                                Invalid email address.
                            </p>
                        )}
                        <label htmlFor="message" className="contact-label">
                            Message
                        </label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            name="message"
                            id="message"
                            value={message}
                            className="contact-input textarea"
                        />
                        {showtickMessage && (
                            <div className="showtick-container">
                                <FontAwesomeIcon
                                    className="showtick-tick"
                                    icon={faCheck}
                                />
                            </div>
                        )}
                        <Reaptcha
                            ref={(e) => setRecaptcha(e)}
                            sitekey="6LfWuKIZAAAAAOOV-1P-8KAebweubmrMxd5hhVnU"
                            onVerify={onVerify}
                            onExpire={onExpire}
                            className="recaptcha"
                        />
                        <div className="contact-send">
                            <Button
                                type="submit"
                                disabled={loading || !enabled || !verified}
                                className="contact-send-button"
                            >
                                {messageSent && !noCheck && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="message-sent-icon"
                                    />
                                )}
                                {loading && (
                                    <FontAwesomeIcon
                                        spin
                                        icon={faSpinner}
                                        className="spinner"
                                    />
                                )}
                                Send
                            </Button>
                        </div>
                        {showNotSentMessage && (
                            <p className="not-sent-message">
                                Message couldn't be sent. Please give us a call.
                            </p>
                        )}
                    </form>
                </div>
                <div className="map-container">
                    <a
                        href="https://www.google.com/maps/place/Fitzgerald+Spine+%26+Sports+Care/@38.914381,-77.233863,15z/data=!4m5!3m4!1s0x0:0x92c7c89f6a356096!8m2!3d38.9143808!4d-77.233863?hl=en-TH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link"
                    >
                        <StaticGoogleMap
                            className="google-map"
                            alt="google map"
                            zoom="15"
                            size="300x300"
                            scale="2"
                            apiKey="AIzaSyB80v_A4xdjKUyJKrhoFGt3f-D5K47O050"
                        >
                            <Marker
                                location="38.914381,-77.233863"
                                color="red"
                            />
                        </StaticGoogleMap>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
