import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/button";
import "./servicesModal.sass";
import rehab1 from "../../../assets/rehab1.jpg";
import rehab2 from "../../../assets/rehab2.jpg";

const Rehab = (props) => {
    return (
        <div className="modal-services-container">
            <div className="modal-x-container">
                <FontAwesomeIcon
                    onClick={props.closeModal}
                    size="2x"
                    className="modal-x"
                    icon={faTimes}
                />
            </div>
            <div className="modal-services">
                <h1 className="modal-services-title">
                    Rehabilitation & Exercises
                </h1>
                <img
                    className="modal-services-title-image"
                    src={rehab1}
                    alt="rehab"
                />
                <div className="modal-description">
                    <h2 className="modal-description-title">
                        We will personally design and guide you through a custom
                        rehabilitation or fitness program.
                    </h2>
                    <p>
                        Exercise is an essential factor in injury prevention,
                        sports conditioning, and injury rehabilitation. We can
                        help you with muscular imbalances, faulty neuromuscular
                        coordination, inadequate ligament or tendon strength,
                        inadequate muscle or cardiovascular endurance,
                        inadequate muscle bulk, problems with flexibility and
                        problems related to body composition.
                    </p>
                    <img
                        className="modal-services-title-image"
                        src={rehab2}
                        alt="rehab"
                    />
                    <p>
                        Contact Us with your questions or for more information
                        about rehabilitative exercises.
                    </p>
                </div>
                <a
                    className="modal-services-button-link"
                    href="https://fitzgeraldspinesports.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="modal-services-button">Book now</Button>
                </a>
            </div>
            <div className="overlay-bottom">&nbsp;</div>
        </div>
    );
};

export default Rehab;
