import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/button';
import './servicesModal.sass';
import rehab1 from '../../../assets/rehab1.png';
import rehab2 from '../../../assets/rehab2.png';

export class Rehab extends Component {
	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.props.closeModal();
	}

	render() {
		return (
			<div data-aos="fade-up" className="modal-services">
				<FontAwesomeIcon
					onClick={this.props.closeModal}
					size="3x"
					className="modal-x"
					color={'#4DB8B8'}
					icon={faTimes}
				/>
				<h1>Rehabilitation & Exercises</h1>
				<div className="modal-description">
					<h2>We will personally design and guide you through a custom rehabilitation or fitness program.</h2>
					<p>
						Exercise is an essential factor in injury prevention, sports conditioning, and injury
						rehabilitation. We can help you with muscular imbalances, faulty neuromuscular coordination,
						inadequate ligament or tendon strength, inadequate muscle or cardiovascular endurance,
						inadequate muscle bulk, problems with flexibility and problems related to body composition.
					</p>
					<img src={rehab1} alt="" />
					<img src={rehab2} alt="" />
					<p>Contact Us with your questions or for more information about rehabilitative exercises.</p>
				</div>
				<a href="https://fitzgeraldspinesports.janeapp.com" target="_blank" rel="noopener noreferrer">
					<Button>Book now</Button>
				</a>
				<div className="overlay">&nbsp;</div>
			</div>
		);
	}
}

export default Rehab;
