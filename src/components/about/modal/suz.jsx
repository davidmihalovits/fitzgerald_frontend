import React from "react";
import "./aboutModal.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import suz from "../../../assets/suz.jpg";
import Button from "@material-ui/core/button";

const Suz = (props) => {
    return (
        <div className="about-modal-container">
            <div className="modal-x-container">
                <FontAwesomeIcon
                    onClick={props.closeModal}
                    size="2x"
                    className="modal-x"
                    icon={faTimes}
                />
            </div>
            <div className="about-modal">
                <h1 className="about-modal-title">Suzanne - Office Manager</h1>
                <img className="about-modal-image" src={suz} alt="suz" />
                <div className="about-modal-box single">
                    <div className="about-modal-box-bio">
                        <p className="about-modal-paragraph">
                            Born and raised locally, Suzanne attended Loudoun
                            County HS in Leesburg and graduated with a degree in
                            biology from Denison University in Granville OH. She
                            is a lifelong competitive runner and a one-time
                            nationally ranked triathlete. Though the sub 3 hour
                            marathons are in the rear view mirror, she still
                            loves endurance sports and finds peace and happiness
                            out on the roads and trails. She's passionate about
                            fitness and belives in maintaining a healthy
                            lifestyle, enjoys the opportunity to support both
                            patients and providers along the way.
                            <br />
                            <br />
                            Suzanne joins Fitzgerald Spine & Sports Care with a
                            bevy of active living experience while working in
                            the running and cycling industries for the last
                            twenty years. Don't hesitate to ask her about bikes
                            and running shoes, or running a small business.
                        </p>
                    </div>
                </div>
                <a
                    className="about-modal-button-link"
                    href="https://fitzgeraldspinesports.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="about-modal-button">Book now</Button>
                </a>
            </div>
            <div className="overlay-bottom">&nbsp;</div>
        </div>
    );
};

export default Suz;
