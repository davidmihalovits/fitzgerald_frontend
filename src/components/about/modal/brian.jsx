import React, { useEffect, useRef } from "react";
import "./aboutModal.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import brian from "../../../assets/brian.jpg";
import Button from "@material-ui/core/button";
import AOS from "aos";
import "aos/dist/aos.css";

const Brian = (props) => {
    AOS.init();

    const useOnClick = (ref, handler) => {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
            };
            // eslint-disable-next-line
        }, []);
    };
    const ref = useRef();
    useOnClick(ref, () => props.setShowModalBrian(false));

    return (
        <div className="about-modal-container" data-aos="zoom-in-up" ref={ref}>
            <div className="modal-x-container">
                <FontAwesomeIcon
                    onClick={props.closeModal}
                    size="2x"
                    className="modal-x"
                    icon={faTimes}
                />
            </div>
            <div className="about-modal">
                <h1 className="about-modal-title">Dr. Brian Fitzgerald</h1>
                <img className="about-modal-image" src={brian} alt="brian" />
                <div className="about-modal-box single">
                    <div className="about-modal-box-bio">
                        <p className="about-modal-paragraph">
                            Dr. Fitzgerald is a 2015 graduate of New York
                            Chiropractic College. He is a 2009 graduate of
                            George Mason University & was a NCAA Division I
                            athlete as a member of the men's tennis team. He has
                            been in practice in the DC metro region since 2015.
                            <br />
                            <br />
                            He has taken advanced training & is certified in Dry
                            Needling, Active Release Techniques, Kinesio Taping,
                            Spine Research Institute of San Diego Modules I-IV,
                            NRCME certification for D.O.T. exams. He uses a
                            combination of various techniques in order to
                            provide the best care for his patients.
                            <br />
                            <br />
                            Dr. Fitzgerald uses an integrative & evidence based
                            approach to health care which allows him to treat a
                            variety of patients. He enjoys treating patients
                            from active healthy to advanced athletes.
                            <br />
                            <br />
                            Dr. Fitzgerald grew up in the Fairfax area, is
                            married, has 3 children. He enjoys the outdoors,
                            swimming, soccer, golf and tennis.
                        </p>
                    </div>
                </div>
                <a
                    href="https://fitzgeraldspinesports.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-modal-button-link"
                >
                    <Button className="about-modal-button">Book now</Button>
                </a>
            </div>
            <div className="overlay-bottom">&nbsp;</div>
        </div>
    );
};

export default Brian;
