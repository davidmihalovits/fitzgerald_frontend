import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import kristen from '../../../assets/kristen.png';
import Button from '@material-ui/core/button';

export class Kristen extends Component {
	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.props.closeModal();
	}

	render() {
		return (
			<div data-aos="fade-up" className="modal">
				<FontAwesomeIcon
					onClick={this.props.closeModal}
					size="3x"
					className="modal-x"
					color={'#4DB8B8'}
					icon={faTimes}
				/>
				<h1>Kristen Magee, PT, MSPT</h1>
				<img src={kristen} alt="kristen" />
				<div className="modal-flexbox">
					<div className="modal-flexbox-intro">
						<p>
							Kristen studied Kinesiology and Dance at University of Maryland where she earned her BS
							degree. She graduated from Marymount University in 1999 with a Master’s of Science in
							Physical Therapy. For the past 15 years she has been working in the DC metro area at private
							clinics and at larger institutions such as The George Washington University Hospital and
							Kaiser Permanente. Kristen’s interests and expertise lay in orthopedics and sports
							rehabilitation. She believes in a holistic and integrated approach to healing. She uses a
							wide variety of hands-on techniques such as ART, as well as precise exercise prescription
							and other physical therapy modalities to promote healing, wellness and return to sports and
							normal activities.
							<br />
							<br />
							Kristen has been practicing yoga for 10 years and in 2012 completed yoga teacher training.
							Over the last five years she has been studying Reiki and is a Certified Reiki Master
							Practitioner and a Karuna Reiki Master Practitioner. She is currently in year two of a three
							year apprenticeship program for community healing. She enjoys bringing these talents to the
							art of healing through physical therapy.
							<br />
							<br />
							Other interests include dance, musical theater and spending time with her family and
							friends. Kristen has an avid interest in the arts and performs often with local theatre
							companies. She has also recently started to choreograph musicals for community theatre.
						</p>
					</div>
					<hr />
					<div className="modal-flexbox-education">
						<h2>Education</h2>
						<p>- BS, Kinesiology University of Maryland, College Park</p>
						<p>- MS, Physical Therapy Marymount University</p>
						<h2>Board Certified</h2>
						<p>- Physical Therapist VA Board of Medicine</p>
						<h2>Areas of Specialization</h2>
						<p>- Rehabilitation and Therapeutic Exercise</p>
						<p>- Myofascial Release and Soft Tissue Mobilization</p>
						<p>- Active Release Technique</p>
						<p>- Orthopedic Injuries and Post Surgical Rehabilitation</p>
						<p>- Sports injuries</p>
						<p>- Yoga and Dance Injuries</p>
					</div>
				</div>
				<a href="https://fitzgeraldspinesports.janeapp.com" target="_blank" rel="noopener noreferrer">
					<Button>Book now</Button>
				</a>
				<div className="overlay">&nbsp;</div>
			</div>
		);
	}
}

export default Kristen;
