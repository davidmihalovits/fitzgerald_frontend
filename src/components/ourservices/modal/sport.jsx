import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/button";
import "./servicesModal.sass";
import sport from "../../../assets/sport.jpg";

const Sport = (props) => {
    const [pc, setPc] = useState(true);
    const [ya, setYa] = useState(false);

    const pcTrue = () => {
        setPc(true);
        setYa(false);
    };

    const yaTrue = () => {
        setPc(false);
        setYa(true);
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
                <h1 className="modal-services-title">Performance Care</h1>
                <Button
                    className={`button-change-text ${
                        pc ? `selected` : `not-selected`
                    }`}
                    onClick={pcTrue}
                >
                    PC
                </Button>
                <Button
                    className={`button-change-text ${
                        ya ? `selected` : `not-selected`
                    }`}
                    onClick={yaTrue}
                >
                    YA
                </Button>
                <div className="modal-description">
                    {pc && (
                        <>
                            <h2 className="modal-description-title">
                                What is Performance Care?
                            </h2>
                            <p>
                                Performance Care is a suite of services provided
                                at FSSC individually crafted to improve an
                                athlete’s performance in his or her chosen
                                sport. We know that subtle or dramatic changes
                                in the physiology of an athlete’s body can have
                                a tremendous impact upon the time and effort
                                required to perform an activity. A difference of
                                just a few seconds improvement in a runner’s
                                performance can mean the difference between a
                                win or loss. However, difficult training
                                regimes, repetitive motions (swimming, running,
                                cycling), and overworked muscles all place a
                                great deal of stress on an athlete’s body. These
                                stresses cause physiological changes that cannot
                                be counter-acted by simple exercise regimes.
                                They require physical manipulation of the
                                tissues to remove the problem and return the
                                athlete to optimal performance in any sport,
                                from triathlon, weight lifting, skiing and
                                tennis to running, cycling, golf, and swimming.
                            </p>
                            <h2 className="modal-description-title">
                                How does Performance Care Differ from the
                                Cumulative Injury Care
                            </h2>
                            <p>
                                Performance Care is used to increase the
                                performance of an athlete (speed, endurance,
                                strength) by working with soft tissues, joints,
                                and body awareness to enhance their performance.
                                In contrast, Injury Care deals with known,
                                existing, identifiable injuries to soft tissue.
                                Its goal is to address the cause of these
                                injuries, and return the soft tissues to normal
                                condition. Performance Care identifies unnoticed
                                or hidden restrictions in the motion of the
                                body, and removes these restrictions to restore
                                full function. Performance Care requires a good
                                understanding of the biomechanics of the human
                                body.
                            </p>
                            <h2 className="modal-description-title">
                                When to use Performance Care
                            </h2>
                            <p>
                                Performance Care treatment methods are used
                                after treating existing pain, dysfunction, or
                                trauma. That is, after Injury Care has been
                                applied. Subsequently, Performance Care methods
                                are employed to address the most significant
                                dysfunction affecting performance. Often, these
                                may be the same areas as the existing pain or
                                dysfunction.
                            </p>
                            <br />
                            <p>
                                Contact us for more information about
                                Performance Care.
                            </p>
                        </>
                    )}
                    {ya && (
                        <>
                            <h2 className="modal-description-title">
                                Keep Young Athletes Healthy and Fit
                            </h2>
                            <p>
                                In today’s age of health and fitness, more and
                                more kids are involved in sporting activities.
                                Although being part of a football, soccer or
                                Little League team is an important rite of
                                passage for many children, parents and their
                                children could be overlooking the importance of
                                proper nutrition and body-conditioning needed
                                for preventing injuries on and off the playing
                                field.
                            </p>
                            <br />
                            <p>
                                The majority, if not all, sports are good,
                                provided that the child prepares appropriately.
                                Without proper preparation, playing any sport
                                can turn into a bad experience. There are
                                structural and physical developmental issues
                                that need to be taken into consideration before
                                children undertake certain sports.
                            </p>
                            <br />
                            <p>
                                Highly competitive sports such as football,
                                gymnastics and wrestling follow rigorous
                                training schedules that can be potentially
                                dangerous to an adolescent or teenager. The best
                                advice for parents who have young athletes in
                                the family is to help them prepare their bodies
                                and to learn to protect themselves from sports
                                related injuries before they happen.
                            </p>
                            <br />
                            <p>
                                Proper warm up, stretching and strength-training
                                exercises are essential for kids involved in
                                sports.
                            </p>
                            <br />
                            <p>
                                Fitzgerald Spine & Sports Care providers work
                                with teens and children who are involved in
                                sports, assessing their structure and physical
                                capabilities to help current injuries heal and
                                prevent future injuries.
                            </p>
                            <img
                                className="modal-services-title-image"
                                src={sport}
                                alt="Keep Young Athletes Healthy and Fit"
                            />
                            <p>
                                Contact Us for more information about care for
                                Young Athletes.
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
