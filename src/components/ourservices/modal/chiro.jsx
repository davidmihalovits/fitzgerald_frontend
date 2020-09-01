import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/button";
import "./servicesModal.sass";

const Chiro = (props) => {
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
                <h1 className="modal-services-title">Chiropractic Care</h1>
                <div className="modal-description">
                    <p>
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
                    <br />
                    <p>
                        A chiropractic adjustment is the art of applying a
                        specific force in a precise direction to a joint that is
                        restricted. This helps to release the joint so that it
                        can again move properly. The result is improved muscle,
                        joint, and nervous system function. A strong emphasis is
                        also placed on rehabilitation exercises, especially in
                        long standing or recurring problems.
                    </p>
                    <h2 className="modal-description-title">
                        Chiropractic Treatment
                    </h2>
                    <p>
                        The most common therapeutic procedure performed by
                        doctors of chiropractic is known as spinal manipulation
                        also called chiropractic adjustment. The purpose of
                        manipulation is to restore joint mobility by manually
                        applying a controlled force into joints that have become
                        restricted in their movement as a result of a soft
                        tissue injury. Tissue injury can be caused by a single
                        traumatic event, such as improper lifting of a heavy
                        object, or through repetitive stresses, such as sitting
                        in an awkward position with poor spinal posture for an
                        extended period of time. In either case, injured tissues
                        undergo physical and chemical changes that can cause
                        inflammation, pain, and diminished function to the
                        sufferer. Manipulation, or adjustment of the affected
                        joint and tissues, restores mobility, thereby
                        alleviating pain and muscle tightness, and allowing
                        tissues to heal.
                    </p>
                    <br />
                    <p>
                        Fitzgerald Spine & Sports Care will refer patients to
                        the appropriate health care provider when chiropractic
                        care is not suitable for the patient's condition, or the
                        condition warrants co-management in conjunction with
                        other members of the health care team.
                    </p>
                    <h2 className="modal-description-title">
                        Soft Tissue Treatment with Chiropractic
                    </h2>
                    <p>
                        In conjunction with standard chiropractic treatment, our
                        doctors incorporate soft tissue techniques (e.g. active
                        release techniques) to more effectively facilitate
                        healing and allow for a much gentler adjustment.
                    </p>
                    <br />
                    <p>
                        Hardened and stuck together (adhesed-fibrosed) soft
                        tissues will restrict movement of the bones at the joint
                        creating abnormal motion. By treating and therefore
                        removing the cause of the joint restriction, the
                        adjustment is more effective and longer lasting. Also,
                        the bones and joints move easier allowing for a gentler
                        chiropractic adjustment.
                    </p>
                    <br />
                    <p>
                        Contact Us with your questions or for more information
                        about Chiropractic care.
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

export default Chiro;
