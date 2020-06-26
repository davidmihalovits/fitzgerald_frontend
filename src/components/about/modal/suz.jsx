import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import suz from '../../../assets/suz.png';
import Button from '@material-ui/core/button';

export class Suz extends Component {
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
				<h1>Suzanne - Office Manager</h1>
				<img src={suz} alt="suz" />
				<div className="modal-flexbox">
					<div className="modal-flexbox-intro">
						<p className="suz-paragraph">
							Born and raised locally, Suzanne attended Loudoun County HS in Leesburg and graduated with a
							degree in biology from Denison University in Granville OH. She is a lifelong competitive
							runner and a one-time nationally ranked triathlete. Though the sub 3 hour marathons are in
							the rear view mirror, she still loves endurance sports and finds peace and happiness out on
							the roads and trails. She's passionate about fitness and belives in maintaining a healthy
							lifestyle, enjoys the opportunity to support both patients and providers along the way.
							<br />
							<br />
							Suzanne joins Fitzgerald Spine & Sports Care with a bevy of active living experience while
							working in the running and cycling industries for the last twenty years. Don't hesitate to
							ask her about bikes and running shoes, or running a small business.
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

export default Suz;
