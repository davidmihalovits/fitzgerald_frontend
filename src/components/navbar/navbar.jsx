import React from "react";
import "./navbar.sass";
import logo from "../../assets/logo-fitzgerald.svg";
import Button from "@material-ui/core/button";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <img className="logo" src={logo} alt="logo" />
                <div className="navbar-right">
                    <a className="tel" href="tel:7037608110">
                        (703) 760 8110
                    </a>
                    <a
                        href="https://fitzgeraldspinesports.janeapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-now-button-link"
                    >
                        <Button className="book-now-button">Book now</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
