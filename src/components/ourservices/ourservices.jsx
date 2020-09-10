import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./ourservices.sass";
import services1 from "../../assets/services1.jpg";
import services2 from "../../assets/services2.jpg";
import services3 from "../../assets/services3.jpg";
import services4 from "../../assets/services4.jpg";
import services5 from "../../assets/services5.jpg";
import services6 from "../../assets/services6.jpg";
import services7 from "../../assets/services7.jpg";
import Button from "@material-ui/core/button";
import Active from "./modal/active";
import Soft from "./modal/soft";
import Chiro from "./modal/chiro";
import Dry from "./modal/dry";
import Rehab from "./modal/rehab";
import Sport from "./modal/sport";
import Taping from "./modal/taping";

const Ourservices = () => {
    const [showModalActive, setShowModalActive] = useState(false);
    const [showModalSoft, setShowModalSoft] = useState(false);
    const [showModalChiro, setShowModalChiro] = useState(false);
    const [showModalDry, setShowModalDry] = useState(false);
    const [showModalRehab, setShowModalRehab] = useState(false);
    const [showModalSport, setShowModalSport] = useState(false);
    const [showModalTaping, setShowModalTaping] = useState(false);

    const closeModal = () => {
        setShowModalActive(false);
        setShowModalSoft(false);
        setShowModalChiro(false);
        setShowModalDry(false);
        setShowModalRehab(false);
        setShowModalSport(false);
        setShowModalTaping(false);
    };

    if (
        showModalActive ||
        showModalSoft ||
        showModalChiro ||
        showModalDry ||
        showModalRehab ||
        showModalSport ||
        showModalTaping
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
                {showModalActive && (
                    <Active
                        closeModal={closeModal}
                        setShowModalActive={setShowModalActive}
                    />
                )}
                {showModalSoft && (
                    <Soft
                        closeModal={closeModal}
                        setShowModalSoft={setShowModalSoft}
                    />
                )}
                {showModalChiro && (
                    <Chiro
                        closeModal={closeModal}
                        setShowModalChiro={setShowModalChiro}
                    />
                )}
                {showModalDry && (
                    <Dry
                        closeModal={closeModal}
                        setShowModalDry={setShowModalDry}
                    />
                )}
                {showModalRehab && (
                    <Rehab
                        closeModal={closeModal}
                        setShowModalRehab={setShowModalRehab}
                    />
                )}
                {showModalSport && (
                    <Sport
                        closeModal={closeModal}
                        setShowModalSport={setShowModalSport}
                    />
                )}
                {showModalTaping && (
                    <Taping
                        closeModal={closeModal}
                        setShowModalTaping={setShowModalTaping}
                    />
                )}
            </React.StrictMode>,
            document.getElementById("modal")
        );
    }, [
        showModalActive,
        showModalSoft,
        showModalChiro,
        showModalDry,
        showModalRehab,
        showModalSport,
        showModalTaping,
    ]);

    return (
        <div className="ourservices">
            <h1 className="title">OUR SERVICES</h1>
            <div className="our-services-flex">
                <div className="ourservices-image-container left">
                    <img
                        className="img-services1"
                        src={services1}
                        alt="Active Release Technique"
                    />
                </div>
                <div className="our-services-flex-text-container right">
                    <h2 className="our-services-flex-title">
                        Active Release Technique
                    </h2>
                    <p className="our-services-flex-description">
                        The goal of ART® is to break up the adhesions or scar
                        tissue commonly found in acute and chronic soft tissue
                        injuries. Soft tissue most commonly refers to muscle,
                        tendon, ligament and nerve. This scar tissue forms as a
                        result of acute injury or repetitive overuse conditions.
                        ART® works to eliminate the pain and dysfunction
                        associated with these adhesions. It accomplishes this by
                        manually treating the affected tissue with precisely
                        directed tension while combining specific patient
                        movements.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalActive(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <div className="our-services-flex-reversed">
                <div className="ourservices-image-container">
                    <img
                        className="img-services2"
                        src={services2}
                        alt="Soft Tissue & Muscle Therapy"
                    />
                </div>
                <div className="our-services-flex-text-container">
                    <h2 className="our-services-flex-title">
                        Soft Tissue & Muscle Therapy
                    </h2>
                    <p className="our-services-flex-description">
                        Instrument Assisted Soft Tissue Mobilization is another
                        treatment mode to resolve pain and tightness in the
                        body. This approach to fascia work reduces friction
                        which allows a preciseness, sensitivity and depth that
                        cannot be accomplished by the practitioner directly.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalSoft(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <div className="our-services-flex">
                <div className="ourservices-image-container">
                    <img
                        className="img-services3"
                        src={services3}
                        alt="Chiropractic"
                    />
                </div>
                <div className="our-services-flex-text-container">
                    <h2 className="our-services-flex-title">Chiropractic</h2>
                    <p className="our-services-flex-description">
                        Chiropractic is a manual approach to health care which
                        includes patient assessment, diagnosis and treatment. In
                        particular, chiropractors assess patients for disorders
                        related to the spine, pelvis, and extremity joints, as
                        well as their effect on the nervous system. As a result
                        of taking a patient history and performing a physical
                        assessment, chiropractors are able to provide a
                        differential diagnosis for the patient's presenting
                        condition(s) and develop a comprehensive treatment plan.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalChiro(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <div className="our-services-flex-reversed">
                <div className="ourservices-image-container">
                    <img
                        className="img-services4"
                        src={services4}
                        alt="Dry Needling"
                    />
                </div>
                <div className="our-services-flex-text-container">
                    <h2 className="our-services-flex-title">Dry Needling</h2>
                    <p className="our-services-flex-description">
                        Dry needling and acupuncture are similar in the sense
                        that the same equipment is used- sterile monofilament
                        acupuncture needles. They way that dry needling is
                        taught and used is what makes it different from
                        acupuncture. Dry needling is used to diagnose and treat
                        musculoskeletal issues, where acupuncture is used for a
                        holistic reason following traditional Chinese Medicine
                        beliefs. Acupuncture follows meridians that are
                        associated with certain points that correspond to the
                        issue the patient presents with. Dry needling is
                        sometimes described as an "intramuscular manual therapy"
                        which means doing manual therapy on the inside of the
                        muscle.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalDry(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <div className="our-services-flex">
                <div className="ourservices-image-container">
                    <img
                        className="img-services5"
                        src={services5}
                        alt="Rehab Exercises"
                    />
                </div>
                <div className="our-services-flex-text-container">
                    <h2 className="our-services-flex-title">Rehab Exercises</h2>
                    <p className="our-services-flex-description">
                        Exercise is an essential factor in injury prevention,
                        sports conditioning, and injury rehabilitation. We can
                        help you with muscular imbalances, faulty neuromuscular
                        coordination, inadequate ligament or tendon strength,
                        inadequate muscle or cardiovascular endurance,
                        inadequate muscle bulk, problems with flexibility and
                        problems related to body composition.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalRehab(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <div className="our-services-flex-reversed">
                <div className="ourservices-image-container">
                    <img
                        className="img-services6"
                        src={services6}
                        alt="Sport Performances"
                    />
                </div>
                <div className="our-services-flex-text-container">
                    <h2 className="our-services-flex-title">
                        Sport Performances
                    </h2>
                    <p className="our-services-flex-description">
                        Performance Care is a suite of services provided at FSSC
                        individually crafted to improve an athlete’s performance
                        in his or her chosen sport. We know that subtle or
                        dramatic changes in the physiology of an athlete’s body
                        can have a tremendous impact upon the time and effort
                        required to perform an activity. A difference of just a
                        few seconds improvement in a runner’s performance can
                        mean the difference between a win or loss. However,
                        difficult training regimes, repetitive motions
                        (swimming, running, cycling), and overworked muscles all
                        place a great deal of stress on an athlete’s body.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalSport(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <div className="our-services-flex">
                <div className="ourservices-image-container">
                    <img
                        className="img-services7"
                        src={services7}
                        alt="Taping"
                    />
                </div>
                <div className="our-services-flex-text-container">
                    <h2 className="our-services-flex-title">Taping</h2>
                    <p className="our-services-flex-description">
                        Kinesio Taping Method involves taping over and around
                        muscles in order to improve muscular function, decrease
                        pain or abnormal skin sensations, improve lymphatic flow
                        to decrease swelling and bruising, and assist in proper
                        alignment of joints. Due to the specific type of tape
                        used, Kinesio Taping allows for full range of motion of
                        the injured tissues while maintaining support.
                    </p>
                    <div className="information-button-container">
                        <Button
                            className="information-button"
                            onClick={() => setShowModalTaping(true)}
                        >
                            More information
                        </Button>
                    </div>
                </div>
            </div>
            <a
                className="book-now-link"
                href="https://fitzgeraldspinesports.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className="book-now-button">Book now</Button>
            </a>
        </div>
    );
};

export default Ourservices;
