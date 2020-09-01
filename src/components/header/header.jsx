import React from "react";
import "./header.sass";
import Button from "@material-ui/core/button";

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;
