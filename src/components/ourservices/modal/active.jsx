import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/button";
import active from "../../../assets/active.jpg";
import "./servicesModal.sass";
import AOS from "aos";
import "aos/dist/aos.css";

const Active = (props) => {
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
    useOnClick(ref, () => props.setShowModalActive(false));

    return (
        <div
            className="modal-services-container"
            data-aos="zoom-in-up"
            ref={ref}
        >
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
                    Active Release Technique
                </h1>
                <img
                    className="modal-services-title-image"
                    src={active}
                    alt="active release technique"
                />
                <div className="modal-description">
                    <p>
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
                    <h2 className="modal-description-title">
                        How Active Release Techniques® works
                    </h2>
                    <p>
                        ART® is a manual therapy designed specifically to find
                        scars in damaged tissue and release the adhesions that
                        result. Fibrous adhesions are produced in an injury or
                        when a muscle is deprived of oxygen. The adhesions act
                        like tiny dabs of glue sticking to muscle fibers and
                        between connective tissues, preventing the normal
                        sliding movements that occur between healthy tissue.
                        Adhesions limit muscle or joint movement and can create
                        abnormal or painful motion. Adhesions to a nerve can
                        cause numbness, tingling or radiating pain, e.g. carpal
                        tunnel syndrome or the radiating leg pain of sciatica.
                    </p>
                    <br />
                    <p>
                        By focusing on these adhesions, ART can help with
                        numerous conditions that result in pain, numbness,
                        weakness or loss of mobility. ART can play a key role in
                        improving athletic performance and injury prevention.
                    </p>
                    <br />
                    <p>
                        Increasing numbers of chiropractors, physicians,
                        osteopaths, physical and occupational therapists are
                        using ART® . Professional, amateur athletic programs and
                        many world-class athletes recognize these techniques as
                        a successful way of treating and managing soft tissue
                        injuries.
                    </p>
                    <h2 className="modal-description-title">
                        Benefits of Active Release Techniques® Treatment
                    </h2>
                    <p>
                        ART® can often help with a variety of soft tissue
                        conditions such as:
                    </p>
                    <p>- tennis and golfers elbow</p>
                    <p>- back and shoulder pain</p>
                    <p>- whiplash</p>
                    <p>- plantar fasciitis</p>
                    <p>- achilles tendonitis</p>
                    <p>- shin splints</p>
                    <p>
                        ART® can be effective where adhesions have entrapped
                        nerves such as in carpal tunnel syndrome, sciatica and
                        headaches. In addition, this therapy can help in acute
                        injuries by working the surrounding tissues to lessen
                        the stress on the injury itself. In later stages the
                        injury site can be worked to maximize the quality of the
                        stabilizing scar tissue and minimize the overproduction
                        of scar tissue.
                    </p>
                    <br />
                    <p>
                        ART® is also effective for joint conditions. Adhesions
                        can limit a muscle’s ability to lengthen, which can
                        alter the biomechanics of the joint. This can lead to
                        decreased mobility of the joint or abnormal motion,
                        which in turn can cause wear and tear on the joint.
                        Examples include spinal joint conditions, shoulder
                        impingements, and runner’s knee.
                    </p>
                    <h2 className="modal-description-title">
                        What to Expect from an Active Release Techniques®
                        Treatment Program
                    </h2>
                    <p>
                        Correct diagnosis of soft tissue injury is essential for
                        effective treatment, so we carefully evaluate the
                        texture, tension and movement of an injury and
                        surrounding tissues.
                    </p>
                    <br />
                    <p>
                        After the injury has been evaluated, it is treated
                        manually. The most common method is to move the tissue
                        through a full range of motion while applying manual
                        force along the scar tissue.
                    </p>
                    <br />
                    <p>
                        A treatment session typically lasts about 15 to 20
                        minutes. We use a thumb or finger contact to find and
                        differentiate the tissues, their motions, and any
                        adhesions.
                    </p>
                    <br />
                    <p>
                        The patient actively moves the limb or body to separate
                        and create tension between the tissues while the contact
                        breaks through the adhesions.
                    </p>
                    <br />
                    <p>
                        ART® is usually a very effective treatment on its own.
                        However it can be combined with other types of treatment
                        that contribute to optimal joint function. Chiropractic
                        manipulation is often used in combination with ART®
                        (especially with spinal conditions). As well,
                        rehabilitative exercises to improve strength and
                        flexibility are usually necessary.
                    </p>
                    <br />
                    <p>
                        In many cases the problem is fixed, or significant
                        improvement is seen, in four to five treatments. If we
                        have not seen a change by this time, further
                        investigation may be advised.
                    </p>
                    <br />
                    <p>
                        Contact Us for more information about Active Release
                        Techniques.
                    </p>
                </div>
                <a
                    href="https://fitzgeraldspinesports.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-services-button-link"
                >
                    <Button className="modal-services-button">Book now</Button>
                </a>
            </div>
            <div className="overlay-bottom">&nbsp;</div>
        </div>
    );
};

export default Active;
