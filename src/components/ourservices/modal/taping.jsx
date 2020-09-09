import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/button";
import "./servicesModal.sass";
import taping1 from "../../../assets/taping1.jpg";
import taping2 from "../../../assets/taping2.jpg";
import taping3 from "../../../assets/taping3.jpg";
import taping4 from "../../../assets/taping4.jpg";

const Sport = (props) => {
    const [kt, setKt] = useState(true);
    const [st, setSt] = useState(false);
    const [rt, setRt] = useState(false);

    const ktTrue = () => {
        setKt(true);
        setSt(false);
        setRt(false);
    };

    const stTrue = () => {
        setKt(false);
        setSt(true);
        setRt(false);
    };

    const rtTrue = () => {
        setKt(false);
        setSt(false);
        setRt(true);
    };

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
                <h1 className="modal-services-title">Taping Techniques</h1>
                <div className="modal-services-buttons">
                    <Button
                        className={`${kt ? `selected` : `not-selected`}`}
                        onClick={ktTrue}
                    >
                        KT
                    </Button>
                    <Button
                        className={`${st ? `selected` : `not-selected`}`}
                        onClick={stTrue}
                    >
                        ST
                    </Button>
                    <Button
                        className={`${rt ? `selected` : `not-selected`}`}
                        onClick={rtTrue}
                    >
                        RT
                    </Button>
                </div>
                <div className="modal-description">
                    {kt && (
                        <>
                            <h2 className="modal-description-title">
                                Kinesio Taping:
                            </h2>
                            <p>
                                Kinesio Taping Method involves taping over and
                                around muscles in order to improve muscular
                                function, decrease pain or abnormal skin
                                sensations, improve lymphatic flow to decrease
                                swelling and bruising, and assist in proper
                                alignment of joints. Due to the specific type of
                                tape used, Kinesio Taping allows for full range
                                of motion of the injured tissues while
                                maintaining support.
                            </p>
                            <br />
                            <p>
                                Kinesio taping can be applied to injuries
                                including:
                            </p>
                            <br />
                            <p>- Any sprain/strain in the body</p>
                            <p>- Postural Disorders</p>
                            <p>- Rotator Cuff/Shoulder Injuries</p>
                            <p>- Tennis/Golfer's Elbow</p>
                            <p>- Carpal Tunnel Syndrome</p>
                            <p>- Iliotibial Band Syndrome (ITB Syndrome)</p>
                            <p>- Knee Tracking or Tendon Disorders</p>
                            <p>- Ankles Sprains</p>
                            <p>
                                - Reduction of Traumatic or Post-Surgical
                                Swelling or Bruising
                            </p>
                            <br />
                            <p>
                                Contact us for more information on the Kinesio
                                Taping Method.
                            </p>
                        </>
                    )}
                    {st && (
                        <>
                            <h2 className="modal-description-title">
                                SpiderTech Taping:
                            </h2>
                            <p>
                                SpiderTech tape is a non-medicated cotton
                                kinesiology tape that you apply to your body
                                wherever it hurts.
                            </p>
                            <br />
                            <p>
                                Each Spider is made of one continuous piece of
                                Kinesiology tape so that it integrates with the
                                body in a super-functional manner. The tape has
                                a very specific elasticity built into the weave
                                pattern of the cotton fabric, which mimics the
                                elasticity and thickness of human skin, allowing
                                it to integrate, support and stabilize without
                                adversely affecting healthy ranges of motion.
                            </p>
                            <img
                                className="modal-services-title-image"
                                src={taping1}
                                alt="taping"
                            />
                            <h2 className="modal-description-title">
                                What are the Spiders made of?
                            </h2>
                            <p>
                                All SpiderTech products are made from the
                                industry trusted kinesiology tape manufacturer
                                from Japan.
                            </p>
                            <br />
                            <p>
                                Kinesiology taping products are engineered to
                                mimic the thickness, weight and elasticity of
                                human skin.
                            </p>
                            <br />
                            <p>
                                The material is made of high-grade 100% cotton
                                with a 100% poly-acrylic adhesive. There is no
                                latex in the product.
                            </p>
                            <img
                                className="modal-services-title-image"
                                src={taping2}
                                alt="taping"
                            />
                            <p>
                                SpiderTech is water-resistant and breathable,
                                and can be worn for many days. SpiderTech
                                products are designed to be worn during
                                strenuous exercise. The non-latex adhesive holds
                                when you need it to and does not leave residue
                                when removed.
                            </p>
                        </>
                    )}
                    {rt && (
                        <>
                            <h2 className="modal-description-title">
                                Rocktape:
                            </h2>
                            <p>
                                RockTape is a special kind of tape known as
                                kinesiology tape. First used by acupuncturists
                                and chiropractors in Japan, today kinesiology
                                tape is used by practitioners throughout the
                                world to treat injuries and improve sports
                                performance.
                            </p>
                            <img
                                className="modal-services-title-image"
                                src={taping3}
                                alt="taping"
                            />
                            <p>
                                While the use of kinesiology is often associated
                                with athletes such as Serena Williams, Kerri
                                Walsh and Lance Armstrong, the reality is that
                                RockTape is effective for the treatment of a
                                wide variety of problems, not just sports
                                injuries.
                            </p>
                            <h2 className="modal-description-title">
                                What is Rocktape used for?
                            </h2>
                            <p>Achilles tendonitis</p>
                            <p>Plantar fasciitis</p>
                            <p>Jumpers knee (PFS)</p>
                            <p>ACL/MCL issues</p>
                            <p>Rotator cuff</p>
                            <p>Groin and hamstring pulls</p>
                            <p>Lower back issues</p>
                            <p>Shin splints</p>
                            <p>Tennis and golf elbow</p>
                            <p>Pain associated with pregnancy</p>
                            <p>Postural correction</p>
                            <img
                                className="modal-services-title-image"
                                src={taping4}
                                alt="taping"
                            />
                            <h2 className="modal-description-title">
                                Improving Sports Performance
                            </h2>
                            <p>
                                While we can’t turn a 5 hour marathoner into a 3
                                hour runner, we do have methods to help you
                                break the 3 hour barrier if you’re already
                                close. When applied properly, Rocktape can help
                                athletes improve form and decrease fatigue
                                through better blood flow. These are the two
                                most critical aspects of increasing performance
                                in almost any sport.
                            </p>
                            <h2 className="modal-description-title">
                                How does Rocktape work?
                            </h2>
                            <p>
                                RockTape's manufacturing process introduces a
                                bias into the weave of the fabric so it
                                stretches in one direction and not the other.
                                This creates a bio-mechanical lifting mechanism
                                that lifts the skin away from the soft tissue
                                underneath, which allows more blood to move into
                                an injured area to accelerate healing and
                                recovery.
                            </p>
                            <h2 className="modal-description-title">
                                What is Rocktape made of?
                            </h2>
                            <p>
                                Rocktape is a natural-hybrid product and
                                consists of 97% cotton, 3% nylon and uses no
                                drugs. The adhesive is a hypo-allergenic acrylic
                                based adhesive and contains no latex.
                            </p>
                            <br />
                            <p>
                                Contact Us with your questions or for more
                                information about what RockTape can do for you.
                            </p>
                        </>
                    )}
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

export default Sport;
