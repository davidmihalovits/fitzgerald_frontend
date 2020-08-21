import React, { Component } from "react";
import "./navbar.sass";
import logo from "../../assets/logo-fitzgerald.svg";
import Button from "@material-ui/core/button";

export class NavBar extends Component {
    render() {
        return (
            <div className="fixed">
                <div className="navbar-container">
                    <div className="navbar">
                        <img src={logo} alt="logo" />
                        <a href="tel:7037608110">
                            <p>(703) 760 8110</p>
                        </a>
                        <a
                            href="https://fitzgeraldspinesports.janeapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>Book now</Button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
