import React, { Component } from "react";
import "./who.sass";

export class Who extends Component {
    render() {
        return (
            <div className="who">
                <h1 className="title">WHO WE ARE</h1>
                <p className="description">
                    Fitzgerald Spine & Sports Care provides the most current and
                    evidence-based treatments for sports medicine, chiropractic
                    and physical therapy available in the Northern
                    Virginia/Washington DC region. Utilizing our unique blend of
                    rehabilitation, soft tissue treatments and sports
                    performance skills, our highly trained doctors will put you
                    within reach of the same therapeutic excellence enjoyed
                    elite athletes.
                    <br />
                    <br />
                    Our providers are exceptionally trained Chiropractic Sports
                    Doctors and Physical Therapists, with the highest levels of
                    certification. Our primary mission is to achieve
                    individualized health goals that exceed our patients’
                    expectations. We carefully evaluate each person’s needs,
                    focusing on the root cause of pain and impairment, not just
                    the symptoms.
                    <br />
                    <br />
                    If you are interested in reducing pain, restoring function,
                    preventing reoccurring injuries and improving physical &
                    sports performance, we can help!
                </p>
            </div>
        );
    }
}

export default Who;
