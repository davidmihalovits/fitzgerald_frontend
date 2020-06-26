import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import reilly from '../../../assets/reilly.png';
import Button from '@material-ui/core/button';

export class Reilly extends Component {
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
				<h1>Ann O. Reilly, D.C.</h1>
				<img src={reilly} alt="reilly" />
				<div className="modal-flexbox">
					<div className="modal-flexbox-intro">
						<p>
							Dr. Reilly is a Cum Laude graduate of Palmer College of Chiropractic, Florida. She has
							recently joined Fitzgerald Spine & Sports Care after returning to the Northern Virginia
							area. As a native to the area she is happy to be back and looking forward to serving in our
							community.
							<br />
							<br />
							Dr. Reilly has taken additional courses in Instrument Assisted Soft Tissue Methods,
							Kinesiotaping, Active Release Technique and Performance Movement Techniques. She is a
							certified Rocktape FMT Movability provider using functional taping skills to promote
							movement strategies and enhance performance. These taping skills can further be utilized to
							improve pain and posture that can be associated with common injuries.
							<br />
							<br />
							Dr. Reilly’s diverse experience includes treating a various array of patients including:
							infants, pediatrics, pregnant women, athletes, robust Fijian's, the geriatric population,
							and the partially disabled. Dr. Reilly spent two weeks in Fiji providing Humanitarian
							services including Chiropractic care with the Palmer Chiropractic Clinic Abroad Program.
							This opportunity provided her with excellent hands on experience, lead to the expansion of
							her health screening and critical thinking skills and was an invaluable cultural experience.
							<br />
							<br />A native of Loudoun County, Dr. Reilly currently resides in Leesburg, VA. During her
							free time she enjoys hiking and spending time with her German Shepherds, scuba diving,
							attending spin classes and swimming.
						</p>
					</div>
					<hr />
					<div className="modal-flexbox-education">
						<h2>Education</h2>
						<p>- BS, Biology – Virginia Polytechnic Institute and State University (Virginia Tech)</p>
						<p>- DC, Doctor of Chiropractic – Palmer College of Chiropractic, Florida Campus</p>
						<h2>Board Certified</h2>
						<p>- Doctor of Chiropractic – VA board of Medicine</p>
						<h2>Areas of Specialization</h2>
						<p>- Sports Medicine</p>
						<p>- Active Release Technique</p>
						<p>- Neck</p>
						<p>- Shoulder</p>
						<p>- Back/Spinal Conditions</p>
						<p>- Pediatrics and Pregnancy</p>
						<p>- Sinus relief</p>
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

export default Reilly;
