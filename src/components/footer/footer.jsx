import React from "react";
import "./footer.sass";
import logo from "../../assets/logo-fitzgerald.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <img className="footer-logo-wide" src={logo} alt="logo" />
                <div className="footer-logo-social">
                    <img className="footer-logo" src={logo} alt="logo" />
                    <div className="social-icons">
                        <a
                            href="https://www.facebook.com/fitzgeraldspinesports/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img
                                className="social-icon"
                                src={facebook}
                                alt="facebook"
                            />
                        </a>
                        <a
                            href="https://instagram.com/fitzgeraldspinesports?igshid=1nmp854kp0w46"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img
                                className="social-icon"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="contact-us">
                        <h2 className="contact-us-title">Contact us</h2>
                        <p className="phone">
                            Phone: <a href="tel:7037608110">(703) 760 8110</a>
                        </p>
                        <p className="fax">Fax: (703) 760 8111</p>
                        <p className="email">
                            Email:{" "}
                            <a href="mailto:info@fitzgeraldspinesports.com">
                                info@fitzgeraldspinesports.com
                            </a>
                        </p>
                        <p className="address">
                            8381 Old Courthouse Road., Suite 150, Tysons Corner,
                            VA 22182
                        </p>
                    </div>
                    <div className="appointment-hours">
                        <h2 className="appointment-hours-title">
                            Appointment Hours
                        </h2>
                        <div className="appointment-hours-box">
                            <div className="days">
                                <p>Monday</p>
                                <p>Tuesday</p>
                                <p>Wednesday</p>
                                <p>Thursday</p>
                                <p>Friday</p>
                            </div>
                            <div className="hours">
                                <p>7:30 am - 6:30 pm</p>
                                <p>7:30 am - 6:30 pm</p>
                                <p>7:30 am - 6:30 pm</p>
                                <p>8:00 am - 6:30 pm</p>
                                <p>7:30 am - 12:00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-logo-social-wide">
                        <a
                            href="https://www.facebook.com/fitzgeraldspinesports/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img
                                className="social-icon"
                                src={facebook}
                                alt="facebook"
                            />
                        </a>
                        <a
                            href="https://instagram.com/fitzgeraldspinesports?igshid=1nmp854kp0w46"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img
                                className="social-icon"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
