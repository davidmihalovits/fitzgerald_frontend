import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./about.sass";
import Button from "@material-ui/core/button";
import brian from "../../assets/brian.jpg";
import kristen from "../../assets/kristen.jpg";
import Kristen from "./modal/kristen";
import Brian from "./modal/brian";

const About = () => {
    const [showModalKristen, setShowModalKristen] = useState(false);
    const [showModalBrian, setShowModalBrian] = useState(false);

    const closeModal = () => {
        setShowModalKristen(false);
        setShowModalBrian(false);
    };

    if (showModalKristen || showModalBrian) {
        document.getElementById("root").style.opacity = "0.2";
        document.body.classList.add("modal-open");
        document.getElementById("root").style.pointerEvents = "none";
    } else {
        document.getElementById("root").style.opacity = "1";
        document.body.classList.remove("modal-open");
        document.getElementById("root").style.pointerEvents = "auto";
    }

    useEffect(() => {
        ReactDOM.render(
            <React.StrictMode>
                {showModalKristen && (
                    <Kristen
                        closeModal={closeModal}
                        setShowModalKristen={setShowModalKristen}
                    />
                )}
                {showModalBrian && (
                    <Brian
                        closeModal={closeModal}
                        setShowModalBrian={setShowModalBrian}
                    />
                )}
            </React.StrictMode>,
            document.getElementById("modal")
        );
    }, [showModalBrian, showModalKristen]);

    return (
        <div className="about-container">
            <div className="about">
                <h1 className="title">ABOUT US</h1>
                <p className="about-description">
                    At Fitzgerald Spine & Sports Care, our primary focus is to
                    provide excellent treatment for neuromusculoskeletal
                    injuries, while achieving individualized health and
                    performance goals that exceed our patient's expectations.
                    Our highly skilled professionals blend traditional methods
                    with innovative techniques to speed healing time and return
                    patients back to their active lifestyles.
                </p>
                <div className="members">
                    <div className="member">
                        <img className="member-image" src={brian} alt="brian" />
                        <h2 className="member-name">Dr. Fitzgerald</h2>
                        <p className="member-description">
                            Sports Medicine, Shoulders, Neck, Back / Spinal
                            Conditions, Knee, Ankle & Foot
                        </p>
                        <Button
                            className="read-more-button"
                            onClick={() => setShowModalBrian(true)}
                        >
                            Read more
                        </Button>
                    </div>
                    <div className="member">
                        <img
                            className="member-image"
                            src={kristen}
                            alt="kristen"
                        />
                        <h2 className="member-name">Kristen Magee PT, MSPT</h2>
                        <p className="member-description">
                            Rehabilitation and Therapeutic Exercise, Active
                            Release Technique, Yoga and Dance Injuries
                        </p>
                        <Button
                            className="read-more-button"
                            onClick={() => setShowModalKristen(true)}
                        >
                            Read more
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
