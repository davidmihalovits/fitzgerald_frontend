import React, { useEffect, useRef } from "react";
import "./aboutModal.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import speares from "../../../assets/speares.jpg";
import Button from "@material-ui/core/button";
import AOS from "aos";
import "aos/dist/aos.css";

const Speares = (props) => {
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
    useOnClick(ref, () => props.setShowModalSpeares(false));

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
                <h1 className="about-modal-title">Jordan P. Speares, D.C.</h1>
                <img
                    className="about-modal-image"
                    src={speares}
                    alt="speares"
                />
                <div className="about-modal-box">
                    <div className="about-modal-box-bio">
                        <p className="about-modal-paragraph">
                            Dr. Speares is a 2011 graduate of National
                            University of Health Sciences in Lombard, Illinois.
                            She has been working at Fitzgerald Spine & Sports
                            Care since 2013. Prior to joining Fitzgerald Spine &
                            Sports Care she has been practicing in the greater
                            DC metropolitan area.
                            <br />
                            <br />
                            Dr. Speares has taken additional courses in Active
                            Release Technique, Kinesiotape, Dry Needling
                            Technique, Graston Techniques, Advanced Orthopedics,
                            Gait Analysis and Imbalances, Treatment of Golf
                            Injuries, Motion Palpation, Selective Functional
                            Movement Assessment, and Functional Rehabilitation.
                            She is certified in Active Release Technique (ART),
                            Graston Technique, Kinesiotape, and Dry Needling
                            Technique. She uses a combination of the various
                            techniques in order to help her patients.
                            <br />
                            <br />
                            Dr. Speares has provided care for a variety of
                            patients. She participates in CrossFit and treats
                            many CrossFit athletes. She attended the Susan G.
                            Komen 3-Day event in Chicago as a member of the
                            medical team. She also attended and was involved in
                            local Relay for Life events. Additionally, she has
                            treated athletes at a Mixed Martial Arts gym and had
                            patients at the Salvation Army clinic. She enjoys
                            treating patients of all ages and athletic levels.
                            <br />
                            <br />
                            Dr. Speares was raised in Blacksburg, Virginia and
                            currently lives in Sterling, Virginia. In her spare
                            time, she enjoys working out, traveling and spending
                            time with her friends and family.
                        </p>
                    </div>
                    <div className="about-modal-edu">
                        <h2 className="about-modal-edu-title">Education</h2>
                        <p>
                            - BS, Human Nutrition Foods & Exercise - Virginia
                            Polytechnic Institute
                        </p>
                        <p>
                            - DC, Doctor of Chiropractic - National University
                            of Health Sciences
                        </p>
                        <h2 className="about-modal-edu-title">
                            Board Certified
                        </h2>
                        <p>- Doctor of Chiropractic – VA board of Medicine</p>
                        <h2 className="about-modal-edu-title">
                            Areas of Specialization
                        </h2>
                        <p>- Sports Medicine</p>
                        <p>- Active Release Technique</p>
                        <p>- Neck</p>
                        <p>- Back / Spinal Conditions</p>
                        <p>- Dry Needling</p>
                        <p>- Rehabilitation</p>
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

export default Speares;
