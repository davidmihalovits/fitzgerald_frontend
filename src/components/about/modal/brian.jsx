import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import brian from '../../../assets/brian.jpg';
import Button from '@material-ui/core/button';

export class Brian extends Component {
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
				<h1>Dr. Brian Fitzgerald</h1>
				<img src={brian} style={{ borderRadius: '50%' }} alt="brian" />
				<div className="modal-flexbox">
					<div className="modal-flexbox-intro">
						<p className="brian-paragraph">
							Dr. Fitzgerald is a 2015 graduate of New York Chiropractic College. He is a 2009 graduate of
							George Mason University & was a NCAA Division I athlete as a member of the men's tennis
							team. He has been in practice in the DC metro region since 2015.
							<br />
							<br />
							He has taken advanced training & is certified in Dry Needling, Active Release Techniques,
							Kinesio Taping, Spine Research Institute of San Diego Modules I-IV, NRCME certification for
							D.O.T. exams. He uses a combination of various techniques in order to provide the best care
							for his patients.
							<br />
							<br />
							Dr. Fitzgerald uses an integrative & evidence based approach to health care which allows him
							to treat a variety of patients. He enjoys treating patients from active healthy to advanced
							athletes.
							<br />
							<br />
							Dr. Fitzgerald grew up in the Fairfax area, is married, has 3 children. He enjoys the
							outdoors, swimming, soccer, golf and tennis.
						</p>
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

export default Brian;
