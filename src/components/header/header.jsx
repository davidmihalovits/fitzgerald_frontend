import React from "react";
import "./header.sass";
import Button from "@material-ui/core/button";
import { useState } from "react";

const Header = () => {
    const [popup, setPopup] = useState(true);

    return (
        <div className="header-container">
            <div className="header">
                <h1 className="title">Fitzgerald Spine and Sports Care</h1>
                <p className="slogan">
                    The most current and evidence-based treatments for sports
                    medicine, chiropractic and physical therapy available in the
                    Northern Virginia/Washington DC region.
                </p>
                <a
                    href="https://fitzgeraldspinesports.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-now-button-link"
                >
                    <Button className="book-now-button">Book now</Button>
                </a>
                {popup && (
                    <div className="header-popup">
                        <p className="header-popup-text">
                            This office has permanently closed. If you have any
                            questions, please email{" "}
                            <span
                                style={{
                                    wordBreak: "break-all",
                                    fontWeight: "700",
                                }}
                            >
                                frontoffice@fitzgeraldspinesports.com
                            </span>
                            .
                            <br />
                            <br />
                            Thank You.
                        </p>
                        <button
                            className="header-popup-button"
                            onClick={() => setPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
