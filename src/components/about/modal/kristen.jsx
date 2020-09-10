import React, { useEffect, useRef } from "react";
import "./aboutModal.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import kristen from "../../../assets/kristen.jpg";
import Button from "@material-ui/core/button";
import AOS from "aos";
import "aos/dist/aos.css";

const Kristen = (props) => {
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
    useOnClick(ref, () => props.setShowModalKristen(false));

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
                <h1 className="about-modal-title">Kristen Magee, PT, MSPT</h1>
                <img
                    className="about-modal-image"
                    src={kristen}
                    alt="kristen"
                />
                <div className="about-modal-box">
                    <div className="about-modal-box-bio">
                        <p className="about-modal-paragraph">
                            Kristen studied Kinesiology and Dance at University
                            of Maryland where she earned her BS degree. She
                            graduated from Marymount University in 1999 with a
                            Master’s of Science in Physical Therapy. For the
                            past 15 years she has been working in the DC metro
                            area at private clinics and at larger institutions
                            such as The George Washington University Hospital
                            and Kaiser Permanente. Kristen’s interests and
                            expertise lay in orthopedics and sports
                            rehabilitation. She believes in a holistic and
                            integrated approach to healing. She uses a wide
                            variety of hands-on techniques such as ART, as well
                            as precise exercise prescription and other physical
                            therapy modalities to promote healing, wellness and
                            return to sports and normal activities.
                            <br />
                            <br />
                            Kristen has been practicing yoga for 10 years and in
                            2012 completed yoga teacher training. Over the last
                            five years she has been studying Reiki and is a
                            Certified Reiki Master Practitioner and a Karuna
                            Reiki Master Practitioner. She is currently in year
                            two of a three year apprenticeship program for
                            community healing. She enjoys bringing these talents
                            to the art of healing through physical therapy.
                            <br />
                            <br />
                            Other interests include dance, musical theater and
                            spending time with her family and friends. Kristen
                            has an avid interest in the arts and performs often
                            with local theatre companies. She has also recently
                            started to choreograph musicals for community
                            theatre.
                        </p>
                    </div>
                    <div className="about-modal-edu">
                        <h2 className="about-modal-edu-title">Education</h2>
                        <p>
                            - BS, Kinesiology University of Maryland, College
                            Park
                        </p>
                        <p>- MS, Physical Therapy Marymount University</p>
                        <h2 className="about-modal-edu-title">
                            Board Certified
                        </h2>
                        <p>- Physical Therapist VA Board of Medicine</p>
                        <h2 className="about-modal-edu-title">
                            Areas of Specialization
                        </h2>
                        <p>- Rehabilitation and Therapeutic Exercise</p>
                        <p>- Myofascial Release and Soft Tissue Mobilization</p>
                        <p>- Active Release Technique</p>
                        <p>
                            - Orthopedic Injuries and Post Surgical
                            Rehabilitation
                        </p>
                        <p>- Sports injuries</p>
                        <p>- Yoga and Dance Injuries</p>
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

export default Kristen;
