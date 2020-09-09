import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/button";
import "./servicesModal.sass";
import iastm1 from "../../../assets/iastm1.jpg";
import iastm2 from "../../../assets/iastm2.jpg";
import dms1 from "../../../assets/dms1.jpg";

const Active = (props) => {
    const [iastm, setIastm] = useState(true);
    const [dms, setDms] = useState(false);

    const iastmTrue = () => {
        setIastm(true);
        setDms(false);
    };

    const dmsTrue = () => {
        setIastm(false);
        setDms(true);
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
                <h1 className="modal-services-title">
                    Soft Tissue & Muscle Therapy
                </h1>
                <div className="modal-services-buttons">
                    <Button
                        className={`${iastm ? `selected` : `not-selected`}`}
                        onClick={iastmTrue}
                    >
                        IASTM
                    </Button>
                    <Button
                        className={`${dms ? `selected` : `not-selected`}`}
                        onClick={dmsTrue}
                    >
                        DMS
                    </Button>
                </div>
                <div className="modal-description">
                    {iastm && (
                        <>
                            <h2 className="modal-description-title">
                                Instrument Assisted Soft Tissue Mobilization
                            </h2>
                            <p>
                                IASTM is another treatment mode to resolve pain
                                and tightness in the body. This approach to
                                fascia work reduces friction which allows a
                                preciseness, sensitivity and depth that cannot
                                be accomplished by the practitioner directly.
                            </p>
                            <br />
                            <p>
                                IASTM instruments make it easier to detect and
                                treat fascial dysfunction. They magnify the
                                abnormalities (scars, restrictions and
                                adhesions) in the fascia and make it easier to
                                locate the area to treat. Using a tool focuses
                                the force through an area smaller then your
                                finger with less friction. This allows a more
                                efficient treatment. The goal is to trigger an
                                inflammatory healing response. This will
                                stimulate the production of new collagen and
                                proper, more functional, less painful healing.
                            </p>
                            <h2 className="modal-description-title">
                                Benefits of IASTM
                            </h2>
                            <img
                                className="modal-services-title-image"
                                src={iastm1}
                                alt="Instrument Assisted Soft Tissue Mobilization"
                            />
                            <p>- Decreases overall time of treatment</p>
                            <p>- Allows faster rehabilitation/recovery</p>
                            <p>
                                - Reduces need for anti-inflammatory medication
                            </p>
                            <p>
                                - Resolves chronic conditions thought to be
                                permanent
                            </p>
                            <p>
                                - Clients can continue to engage in everyday
                                activities
                            </p>
                            <h2 className="modal-description-title">
                                Common Issues Treated
                            </h2>
                            <img
                                className="modal-services-title-image"
                                src={iastm2}
                                alt="Instrument Assisted Soft Tissue Mobilization"
                            />
                            <p>- Cervical sprain/strain (neck pain)</p>
                            <p>- Lumbar sprain/strain (back pain)</p>
                            <p>- Carpal Tunnel Syndrome (wrist pain)</p>
                            <p>- Plantar Fasciitis (foot pain)</p>
                            <p>- Lateral Epicondylitis (tennis elbow)</p>
                            <p>- Medial Epicondylitis (golfer's elbow)</p>
                            <p>- Rotator Cuff Tendinitis (shoulder pain)</p>
                            <p>- Patellofemoral Disorders (knee pain)</p>
                            <p>- Achilles Tendinitis (ankle pain)</p>
                            <p>- Scar Tissue</p>
                            <p>- Trigger Finger</p>
                            <p>- Shin Splints</p>
                            <br />
                            <p>
                                The instruments are skillfully used to
                                facilitate healing and desired remodeling of the
                                soft tissues. The result is restoration of
                                mobility and restored function. This treatment
                                is a very useful adjunct to other manual
                                treatments such as ART and chiropractic.
                            </p>
                            <br />
                            <p>
                                Contact Us with your questions or for more
                                information about treatment with Instrument
                                Assisted Soft Tissue Mobilization.
                            </p>
                        </>
                    )}
                    {dms && (
                        <>
                            <h2 className="modal-description-title">
                                Deep Muscle Stimulator
                            </h2>
                            <img
                                className="modal-services-title-image"
                                src={dms1}
                                alt=" Deep Muscle Stimulator"
                            />
                            <p>
                                Much of muscle pain stems from various
                                conditions, strain, lactic acid build up, scar
                                tissue, etc… The DMS uses percussion, mechanical
                                vibrations that reach deep into the muscle
                                tissue to stimulate proprioceptive functions. No
                                other device on the market matches the
                                effectiveness of the DMS.
                            </p>
                            <br />
                            <p>
                                The DMS provides deep muscle tissue with kinetic
                                forms of percussion and concussion vibration,
                                which in turn facilitates the patient or athlete
                                with the benefits of:
                            </p>
                            <br />
                            <p>- Increased circulation</p>
                            <p>- Reduced pain</p>
                            <p>- Faster rehabilitation from injury</p>
                            <p>- Increased lymphatic flow</p>
                            <p>- Break up of muscular scar tissue</p>
                            <p>- Reduced lactic acid build up</p>
                            <p>- Tissue regeneration</p>
                            <p>- Soft & Active tissue release</p>
                            <br />
                            <p>
                                The DMS also concentrates on general or local
                                muscle spasms. It increases muscle metabolism
                                and increases the lactic acid cycle to relieve
                                pain. Deep, rapid, short-duration percussion is
                                the key to the elimination of pain. The DMS can
                                be used in effective management of acute and
                                chronic pain, not exclusive to, but including:
                                migraine headaches, sciatica, TMJ, carpal tunnel
                                syndrome, tendonitis, bursitis, edema,
                                myofascial pain and frozen joints.
                            </p>
                            <br />
                            <p>
                                The Deep Muscle Stimulator is known to increase
                                the circulation of blood and flow of lymph. The
                                direct mechanical effect of rhythmical pressure
                                and movement used in DMS can dramatically
                                increase the rate of blood flow. The stimulation
                                of nerve receptors causes the blood vessels to
                                dilate, which also facilitates blood flow.
                            </p>
                            <br />
                            <p>
                                DMS can help loosen contracted, shortened
                                muscles and can stimulate weak, flaccid muscles.
                                This muscle “balancing” can help posture and
                                promote more efficient movement. DMS is also
                                being used for Integrated Manual Therapy and
                                Musculoskeletal Dysfunction.
                            </p>
                            <br />
                            <p>
                                It is possible to do more exercise and training,
                                which in the long run strengthens muscle and
                                improves conditioning. DMS also provides a
                                gentle stretching action to both the muscles and
                                connective tissues that surround and support the
                                muscles and many other parts of the body, which
                                helps keep these tissues elastic.
                            </p>
                            <br />
                            <p>
                                DMS also aids recovery from soft tissue injuries
                                such as sprains and strains. This is possible
                                because the growth and repair of tissue are
                                accelerated by efficient circulation in the
                                injured areas and appropriate stimulation of the
                                healing tissues.
                            </p>
                            <h2 className="modal-description-title">
                                Who Uses the DMS?
                            </h2>
                            <p>
                                Dr. Pivaroff developed the DMS to be used in all
                                physical therapy clinics, chiropractic offices,
                                hospital rehabilitation, sports trainers and
                                massage therapists. The DMS can be used on
                                trigger points or you can isolate a specific
                                muscle group. The DMS is used to treat the
                                entire body. It is an excellent tool to be used
                                pre and post rehabilitation and workouts.
                            </p>
                            <br />
                            <p>
                                Contact Us with your questions or for more
                                information about treatment with DMS.
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

export default Active;
