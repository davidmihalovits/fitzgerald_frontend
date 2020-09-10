import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./about.sass";
import Button from "@material-ui/core/button";
import brian from "../../assets/brian.jpg";
import reilly from "../../assets/reilly.jpg";
import speares from "../../assets/speares.jpg";
import kristen from "../../assets/kristen.jpg";
import suz from "../../assets/suz.jpg";
import Suz from "./modal/suz";
import Kristen from "./modal/kristen";
import Speares from "./modal/speares";
import Reilly from "./modal/reilly";
import Brian from "./modal/brian";

const About = () => {
    const [showModalSuz, setShowModalSuz] = useState(false);
    const [showModalKristen, setShowModalKristen] = useState(false);
    const [showModalSpeares, setShowModalSpeares] = useState(false);
    const [showModalReilly, setShowModalReilly] = useState(false);
    const [showModalBrian, setShowModalBrian] = useState(false);

    const closeModal = () => {
        setShowModalSuz(false);
        setShowModalKristen(false);
        setShowModalSpeares(false);
        setShowModalReilly(false);
        setShowModalBrian(false);
    };

    if (
        showModalSuz ||
        showModalKristen ||
        showModalSpeares ||
        showModalReilly ||
        showModalBrian
    ) {
        document.getElementById("root").style.opacity = "0.2";
        document.body.classList.add("modal-open");
    } else {
        document.getElementById("root").style.opacity = "1";
        document.body.classList.remove("modal-open");
    }

    useEffect(() => {
        ReactDOM.render(
            <React.StrictMode>
                {showModalSuz && (
                    <Suz
                        closeModal={closeModal}
                        setShowModalSuz={setShowModalSuz}
                    />
                )}
                {showModalKristen && (
                    <Kristen
                        closeModal={closeModal}
                        setShowModalKristen={setShowModalKristen}
                    />
                )}
                {showModalSpeares && (
                    <Speares
                        closeModal={closeModal}
                        setShowModalSpeares={setShowModalSpeares}
                    />
                )}
                {showModalReilly && (
                    <Reilly
                        closeModal={closeModal}
                        setShowModalReilly={setShowModalReilly}
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
    }, [
        showModalBrian,
        showModalReilly,
        showModalSpeares,
        showModalKristen,
        showModalSuz,
    ]);

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
                    <div className="brian-reilly-speares">
                        <div className="member">
                            <img
                                className="member-image"
                                src={brian}
                                alt="brian"
                            />
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
                                src={reilly}
                                alt="reilly"
                            />
                            <h2 className="member-name">Dr. Reilly</h2>
                            <p className="member-description">
                                Sports Medicine, Shoulders, Neck, Back / Spinal
                                Conditions, Knee, Pediatrics and Pregnancy
                            </p>
                            <Button
                                className="read-more-button"
                                onClick={() => setShowModalReilly(true)}
                            >
                                Read more
                            </Button>
                        </div>
                        <div className="member">
                            <img
                                className="member-image"
                                src={speares}
                                alt="speares"
                            />
                            <h2 className="member-name">Dr. Speares</h2>
                            <p className="member-description">
                                Sports Medicine, Shoulders, Neck, Back / Spinal
                                Conditions, Dry Needling, Rehabilitation
                            </p>
                            <Button
                                className="read-more-button"
                                onClick={() => setShowModalSpeares(true)}
                            >
                                Read more
                            </Button>
                        </div>
                    </div>
                    <div className="kristen-suz">
                        <div className="member">
                            <img
                                className="member-image"
                                src={kristen}
                                alt="kristen"
                            />
                            <h2 className="member-name">
                                Kristen Magee PT, MSPT
                            </h2>
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
                        <div className="member">
                            <img className="member-image" src={suz} alt="suz" />
                            <h2 className="member-name">
                                Suzanne - Office Manager
                            </h2>
                            <div
                                style={{ height: "67.2px", marginTop: "15px" }}
                            />
                            <Button
                                className="read-more-button"
                                onClick={() => setShowModalSuz(true)}
                            >
                                Read more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
